import React, { useRef, useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ModalContext } from '~/components/ModalDelete';
import DangerZone from '~/components/DangerZone';
import Button from '~/components/Button';
import Input from '~/components/Material/Input';
import MultipleSelect from '~/components/Material/MultipleSelect';
import yup from '~/lib/yup';
import api from '~/services/api';

import { Container, Content, Title, SaveZone } from './styles';
import Editor from './Editor';
import Cover from './Cover';

const Store = () => {
  const { id } = useParams();
  const history = useHistory();

  const formRef = useRef(null);
  const editorRef = useRef(null);
  const coverRef = useRef(null);

  const { open } = useContext(ModalContext);

  const [tags, setTags] = useState();
  const [initialData, setInitialData] = useState();

  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await api.get(`/tags?page=1&perPage=100`);

        setTags(res.data);
      } catch (error) {
        toast.error('Erro ao buscar as tags...');
      }
    };
    getTags();

    const getArticle = async () => {
      try {
        const res = await api.get(`/article/${id}`);
        const { data } = res.data;

        setInitialData(data);

        editorRef.current.setValue(data.content);
        coverRef.current.setSrc(
          `${process.env.REACT_APP_API_URL}/image/${data.cover}`
        );
      } catch (error) {
        toast.error('Erro ao buscar o artigo...');
      }
    };
    getArticle();
  }, [id]);

  const handleSubmit = async form => {
    try {
      formRef.current.setErrors({});
      editorRef.current.setError('');
      coverRef.current.setError('');

      const data = {
        ...form,
        content: editorRef.current.getData(),
        cover_path: coverRef.current.getPath(),
        cover: coverRef.current.getData(),
      };

      const schema = yup.object().shape({
        title: yup
          .string()
          .min(5)
          .required()
          .label('Título'),
        content: yup
          .string()
          .min(5)
          .required()
          .label('Conteúdo'),
        tags: yup
          .string()
          .required()
          .label('Tags'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const formData = new FormData();

      formData.append('_id', id);
      formData.append('title', data.title);
      if (data.cover_path) {
        formData.append('cover', data.cover);
      }
      formData.append('content', data.content);
      formData.append('tags', JSON.stringify(data.tags.split(',')));

      try {
        const res = await api.put(`/article`, formData);

        if (res.status === 200) {
          toast.success('Sucesso ao salvar o artigo!');
          history.push('/articles');
        }
      } catch (err) {
        toast.error('Erro ao salvar o artigo!');
      }
    } catch (err) {
      const validationErrors = {};
      if (err) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);

        if (validationErrors.cover_path) {
          coverRef.current.setError(validationErrors.cover_path);
        }

        if (validationErrors.content) {
          editorRef.current.setError(validationErrors.content);
        }
      }
    }
  };

  const onDelete = res => {
    if (res.status === 200) {
      toast.success('Sucesso ao deletar o artigo!');
      history.push('/articles');
    } else {
      toast.error('Error ao deletar o artigo!');
    }
  };

  const handleClickDelete = () =>
    open({
      url: `/article/${id}`,
      title: 'Deseja deseja deletar o artigo?',
      onDelete,
      autoClose: true,
    });

  return (
    <Container>
      {initialData && (
        <Content
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={initialData}
        >
          <Title>Editando artigo</Title>
          {tags && (
            <MultipleSelect
              label="Tags"
              name="tags"
              options={tags.data.map(t => ({ value: t._id, label: t.name }))}
            />
          )}
          <Input label="Título" name="title" />
          <Cover ref={coverRef} />
          <Editor ref={editorRef} />
          <SaveZone>
            <Button to="/articles" color="invert-back">
              Cancelar
            </Button>
            <Button type="submit" color="success">
              Salvar
            </Button>
          </SaveZone>
          <DangerZone text="Deletar o artigo" onClick={handleClickDelete} />
        </Content>
      )}
    </Container>
  );
};

export default Store;

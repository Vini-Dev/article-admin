import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Material/Input';
import MultipleSelect from '~/components/Material/MultipleSelect';
import yup from '~/lib/yup';
import api from '~/services/api';

import { Container, Content, Title, SaveZone } from './styles';
import Editor from './Editor';
import Cover from './Cover';

const Store = () => {
  const formRef = useRef(null);
  const editorRef = useRef(null);
  const coverRef = useRef(null);

  const history = useHistory();
  const [tags, setTags] = useState();

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
  }, []);

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
        cover_path: yup
          .string()
          .required()
          .label('Capa'),
        tags: yup
          .string()
          .required()
          .label('Tags'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('cover', data.cover);
      formData.append('content', data.content);
      formData.append('tags', JSON.stringify(data.tags.split(',')));

      try {
        const res = await api.post(`/article`, formData);

        if (res.status === 201) {
          toast.success('Sucesso ao cadastrar o artigo!');
          history.push('/articles');
        }
      } catch (err) {
        toast.error('Erro ao cadastrar o artigo!');
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

  return (
    <Container>
      <Content ref={formRef} onSubmit={handleSubmit}>
        <Title>Novo artigo</Title>
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
      </Content>
    </Container>
  );
};

export default Store;

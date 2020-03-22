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

const Store = () => {
  const formRef = useRef(null);
  const editorRef = useRef(null);

  const history = useHistory();
  const [tags, setTags] = useState();

  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await api.get(`/tags?page=1&perPage=100`);
        console.log(res.data);
        setTags(res.data);
      } catch (error) {
        toast.error('Erro ao buscar as tags...');
      }
    };
    getTags();
  }, []);

  const handleSubmit = async formData => {
    try {
      const data = {
        ...formData,
        content: editorRef.current.getData(),
      };

      const schema = yup.object().shape({
        title: yup
          .string()
          .required()
          .label('Título'),
        content: yup
          .string()
          .required()
          .label('Conteúdo'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      // try {
      //   const res = await api.post(`/tag`, data);
      //   console.log(res);

      //   if (res.status === 201) {
      //     toast.success('Sucesso ao cadastrar a tag!');
      //     history.push('/tags');
      //   }
      // } catch (err) {
      //   toast.error('Erro ao cadastrar a tag!');
      // }
    } catch (err) {
      const validationErrors = {};
      if (err) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
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
        <Input label="" placeholder="Título" name="title" />
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

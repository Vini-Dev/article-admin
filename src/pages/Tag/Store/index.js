import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Material/Input';
import yup from '~/lib/yup';
import api from '~/services/api';

import { Container, Content, Title, SaveZone } from './styles';

const Store = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const handleSubmit = async data => {
    try {
      const schema = yup.object().shape({
        name: yup
          .string()
          .required()
          .label('Nome'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      try {
        const res = await api.post(`/tag`, data);

        if (res.status === 201) {
          toast.success('Sucesso ao cadastrar a tag!');
          history.push('/tags');
        }
      } catch (err) {
        toast.error('Erro ao cadastrar a tag!');
      }
    } catch (err) {
      toast.error('Error!');
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
        <Title>Nova tag</Title>
        <Input label="Nome" name="name" />
        <SaveZone>
          <Button to="/tags" color="invert-back">
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

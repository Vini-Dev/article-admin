import React, { useRef, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Input from '~/components/Material/Input';
import yup from '~/lib/yup';
import api from '~/services/api';

import { Container, Content, Title, SaveZone } from './styles';

const Store = () => {
  const { id } = useParams();
  const history = useHistory();
  const formRef = useRef(null);
  const [initialData, setInitialData] = useState('');

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const res = await api.get(`/tag/${id}`);

        if (res.status === 200) {
          setInitialData(res.data.data);
        }
      } catch (error) {
        toast.error('Error!');
      }
    };

    getInitialData();
  }, [id]);

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
        const res = await api.put(`/tag`, { _id: id, ...data });

        if (res.status === 200) {
          toast.success('Sucesso ao salvar a tag!');
          history.push('/tags');
        }
      } catch (err) {
        toast.error('Error ao salvar a tag!');
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

  console.log(initialData);
  return (
    <Container>
      {initialData && (
        <Content
          ref={formRef}
          initialData={initialData}
          onSubmit={handleSubmit}
        >
          <Title>Editando tag</Title>
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
      )}
    </Container>
  );
};

export default Store;

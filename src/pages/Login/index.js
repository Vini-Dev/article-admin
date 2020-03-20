import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '~/components/Button';
import Checkbox from '~/components/Material/Checkbox';
import Input from '~/components/Material/Input';
import yup from '~/lib/yup';
import api from '~/services/api';
import { login } from '~/services/auth';

import { Container, FormContainer, Title, Controls } from './styles';

const Login = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const handleSubmit = async data => {
    try {
      const schema = yup.object().shape({
        login: yup
          .string()
          .required()
          .label('Usuário'),
        password: yup
          .string()
          .required()
          .label('Senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      try {
        const res = await api.post('/sessions', data);

        if (res.status === 200) {
          login(res.data);
          history.push(localStorage.getItem('last_url') || '/welcome');
        }
      } catch (error) {
        toast.error('Usuário ou senha inválida!');
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
      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input name="login" label="Usuário" />
        <Input type="password" name="password" label="Senha" />
        <Controls>
          <Checkbox name="remenber" label="Manter sessão" defaultValue />
        </Controls>
        <Button type="submit">Entrar</Button>
      </FormContainer>
    </Container>
  );
};

export default Login;

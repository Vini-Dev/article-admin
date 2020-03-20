import styled from 'styled-components';
import { Form } from '@unform/web';
import FadeIn from '~/styles/animations/FadeIn';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormContainer = styled(Form)`
  ${FadeIn}
  z-index: 2;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 60px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

  .material-checkbox .MuiTypography-root {
    color: #636366;
    font-size: 16px;
  }

  .material-input {
    margin-bottom: 15px;
  }

  .root-button {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #1c1c1e;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

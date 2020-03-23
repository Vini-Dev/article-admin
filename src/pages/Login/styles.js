import styled from 'styled-components';
import { Form } from '@unform/web';
import FadeIn from '~/styles/animations/FadeIn';
import devices from '~/styles/config/device';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media ${devices.mobile} {
    padding: 15px;
  }
`;

export const FormContainer = styled(Form)`
  ${FadeIn}
  z-index: 2;
  padding: 60px;
  border-radius: 8px;
  width: 100%;
  max-width: 440px;
  background-color: ${({ theme }) => theme.formBackground};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

  .material-checkbox .MuiTypography-root {
    color: ${({ theme }) => theme.foreground.scale3};
    font-size: 16px;
  }

  .material-input {
    margin-bottom: 15px;
  }

  .root-button {
    width: 100%;
  }

  @media ${devices.mobile} {
    padding: 45px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.formTitleForeground};
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

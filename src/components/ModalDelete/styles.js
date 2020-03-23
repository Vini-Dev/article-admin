import styled from 'styled-components';
import { Form } from '@unform/web';
import devices from '~/styles/config/device';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: #00000040;

  display: flex;
  align-items: center;
  justify-content: center;

  .material-input {
    width: 100%;
    max-width: 200px;
    margin-top: 15px;
    margin-bottom: 30px;

    .MuiInput-root.MuiInput-underline:after {
      border-color: #1c1c1e;
    }
  }

  button.invert {
    color: #636366;
    margin-right: 15px;

    &:hover {
      color: #2c2c2e;
    }
  }

  @media ${devices.mobile} {
    padding: 15px;
  }
`;

export const Content = styled(Form)`
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 60px;
  box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.1);

  @media ${devices.mobile} {
    padding: 45px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  color: #1c1c1e;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Instruction = styled.div`
  font-size: 16px;
  color: #2c2c2e;
`;
export const DeleteString = styled.span`
  color: #1c1c1e;
  font-weight: 700;
`;

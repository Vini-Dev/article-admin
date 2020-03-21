import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled(Form)`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  .material-input {
    margin-bottom: 15px;
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
`;

export const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SaveZone = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 15px;

  .invert-back {
    margin-right: 15px;
  }
`;

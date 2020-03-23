import styled from 'styled-components';
import { Form } from '@unform/web';
import devices from '~/styles/config/device';

export const Container = styled.div`
  @media ${devices.laptop} {
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const Content = styled(Form)`
  width: 100%;

  padding: 30px;
  .material-input {
    margin-top: 15px;
  }

  @media ${devices.laptop} {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const Title = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground.scale0};
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

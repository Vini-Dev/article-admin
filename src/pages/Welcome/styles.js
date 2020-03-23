import styled from 'styled-components';
import device from '~/styles/config/device';

export const Container = styled.div`
  background-color: #fff;
  padding: 60px;
  height: 100vh;
`;

export const Greeting = styled.div`
  font-size: 32px;
  color: #48484a;

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

export const Name = styled.div`
  font-size: 48px;
  color: #1c1c1e;
  font-weight: 800;

  @media ${device.mobile} {
    font-size: 32px;
  }
`;

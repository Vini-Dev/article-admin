import styled from 'styled-components';
import device from '~/styles/config/device';

export const Container = styled.div`
  padding: 60px;
  height: 100vh;
`;

export const Greeting = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.foreground.scale2};

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

export const Name = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.foreground.scale0};
  font-weight: 800;

  @media ${device.mobile} {
    font-size: 32px;
  }
`;

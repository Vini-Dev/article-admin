import styled from 'styled-components';

export const Container = styled.div`
  padding: 60px;
  height: 100vh;
`;

export const Greeting = styled.div`
  font-size: 32px;
  color: ${({ theme }) => theme.foreground.scale2};
`;

export const Name = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.foreground.scale0};
  font-weight: 800;
`;

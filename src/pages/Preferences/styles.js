import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 440px;
  /* background-color: ${({ theme }) => theme.formBackground}; */

  .material-select {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.formTitleForeground};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  width: 100%;
`;

export const ThemeCard = styled.div`
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 4px;
  padding: 15px;
`;

export const ThemeLabel = styled.span`
  margin-left: 15px;
  font-size: 16px;
  color: ${({ theme }) => theme.foreground.scale0};
`;

// color: ${({ theme }) => theme.foreground.scale3};

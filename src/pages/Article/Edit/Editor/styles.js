import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;

  .medium-editor-element {
    font-size: 16px;
    color: ${({ theme }) => theme.inputForeground};
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.inputErrorLabelForeground};
`;

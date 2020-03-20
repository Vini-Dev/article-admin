import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 100vh;
  grid-template-areas: 'menu content';
`;

export const Content = styled.div`
  overflow-y: hidden;
  grid-area: content;
  border-left: 1px solid #eee;
`;

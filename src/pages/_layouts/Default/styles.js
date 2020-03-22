import styled from 'styled-components';
import devices from '~/styles/config/device';

export const Container = styled.div`
  @media ${devices.mobile} {
    padding-top: 60px;
  }

  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: 'menu content';
  }
`;

export const Content = styled.div`
  @media ${devices.laptop} {
    overflow-y: hidden;
    grid-area: content;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: 'menu content';
  }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FadeIn from '~/styles/animations/FadeIn';
import devices from '~/styles/config/device';

export const Container = styled.div`
  @media ${devices.laptop} {
    height: 100vh;
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  ${FadeIn}
  padding: 15px;

  @media ${devices.laptop} {
    width: 100%;
  }
`;

export const HeadControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.foreground.scale0};
`;

export const NoContent = styled.div`
  ${FadeIn}

  > svg {
    width: 100%;
    max-height: 70vh;
  }
`;

export const GridCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 15px;
`;

export const Card = styled(Link)`
  cursor: pointer;
  display: block;
  text-decoration: none;
  position: relative;
  padding: 15px 5px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.cardBorder};
  }

  &:hover {
    > div:first-of-type,
    svg {
      color: ${({ theme }) => theme.buttonActionBackground};
    }
  }
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground.scale0};
  transition: color 200ms linear;
`;

export const CardTime = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.foreground.scale4};

  @media ${devices.mobile} {
    font-size: 12px;
  }
`;

export const CardRedirectIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  right: 0;
  height: 100%;
  padding: 15px;

  svg {
    color: ${({ theme }) => theme.foreground.scale4};
    transition: color 200ms linear;
  }
`;

import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import FadeIn from '~/styles/animations/FadeIn';
import devices from '~/styles/config/device';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.menuBackground};

  @media ${devices.mobile} {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 99999;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
  }

  @media ${devices.laptop} {
    height: 100%;
    width: 100%;
    grid-area: menu;
    padding: 30px;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) =>
    theme.name === 'light' ? theme.foreground.scale7 : theme.foreground.scale0};

  @media ${devices.mobile} {
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${devices.laptop} {
    position: relative;
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 30px;
  }
`;

export const Toggle = styled.button`
  display: none;

  font-size: 14px;
  font-weight: 500;

  padding: 8px 12px;
  height: 100%;
  color: ${({ theme }) =>
    theme.name === 'light' ? theme.foreground.scale7 : theme.foreground.scale0};

  border: none;
  background-color: transparent;

  svg {
    ${FadeIn}
    pointer-events: none;
    font-size: 24px;
  }

  @media ${devices.mobile} {
    display: block;
  }
`;

export const Logout = styled.button`
  font-size: 14px;
  font-weight: 500;

  padding: 8px 12px;
  color: ${({ theme }) =>
    theme.name === 'light' ? theme.foreground.scale7 : theme.foreground.scale0};
  border: none;
  background-color: transparent;

  svg {
    ${FadeIn}
    pointer-events: none;
    font-size: 24px;
  }

  @media ${devices.mobile} {
    display: block;
    height: 100%;
  }
  @media ${devices.laptop} {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }
`;

export const Modal = styled.div`
  @media ${devices.mobile} {
    height: calc(100vh - 60px);
    top: 60px;
    left: 0;
    position: fixed;
    width: 100vw;
    padding: 30px;
    background-color: ${({ theme }) => theme.menuBackground};

    ${({ isOpen }) =>
      isOpen
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }

  @media ${devices.laptop} {
    height: 100vh;
    width: 100%;
  }
`;

export const Item = styled(Link)`
  display: inline-block;
  width: 100%;
  border-radius: 4px;
  padding: 10px 0;
  color: ${({ theme }) => theme.foreground.scale6};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 200ms linear;

  ${({ current, theme }) =>
    current &&
    css`
      color: ${theme.buttonActionBackground};
      background-color: ;
      &:hover {
        color: ${darken(0.03, theme.buttonActionBackground)};
      }
    `}
`;

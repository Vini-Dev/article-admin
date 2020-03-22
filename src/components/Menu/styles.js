import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import FadeIn from '~/styles/animations/FadeIn';
import devices from '~/styles/config/device';

export const Container = styled.div`
  background-color: #1c1c1e;

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

    border-right: 1px solid #eee;
  }
`;

export const Title = styled.div`
  color: #ffffff;

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
  color: #ffffff;
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
  display: none;

  font-size: 14px;
  font-weight: 500;

  padding: 8px 12px;
  height: 100%;
  color: #ffffff;
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

export const Modal = styled.div`
  @media ${devices.mobile} {
    height: calc(100vh - 60px);
    top: 60px;
    left: 0;
    position: fixed;
    width: 100vw;
    padding: 30px;
    background-color: #2c2c2e;

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
  color: #c7c7cc;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: color 200ms linear;

  ${({ current }) =>
    current &&
    css`
      color: #5856d6;

      &:hover {
        color: ${darken(0.03, '#5856D6')};
      }
    `}
`;

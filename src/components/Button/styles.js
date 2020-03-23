import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
import Ripple from '~/styles/animations/Ripple';

export const Container = styled.button`
  ${Ripple}
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.buttonForeground};

  &.invert {
    color: ${({ theme }) => theme.buttonInvertForeground};
    background-color: ${({ theme }) => theme.buttonInvertBackground};
  }

  &.invert-back {
    color: ${({ theme }) => theme.foreground.scale4};
    background-color: ${({ theme }) => theme.buttonInvertBackground};

    &:hover {
      color: ${({ theme }) => theme.foreground.scale3};
    }
  }

  &.invert-border {
    color: ${({ theme }) => theme.buttonInvertForeground};
    background-color: ${({ theme }) => theme.buttonInvertBackground};
    border: 1px solid ${({ theme }) => theme.buttonInvertForeground};

    &:hover {
      color: ${({ theme }) => darken(0.03, theme.buttonInvertForeground)};
      border: 1px solid
        ${({ theme }) => darken(0.03, theme.buttonInvertForeground)};
    }
  }

  &.action {
    background-color: ${({ theme }) => theme.buttonActionBackground};

    &:hover {
      background-color: ${({ theme }) =>
        darken(0.03, theme.buttonActionBackground)};
    }
  }

  &.success {
    background-color: ${({ theme }) => theme.buttonSuccessBackground};

    &:hover {
      background-color: ${({ theme }) =>
        darken(0.03, theme.buttonSuccessBackground)};
    }
  }

  &.danger {
    background-color: ${({ theme }) => theme.buttonDangerBackground};

    &:hover {
      background-color: ${({ theme }) =>
        darken(0.03, theme.buttonDangerBackground)};
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

import styled from 'styled-components';
import Ripple from '~/styles/animations/Ripple';

export const Container = styled.div`
  padding-top: 30px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid ${({ theme }) => theme.buttonDangerBackground};
    border-radius: 4px;

    span {
      color: ${({ theme }) => theme.foreground.scale3};
      font-size: 16px;
    }

    button {
      ${Ripple}
      color: ${({ theme }) => theme.buttonDangerBackground};
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.buttonDangerBorder};
      background-color: transparent;
      transition: background-color 200ms linear, color 200ms linear,
        border-color 200ms linear;

      &:hover {
        color: ${({ theme }) => theme.buttonForeground};

        border-color: ${({ theme }) => theme.buttonDangerBackground};
        background-color: ${({ theme }) => theme.buttonDangerBackground};
      }
    }
  }
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground.scale2};
  display: inline-block;
  margin-bottom: 15px;
`;

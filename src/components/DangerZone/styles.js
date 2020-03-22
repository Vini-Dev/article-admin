import styled from 'styled-components';
import Ripple from '~/styles/animations/Ripple';

export const Container = styled.div`
  padding-top: 30px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid #ff3b30;
    border-radius: 4px;

    span {
      color: #48484a;
      font-size: 16px;
    }

    button {
      ${Ripple}
      color: #ff3b30;
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid #eeeeee;
      background-color: transparent;
      transition: background-color 200ms linear, color 200ms linear,
        border-color 200ms linear;

      &:hover {
        color: #ffffff;
        border-color: #ff3b30;
        background-color: #ff3b30;
      }
    }
  }
`;

export const Title = styled.span`
  font-size: 18px;
  color: #2c2c2e;
  display: inline-block;
  margin-bottom: 15px;
`;

import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background-color: ${({ theme }) => theme.switchBackgroundActive};
      &:before {
        -webkit-transform: translateX(16px);
        background-color: ${({ theme }) => theme.switchToggleBackgroundActive};
        -ms-transform: translateX(16px);
        transform: translateX(16px);
      }
    }
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.switchBackground};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: ${({ theme }) => theme.switchToggleBackground};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
    &.round {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
  }
`;

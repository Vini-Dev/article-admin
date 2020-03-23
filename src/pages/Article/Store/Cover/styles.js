import styled, { css, keyframes } from 'styled-components';

const fading = keyframes`
  0% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.6  ;
  }
`;

export const Container = styled.div``;

export const Content = styled.label`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  border-radius: 4px;
  background-color: #eee;
  margin-top: 30px;
  text-align: center;
  transition: background-color 200ms linear, background-image 200ms linear;

  input {
    display: none;
  }

  svg {
    color: #636366;
    font-size: 32px;
  }

  ${({ src }) =>
    src !== '' &&
    css`
      background-position: center;
      background-size: cover;
      background-image: url('${src}');
    `}

  ${({ progress }) =>
    progress > 0 && progress < 100
      ? css`
          background-color: #d1d1d6;
          animation: ${fading} 1s infinite;
        `
      : ''}
`;

export const Bar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 100%;
  background-color: #d1d1d6;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background-color: #34c759;
    transition: width 200ms linear;
  }

  ${({ progress }) =>
    progress > 0
      ? css`
          display: block;

          &:before {
            width: ${progress}%;
          }
        `
      : css`
          display: none;
        `}
`;

export const ClickMessage = styled.span`
  color: #636366;
`;

export const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.inputErrorLabelForeground};
`;

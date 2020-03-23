import styled from 'styled-components';
import LoadingBar from '@material-ui/core/LinearProgress';

export const Block = styled.div`
  cursor: wait;
  z-index: 999998;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
`;

export const BoxBar = styled.div`
  z-index: 999999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`;

export const Bar = styled(LoadingBar)`
  &.MuiLinearProgress-colorPrimary {
    color: ${({ theme }) => theme.buttonActionBackground};

    .MuiLinearProgress-barColorPrimary {
      background-color: ${({ theme }) => theme.buttonActionBackground};
    }
  }
`;

import styled, { css } from 'styled-components';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import { Link } from 'react-router-dom';

export const Container = styled(TableContainer)``;

export const Cell = styled(TableCell)`
  &.MuiTableCell-root {
    ${({ hidden }) =>
      hidden &&
      css`
        pointer-events: none;

        svg {
          color: #fafafa;
        }
      `}
  }
`;

export const Open = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:hover {
    svg {
      color: #007aff;
    }
  }

  svg {
    font-size: 18px;
    color: #1c1c1e;
  }
`;

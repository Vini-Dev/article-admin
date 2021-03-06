import styled from 'styled-components';
import { lighten } from 'polished';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const Container = styled.div``;

export const Input = styled(FormControlLabel)`
  &.MuiFormControlLabel-root {
    margin: 0 0 0 -5px;
    user-select: none;

    > .MuiIconButton-root {
      padding: 5px;
    }
  }
`;

export const Checkbox = styled(MuiCheckbox)`
  &.MuiCheckbox-root.Mui-checked {
    color: ${({ theme }) => theme.buttonActionBackground};
  }
  &.MuiCheckbox-root:hover {
    background-color: ${({ theme }) =>
      lighten(0.3, theme.buttonActionBackground)};
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.inputErrorLabelForeground};
`;

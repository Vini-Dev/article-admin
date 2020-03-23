import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export const Container = styled(FormControl)``;

export const SelectField = styled(Select)`
  &.MuiInput-underline {
    color: ${({ theme }) => theme.inputForeground};

    &:before {
      border-color: ${({ theme }) => theme.inputBorder};
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid ${({ theme }) => theme.inputBorderHover};
    }

    &:after {
      border-color: ${({ theme }) => theme.inputActiveBorder};
    }
    &.Mui-error:after {
      border-color: ${({ theme }) => theme.inputErrorBorder};
    }
  }
`;

export const Label = styled(InputLabel)`
  &.MuiFormLabel-root {
    color: ${({ theme }) => theme.inputForeground};

    &.Mui-focused {
      color: ${({ theme }) => theme.inputActiveLabelForeground};
    }
  }

  &.Mui-error {
    color: ${({ theme }) => theme.inputErrorLabelForeground};
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.inputErrorLabelForeground};
`;

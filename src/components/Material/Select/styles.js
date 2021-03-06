import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const Container = styled.div``;

export const SelectField = styled(TextField)`
  .MuiFormLabel-root {
    color: ${({ theme }) => theme.inputForeground};

    &.Mui-focused {
      color: ${({ theme }) => theme.inputActiveLabelForeground};
    }
    &.Mui-error {
      color: ${({ theme }) => theme.inputErrorLabelForeground};
    }
  }
  .MuiInput-root {
    color: ${({ theme }) => theme.inputForeground};

    &.MuiInput-underline {
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
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.inputErrorLabelForeground};
`;

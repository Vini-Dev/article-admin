import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

// Style
import { Container, SelectField, Error } from './styles';

const Select = ({ name, label, options, className, ...rest }) => {
  const inputRef = useRef(null);

  const Field = useField(name);
  const { fieldName, registerField, error } = Field;

  useEffect(() => {
    if (!rest.value)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'node.value',
      });
  }, [fieldName, registerField, rest.value]);

  const props = {
    ...rest,
    ...(!rest.value
      ? { defaultValue: Field.defaultValue || '' }
      : { value: rest.value }),
  };

  return (
    <Container className={`material-select ${className}`}>
      <SelectField
        inputRef={inputRef}
        name={fieldName}
        label={label}
        select
        fullWidth
        error={error !== undefined}
        {...props}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectField>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Select.defaultProps = {
  className: '',
};

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;

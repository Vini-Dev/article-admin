import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

// Style
import { Container, SelectField, Label, Error } from './styles';

const MultipleSelect = ({ name, label, options, ...rest }) => {
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
      ? { defaultValue: Field.defaultValue || [] }
      : { value: rest.value }),
  };

  return (
    <Container className="material-multiple-select" fullWidth>
      <Label id={fieldName} className={error && 'Mui-error'}>
        {label}
      </Label>
      <SelectField
        inputRef={inputRef}
        name={fieldName}
        label={label}
        multiple
        error={error !== undefined}
        input={<Input />}
        {...props}
        {...rest}
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

MultipleSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MultipleSelect;

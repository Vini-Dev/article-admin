import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

// Style
import { Container, InputField, Error } from './styles';

const Input = ({ name, label, hidden, className, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    if (!rest.value)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
  }, [fieldName, registerField, rest.value]);

  const inputProps = {
    inputRef,
    id: fieldName,
    name,
    label,
    defaultValue,
    fullWidth: true,
    type: 'text',
    autoComplete: 'off',
    error: error !== undefined,
    ...rest,
  };

  return (
    <Container className={`material-input ${className}`} hidden={hidden}>
      <InputField {...inputProps} />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Input.defaultProps = {
  hidden: false,
  className: '',
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
};

export default Input;

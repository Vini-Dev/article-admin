import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

// Style
import { Container, Input, Checkbox, Error } from './styles';

const CheckBox = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);

  const Field = useField(name);
  const { fieldName, registerField, error } = Field;

  useEffect(() => {
    if (!rest.checked)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'checked',
      });
  }, [fieldName, registerField, rest.checked]);

  const props = {
    ...rest,
    ...(rest.checked === undefined
      ? { defaultChecked: rest.defaultValue || Field.defaultValue || false }
      : { checked: rest.checked }),
  };

  return (
    <Container className="material-checkbox">
      <Input
        control={
          <Checkbox
            inputRef={inputRef}
            id={fieldName}
            name={fieldName}
            color="default"
            {...props}
          />
        }
        label={label}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CheckBox;

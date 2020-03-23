import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Switch = ({ checked, value, onChange }) => {
  return (
    <Container>
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        defaultChecked={checked}
      />
      <span className="slider round" />
    </Container>
  );
};

Switch.defaultProps = {
  checked: false,
  value: '',
  onChange: () => {},
};

Switch.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default Switch;

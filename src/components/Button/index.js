import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonLink } from './styles';

const Button = ({ children, onClick, type, color, to }) => {
  if (to)
    return (
      <ButtonLink to={to}>
        <Container type="button" className={`${color} root-button`}>
          {children}
        </Container>
      </ButtonLink>
    );

  return (
    <Container onClick={onClick} type={type} className={`${color} root-button`}>
      {children}
    </Container>
  );
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  color: 'action',
  type: 'button',
  to: '',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Button;

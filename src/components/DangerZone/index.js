import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const DangerZone = ({ text, onClick }) => {
  return (
    <Container>
      <Title>Zona perigosa</Title>
      <div>
        <span>{text}</span>
        <button type="button" onClick={onClick}>
          Deletar
        </button>
      </div>
    </Container>
  );
};

DangerZone.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DangerZone;

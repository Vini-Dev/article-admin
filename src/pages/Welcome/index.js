import React from 'react';

import { Container, Greeting, Name } from './styles';

const Welcome = () => {
  const getPeriod = () => {
    const date = new Date();

    const hour = date.getHours();

    switch (true) {
      case hour >= 6 && hour < 12:
        return 'Bom dia';
      case hour >= 12 && hour < 18:
        return 'Boa tarde';

      default:
        return 'Boa noite';
    }
  };

  const emoji = '👋🏻';

  return (
    <Container>
      <Greeting>
        {emoji} {getPeriod()}
      </Greeting>
      <Name>Sr. Administrador!</Name>
    </Container>
  );
};

export default Welcome;

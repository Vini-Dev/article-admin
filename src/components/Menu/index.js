import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';

const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    // Atualiza a última url acessada pelo usuário
    localStorage.setItem('last_url', location.pathname);
  }, [location.pathname]);

  return <Container>Menu</Container>;
};

export default Menu;

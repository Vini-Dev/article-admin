import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

import { Container, Title, Toggle, Modal, Item } from './styles';

const Menu = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Atualiza a última url acessada pelo usuário
    localStorage.setItem('last_url', location.pathname);
  }, [location.pathname]);

  const handleClickModal = () => setOpen(!open);

  return (
    <Container>
      <Toggle type="button" onClick={handleClickModal}>
        {!open ? <IoIosMenu /> : <IoIosClose />}
      </Toggle>
      <Title>Articles</Title>
      <Modal isOpen={open}>
        <Item
          to="/tags"
          current={location.pathname.includes('tag') ? 'active' : ''}
        >
          Tags
        </Item>
        <Item
          to="/articles"
          active={location.pathname.includes('article') ? 'active' : ''}
        >
          Artigos
        </Item>
      </Modal>
    </Container>
  );
};

export default Menu;

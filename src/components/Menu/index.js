import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

import { Container, Title, Toggle, Modal, Item } from './styles';

const modules = [
  {
    label: 'Tags',
    path: '/tags',
    groups: ['/tags', '/tag/add', '/tag/edit'],
  },
  {
    label: 'Artigos',
    path: '/articles',
    groups: ['/articles', '/article/add', '/article/edit'],
  },
];

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
        {modules.map(m => (
          <Item
            key={m.path}
            to={m.path}
            current={m.groups.includes(location.pathname) ? 'active' : ''}
          >
            {m.label}
          </Item>
        ))}
      </Modal>
    </Container>
  );
};

export default Menu;

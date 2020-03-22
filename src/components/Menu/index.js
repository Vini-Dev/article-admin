import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { IoIosMenu, IoIosClose, IoIosLogOut } from 'react-icons/io';
import { logout } from '~/services/auth';

import { Container, Title, Toggle, Logout, Modal, Item } from './styles';

const modules = [
  {
    label: 'Tags',
    path: '/tags',
    group: ['/tags', '/tag'],
  },
  {
    label: 'Artigos',
    path: '/articles',
    group: ['/articles', '/article'],
  },
];

const Menu = () => {
  const location = useLocation();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Atualiza a última url acessada pelo usuário
    localStorage.setItem('last_url', location.pathname);
  }, [location.pathname]);

  const handleClickModal = () => setOpen(!open);

  const handleClickLogout = () => {
    logout();
    history.push('/');
  };

  const isActive = routes =>
    routes.find(route => location.pathname.indexOf(route) !== -1);

  return (
    <Container>
      <Toggle type="button" onClick={handleClickModal}>
        {!open ? <IoIosMenu /> : <IoIosClose />}
      </Toggle>

      <Title>Articles</Title>
      <Logout type="button" onClick={handleClickLogout}>
        <IoIosLogOut />
      </Logout>
      <Modal isOpen={open}>
        {modules.map(m => (
          <Item key={m.path} to={m.path} current={isActive(m.group)}>
            {m.label}
          </Item>
        ))}
      </Modal>
    </Container>
  );
};

export default Menu;

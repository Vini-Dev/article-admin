import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/core';
import { Creators as ThemeActions } from '~/store/ducks/theme';
import Switch from '~/components/Switch';

import { Container, Content, Title, ThemeCard, ThemeLabel } from './styles';

const Preferences = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.theme);

  const handleChangeTheme = () => {
    dispatch(ThemeActions.toggle());
  };

  return (
    <Container>
      <Content>
        <Form>
          <Title>Preferências</Title>
          <ThemeCard>
            <Switch
              label="Tema"
              name="theme"
              checked={currentTheme === 'dark'}
              onChange={handleChangeTheme}
            />
            <ThemeLabel>Modo escuro</ThemeLabel>
          </ThemeCard>
        </Form>
      </Content>
    </Container>
  );
};

export default Preferences;

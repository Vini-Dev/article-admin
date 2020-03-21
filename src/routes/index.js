import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '~/pages/Login';
import Welcome from '~/pages/Welcome';
import Tag from '~/pages/Tag';

import Routes from './Routes';

export default function Router() {
  return (
    <Switch>
      <Routes path="/" public exact component={Login} />
      <Routes path="/welcome" component={Welcome} />
      {/* Tags */}
      <Routes path="/tags" component={Tag.List} />
      <Routes path="/tag/add" component={Tag.Store} />
      <Routes path="/tag/edit/:id" component={Tag.Edit} />
      {/* Rota não encontrada */}
      <Routes path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}

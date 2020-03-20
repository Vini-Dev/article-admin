import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '~/pages/Login';
import Welcome from '~/pages/Welcome';

import Routes from './Routes';

export default function Router() {
  return (
    <Switch>
      <Routes path="/" public exact component={Login} />
      <Routes path="/welcome" component={Welcome} />
      {/* Rota não encontrada */}
      <Routes path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}

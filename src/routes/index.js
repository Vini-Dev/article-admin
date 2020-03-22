import React from 'react';
import { Switch } from 'react-router-dom';
import Article from '~/pages/Article';
import Login from '~/pages/Login';
import Tag from '~/pages/Tag';
import Welcome from '~/pages/Welcome';

import Routes from './Routes';

export default function Router() {
  return (
    <Switch>
      <Routes path="/" public exact component={Login} />
      <Routes path="/welcome" component={Welcome} />
      {/* Articles */}
      <Routes path="/articles" component={Article.List} />
      <Routes path="/article/add" component={Article.Store} />
      <Routes path="/article/edit/:id" component={Article.Edit} />
      {/* Tags */}
      <Routes path="/tags" component={Tag.List} />
      <Routes path="/tag/add" component={Tag.Store} />
      <Routes path="/tag/edit/:id" component={Tag.Edit} />
      {/* Rota não encontrada */}
      <Routes path="*" component={() => <h1>404</h1>} />
    </Switch>
  );
}

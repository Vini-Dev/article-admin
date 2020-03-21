import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { isAuthenticated } from '~/services/auth';
import Default from '~/pages/_layouts/Default';

const RouteWrapper = ({ component: Component, history, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        // Rota login, usuário deslogado
        if (rest.path === '/' && !isAuthenticated()) {
          return <Component {...props} />;
        }

        // Rota privada, usuário deslogado
        if (!rest.public && !isAuthenticated()) {
          return history.push('/');
        }

        // Rota login, usuário logado
        if (rest.path === '/' && isAuthenticated()) {
          return history.push(localStorage.getItem('last_url') || '/welcome');
        }

        return (
          <Default>
            <Component {...props} />
          </Default>
        );
      }}
    />
  );
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default withRouter(RouteWrapper);

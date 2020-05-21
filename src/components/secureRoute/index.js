import React from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

const SecureRoute = ({ component: Component, scopes = [], auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.isAuthenticated()) return auth.login();

        if (scopes.length > 0 && !auth.userHasScopes(scopes)) {
          return (
            <h1>
              Unauthorized - You need the following scope(s) to view this page
              {scopes.join(',')}
            </h1>
          );
        }

        return <Component auth={auth} {...props} />;
      }}
    />
  );
};

export default SecureRoute;

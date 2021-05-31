import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import selectors from '../store/selectors';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(selectors.selectIsAuthenticated);

  // TODO: Check AuthState - Check LocalStorage for user. If present, refresh token to revalidate user

  return (
    <Route render={(props) => (isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />)} {...rest} />
  );
};

export default PrivateRoute;

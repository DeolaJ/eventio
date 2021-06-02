import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import selectors from '../store/selectors';

interface PublicRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PublicRoute: FC<PublicRouteProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(selectors.selectIsAuthenticated);

  return (
    <Route
      render={(props) => (isAuthenticated === false ? <Component {...props} /> : <Redirect to="/dashboard" />)}
      {...rest}
    />
  );
};

export default PublicRoute;

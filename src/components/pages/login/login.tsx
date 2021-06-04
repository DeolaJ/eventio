import { FC } from 'react';

import LoginForm from '../../partials/form/login-form';
import ErrorBoundary from '../../partials/error-boundary/error-boundary';
import AuthWrapper from '../../containers/auth-wrapper/auth-wrapper';

const Login: FC = () => {
  return (
    <ErrorBoundary link="/">
      <AuthWrapper loginState>
        <LoginForm />
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Login;

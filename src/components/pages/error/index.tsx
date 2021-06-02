import { FC } from 'react';

import ErrorMessage from '../../partials/error-message';
import AuthWrapper from '../../containers/auth-wrapper';

const Login: FC = () => {
  return (
    <AuthWrapper loginState>
      <ErrorMessage title="404 Error - page not found" link="/" />
    </AuthWrapper>
  );
};

export default Login;

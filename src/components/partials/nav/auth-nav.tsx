import { FC } from 'react';
import Logo from '../logo/logo';
import AuthSwitch from '../auth-switch/auth-switch';

import { AuthNavContainer } from './auth-nav.styled';

type AuthNavProps = {
  loginState?: boolean;
};

const AuthNav: FC<AuthNavProps> = ({ loginState }) => {
  return (
    <AuthNavContainer>
      <Logo />
      <AuthSwitch loginState={loginState} />
    </AuthNavContainer>
  );
};

export default AuthNav;

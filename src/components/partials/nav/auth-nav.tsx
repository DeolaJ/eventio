import { FC } from 'react';
import BaseNav from './base';
import Logo from '../logo';
import AuthSwitch from '../auth-switch';

type AuthNavProps = {
  loginState?: boolean;
};

const AuthNav: FC<AuthNavProps> = ({ loginState }) => {
  return (
    <BaseNav>
      <Logo />
      <AuthSwitch loginState={loginState} />
    </BaseNav>
  );
};

export default AuthNav;

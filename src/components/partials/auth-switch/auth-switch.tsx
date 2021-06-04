import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AuthSwitchContainer, AuthSwitchButton } from './auth-switch.styled';

type AuthSwitchProps = {
  loginState?: boolean;
};

const AuthSwitch: FC<AuthSwitchProps> = ({ loginState }) => {
  return (
    <AuthSwitchContainer className="auth-switch">
      {loginState ? (
        <>
          {`Don't have an account? `}
          <Link to="/signup">
            <AuthSwitchButton>SIGN UP</AuthSwitchButton>
          </Link>
        </>
      ) : (
        <>
          {`Already have an account? `}
          <Link to="/">
            <AuthSwitchButton>SIGN IN</AuthSwitchButton>
          </Link>
        </>
      )}
    </AuthSwitchContainer>
  );
};

export default AuthSwitch;

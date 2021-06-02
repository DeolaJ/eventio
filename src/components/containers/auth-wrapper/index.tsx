import { FC } from 'react';
import AuthNav from '../../partials/nav/auth-nav';
import GlobalStyles from '../layout/global.styled';
import { AuthContainer, AuthFormContainer, AuthImage } from './auth-wrapper.styled';
import Troppers from '../../../assets/tropper.png';

type AuthWrapperProps = {
  loginState?: boolean;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ children, loginState }) => {
  return (
    <AuthContainer>
      <GlobalStyles />
      <AuthNav loginState={loginState} />
      <AuthImage style={{ backgroundImage: `url(${Troppers})` }} />
      <AuthFormContainer>{children}</AuthFormContainer>
    </AuthContainer>
  );
};

export default AuthWrapper;

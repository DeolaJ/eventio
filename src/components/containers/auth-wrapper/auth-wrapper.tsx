import { FC } from 'react';
import AuthNav from '../../partials/nav/auth-nav';
import GlobalStyles from '../layout/global.styled';
import { AuthContainer, AuthFormContainer, AuthImage } from './auth-wrapper.styled';
import Troopers from '../../../assets/images/troopers.png';
import Quote from '../../../assets/images/quote.svg';

type AuthWrapperProps = {
  loginState?: boolean;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ children, loginState }) => {
  return (
    <AuthContainer>
      <GlobalStyles />
      <AuthNav loginState={loginState} />
      <AuthImage style={{ backgroundImage: `url(${Troopers})` }}>
        <img src={Quote} alt="Han Solo Quote" />
      </AuthImage>
      <AuthFormContainer>{children}</AuthFormContainer>
    </AuthContainer>
  );
};

export default AuthWrapper;

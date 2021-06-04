import { FC } from 'react';
import FormNav from '../../partials/nav/form-nav';
import GlobalStyles from '../layout/global.styled';
import DashboardNav from '../../partials/nav/dashboard-nav';
import { PrivateContainer } from './private-wrapper.styled';

type PrivateWrapperProps = {
  formState?: boolean;
};

const PrivateWrapper: FC<PrivateWrapperProps> = ({ children, formState }) => {
  return (
    <PrivateContainer>
      <GlobalStyles />
      {formState ? <FormNav /> : <DashboardNav />}
      {children}
    </PrivateContainer>
  );
};

export default PrivateWrapper;

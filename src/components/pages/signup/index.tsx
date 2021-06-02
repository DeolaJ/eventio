import { FC } from 'react';

import SignupForm from '../../partials/form/signup-form';
import ErrorBoundary from '../../partials/error-boundary';
import AuthWrapper from '../../containers/auth-wrapper';

const Signup: FC = () => {
  return (
    <ErrorBoundary link="/signup">
      <AuthWrapper>
        <SignupForm />
      </AuthWrapper>
    </ErrorBoundary>
  );
};

export default Signup;

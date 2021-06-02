import { FC } from 'react';

import CreateEventForm from '../../partials/form/create-event-form';
import ErrorBoundary from '../../partials/error-boundary';
import FormNav from '../../partials/nav/form-nav';
import PrivateWrapper from '../../containers/private-wrapper';

const CreateEvent: FC = () => {
  return (
    <ErrorBoundary link="/create-event">
      <PrivateWrapper formState>
        <FormNav />
        <CreateEventForm />
      </PrivateWrapper>
    </ErrorBoundary>
  );
};

export default CreateEvent;

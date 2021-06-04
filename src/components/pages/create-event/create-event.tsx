import { FC } from 'react';

import CreateEventForm from '../../partials/form/create-event-form';
import ErrorBoundary from '../../partials/error-boundary/error-boundary';
import FormNav from '../../partials/nav/form-nav';
import PrivateWrapper from '../../containers/private-wrapper/private-wrapper';
import CardWrapper from '../../containers/card-wrapper/card-wrapper';

import { CreateEventFormContainer } from './create-event.styled';

const CreateEvent: FC = () => {
  return (
    <ErrorBoundary link="/create-event">
      <PrivateWrapper formState>
        <FormNav />
        <CreateEventFormContainer>
          <CardWrapper>
            <CreateEventForm />
          </CardWrapper>
        </CreateEventFormContainer>
      </PrivateWrapper>
    </ErrorBoundary>
  );
};

export default CreateEvent;

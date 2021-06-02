import { FC } from 'react';
import { useParams } from 'react-router-dom';

import ActiveEventDetails from '../../partials/active-event-details';
import ErrorBoundary from '../../partials/error-boundary';
import DashboardNav from '../../partials/nav/dashboard-nav';
import PrivateWrapper from '../../containers/private-wrapper';

const CreateEvent: FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  return (
    <ErrorBoundary link={`/event/${eventId}`}>
      <PrivateWrapper>
        <DashboardNav />
        <ActiveEventDetails />
      </PrivateWrapper>
    </ErrorBoundary>
  );
};

export default CreateEvent;

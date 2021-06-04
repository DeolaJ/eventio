import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ActiveEventDetails from '../../partials/active-event-details/active-event-details';
import ErrorBoundary from '../../partials/error-boundary/error-boundary';
import DashboardNav from '../../partials/nav/dashboard-nav';
import PrivateWrapper from '../../containers/private-wrapper/private-wrapper';

import actions from '../../../store/actions';

const EventDetails: FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetchEvent(eventId));
  }, [dispatch, eventId]);

  return (
    <ErrorBoundary link={`/event/${eventId}`}>
      <PrivateWrapper>
        <DashboardNav />
        <ActiveEventDetails />
      </PrivateWrapper>
    </ErrorBoundary>
  );
};

export default EventDetails;

import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ErrorBoundary from '../../partials/error-boundary/error-boundary';
import DashboardNav from '../../partials/nav/dashboard-nav';
import Events from '../../partials/events/events';
import PrivateWrapper from '../../containers/private-wrapper/private-wrapper';
import CreateEventButton from '../../partials/create-event-button/create-event-button';

import actions from '../../../store/actions';

const Dashboard: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.doFetchAllEvents());
  });

  return (
    <ErrorBoundary link="/dashboard">
      <PrivateWrapper>
        <DashboardNav />
        <Events />
        <CreateEventButton />
      </PrivateWrapper>
    </ErrorBoundary>
  );
};

export default Dashboard;

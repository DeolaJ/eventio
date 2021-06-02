import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../../store/actions';
import ErrorBoundary from '../../partials/error-boundary';
import DashboardNav from '../../partials/nav/dashboard-nav';
import Events from '../../partials/events';
import PrivateWrapper from '../../containers/private-wrapper';
import CreateEventButton from '../../partials/create-event-button';

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

import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PublicRoute from './router/public-route';
import PrivateRoute from './router/private-route';

import Login from './components/pages/login/login';
import Dashboard from './components/pages/dashboard/dashboard';
import Signup from './components/pages/signup/signup';
import CreateEvent from './components/pages/create-event/create-event';
import EventDetails from './components/pages/event-details/event-details';
import ErrorPage from './components/pages/error/error';

import NotificationBanner from './components/partials/notification-banner/notification-banner';

// TODO: Use React Query to Refresh Tokens

function App(): ReactElement {
  return (
    <>
      <NotificationBanner />
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/create-event" component={CreateEvent} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/event/:eventId" component={EventDetails} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

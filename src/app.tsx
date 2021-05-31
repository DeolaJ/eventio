import { ReactElement } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PublicRoute from './router/public-route';
import PrivateRoute from './router/private-route';

import Login from './components/pages/login';
import Events from './components/pages/events';

// TODO: Use React Query to Refresh Tokens

function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        {/* <Route path="/signup" component={Signup} />
        <Route path="/create-event" component={CreateEvent} /> */}
        <PrivateRoute path="/events" component={Events} />
        {/* <PrivateRoute path="/event/id" component={EventPage} />
        <Route component={ErrorPage} /> */}
      </Switch>
    </Router>
  );
}

export default App;

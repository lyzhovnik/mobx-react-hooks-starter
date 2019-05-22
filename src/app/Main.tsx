import * as React from 'react';
import { Router, BrowserRouter, Switch } from 'react-router-dom';

import history from './history';
import routes from './routes';

const isBrowserSupportsHistory = 'pushState' in window.history;

const Main = () => (
  <BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
    <Router history={history}>
      <Switch>{routes}</Switch>
    </Router>
  </BrowserRouter>
);

export default Main;

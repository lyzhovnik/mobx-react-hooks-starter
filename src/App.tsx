import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

import history from './history';
import modules from './modules';

const isBrowserSupportsHistory = 'pushState' in window.history;

const App = () =>
  modules.getDataRoot(
    <BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
      <Router history={history}>
        <Switch>{modules.routes}</Switch>
      </Router>
    </BrowserRouter>,
  );

ReactDOM.render(<App />, document.getElementById('root'));

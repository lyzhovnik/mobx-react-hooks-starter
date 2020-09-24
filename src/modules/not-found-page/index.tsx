import * as React from 'react';
import { Route } from 'react-router-dom';

import Module from '../Connector';
import NotFoundPage from './pages/NotFoundPage';

export default new Module({
  route: <Route component={NotFoundPage} />,
});

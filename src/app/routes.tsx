import * as React from 'react';
import { Route } from 'react-router-dom';

import { LoginPage, MainPage } from '../pages';

const routes = [
  <Route key={1} exact={true} path="/" component={MainPage} />,
  <Route key={2} exact={true} path="/login" component={LoginPage} />
];
//
// {
//   /*<AuthRoute key={6} component={NotFoundPage} />*/
// }
export default routes;

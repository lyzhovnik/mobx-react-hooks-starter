import * as React from 'react';
import { Route } from 'react-router-dom';

import Module from '../Connector';
import { CatListStoreProvider } from './hooks/useCatListStore';
import LocationList from './pages/CatList';

export default new Module({
  route: <Route exact={true} path="/" component={LocationList} />,
  dataRootComponent: [CatListStoreProvider],
});

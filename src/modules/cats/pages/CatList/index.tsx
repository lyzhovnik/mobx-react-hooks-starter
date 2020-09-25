import * as React from 'react';
import { Helmet } from 'react-helmet';

import settings from '../../../../settings';
import AppLayout from '../../../common/components/AppLayout';
import CatList from '../../components/CatList';
import TestTable from '../../components/TestTable';

const LocationListPage = () => (
  <AppLayout>
    <Helmet>
      <title>{`${settings.appName} - Locations page`}</title>
      <meta name="description" content={`${settings.appName} - Locations page`} />
    </Helmet>

    <CatList></CatList>
    <br />
    <br />
    <br />
    <img src="https://i.gifer.com/7YUz.gif" alt="" />
    <br />
    <hr />
    <br />
    <TestTable></TestTable>
  </AppLayout>
);

export default LocationListPage;

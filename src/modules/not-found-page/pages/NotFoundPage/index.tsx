import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import settings from '../../../../settings';
import AppLayout from '../../../common/components/AppLayout';

import styles from './notFoundPage.module.scss';

class PageNotFound extends React.Component {
  public render() {
    return (
      <AppLayout>
        <Helmet>
          <title>{`${settings.appName} - Not found page`}</title>
          <meta name="description" content={`${settings.appName} - Not found page`} />
        </Helmet>

        <div>
          <div className={styles.title}>404</div>
          <div className={styles.subTitle}>Sorry, page wasn&apos;t found.</div>
          <div className={styles.buttonWrapper}>
            <Link to="/">Go to main page</Link>
          </div>
        </div>
      </AppLayout>
    );
  }
}

export default PageNotFound;

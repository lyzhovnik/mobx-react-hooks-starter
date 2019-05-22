import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './loginPage.module.scss';

const MainPage = () => {
  return (
    <div>
      <h1 className={styles.blueColor}>LOGIN page</h1>
      <hr />
      <Link to="/">Main Page</Link>
      <hr />
    </div>
  );
};

export default MainPage;

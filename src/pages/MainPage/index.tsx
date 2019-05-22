import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './mainPage.module.scss';
import { IncreaseButton, CounterView } from '../../components';

const MainPage = () => {
  return (
    <div>
      <h1 className={styles.redColor}>Main page</h1>
      <hr />
      <Link to="login">Login Page</Link>
      <hr />
      <CounterView />
      <br />
      <IncreaseButton />
    </div>
  );
};

export default MainPage;

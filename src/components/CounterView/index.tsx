import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import styles from './counterView.module.scss';
import { counterStoreContext } from '../../stores';

const MainPage = () => {
  const counterStore = useContext(counterStoreContext);

  return (
    <div>
      <h1 className={styles.redColor}>COUNTER: {counterStore.counter}</h1>
    </div>
  );
};

export default observer(MainPage);

import React, { FC } from 'react';

import styles from './appLayout.module.scss';

const AppLayout: FC = ({ children }) => (
  <div className={styles.appLayout}>
    <div>{children}</div>
  </div>
);

export default AppLayout;

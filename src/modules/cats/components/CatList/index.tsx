import React, { useEffect } from 'react';

import useLocationListStore from '../../hooks/useCatListStore';

import styles from './catList.module.scss';

const LocationList = () => {
  const {
    loadCatList,
    state: { loading, error, cats },
  } = useLocationListStore();

  useEffect(() => {
    loadCatList();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (!cats) {
    return <div>No data</div>;
  }

  return (
    <div className={styles.locationList}>
      {cats.map((cat, index) => (
        <div key={index}>{index}</div>
      ))}
    </div>
  );
};

export default LocationList;

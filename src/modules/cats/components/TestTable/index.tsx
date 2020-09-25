import React, { useState } from 'react';

import styles from './catList.module.scss';

const ColumnIndexes = () => (
  <div style={{ display: 'flex', border: '1px solid black', marginTop: 5 }}>
    {[
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ].map(letter => (
      <div style={{ width: 100, textAlign: 'center' }}>{letter}</div>
    ))}
  </div>
);

const RowIndexes = ({ count }: { count: number }) => (
  <div style={{ border: '1px solid black', marginTop: 5 }}>
    {Array.from(Array(count).keys()).map(index => (
      <div style={{ width: 100 }}>{index}</div>
    ))}
  </div>
);

const LocationList = () => {
  const [shouldPaint, setShouldPaint] = useState(false);

  const rows = 100;
  const columns = 26;

  return (
    <div className={styles.locationList}>
      <button onClick={() => setShouldPaint(!shouldPaint)}>Paint table</button>
      <br />
      <br />
      <RowIndexes count={rows}></RowIndexes>
      <div>
        <ColumnIndexes></ColumnIndexes>
        {shouldPaint &&
          Array.from(Array(rows).keys()).map(() => (
            <div style={{ display: 'flex', border: '1px solid black', marginTop: 5 }}>
              {Array.from(Array(columns).keys()).map(() => (
                <div style={{ width: 100 }}>
                  <input type="text" style={{ width: '100%' }} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LocationList;

import React, { useState } from 'react';


import styles from './catList.module.scss';

const LocationList = () => {
  const [shouldPaint, setShouldPaint] = useState(false);

  const rows = 1000;
  const columns = 1000;

  

  return (
    <div className={styles.locationList}>
      <button onClick={()=>setShouldPaint(!shouldPaint)}>Paint table</button>
      <br/>
      <br/>
      {shouldPaint && Array.from(Array(rows).keys()).map(()=> (
        <div style={{display: "flex", border: "1px solid black", marginTop: 5}}>
          {Array.from(Array(columns).keys()).map(()=> (
            <div style={{width: 100}}>
              <input type="text" style={{width: "100%"}}/>
            </div>

          ))}
        </div>
      ))}
    </div>
  );
};

export default LocationList;

import * as React from 'react';
import { Button } from 'antd';

import { counterStore } from '../../stores';

const IncreaseButton = () => {
  return (
    <div>
      <Button onClick={() => counterStore.increaseCounter()} type="primary">
        Increase +
      </Button>
    </div>
  );
};

export default IncreaseButton;

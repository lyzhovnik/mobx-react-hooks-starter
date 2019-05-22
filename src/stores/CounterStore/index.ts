import { observable, action } from 'mobx';
import { createContext } from 'react';

class CounterStore {
  @observable public counter: number = 0;

  @action public async increaseCounter() {
    this.counter += 1;
  }
}

const counterStore = new CounterStore();

export default counterStore;
export const counterStoreContext = createContext(counterStore);

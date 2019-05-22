import { configure } from 'mobx';

configure({ enforceActions: 'observed' });

export { default as counterStore } from './CounterStore';
export * from './CounterStore';

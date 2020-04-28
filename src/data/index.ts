import { load } from './util/loader';
import { Data } from './interfaces';

let store: Data | null = null;

export const loadData = async () => {
  store = await load();
};

export const getData = (): Data => {
  if (store) return store;
  throw Error('Data not available');
};

import React, { createContext, FC, useContext, useReducer } from 'react';

import { catsService } from '../services';
import { Cat } from '../types';

interface CatListState {
  loading: boolean;
  error: null | Error;
  cats: Cat[] | null;
}

interface CatListStore {
  state: CatListState;
  loadCatList: () => void;
}

const initialState: CatListState = {
  loading: false,
  error: null,
  cats: null,
};

const CatListStoreContext = createContext({});

const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const SET_CATS = 'SET_CATS';

const reducer = (state: CatListState, { type, loading, error, cats }: any): CatListState => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading };

    case SET_CATS:
      return { ...state, cats };

    case SET_ERROR:
      return { ...state, error };

    default:
      return state;
  }
};

const useCatListStore = (): CatListStore => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Fetches the cats from the API.
   */
  const loadCatList = async () => {
    dispatch({ type: SET_LOADING, loading: true });

    try {
      const cats = await catsService.getList();
      dispatch({ type: SET_CATS, cats });
    } catch (error) {
      dispatch({ type: SET_ERROR, error });
    } finally {
      dispatch({ type: SET_LOADING, loading: false });
    }
  };

  return {
    state,
    loadCatList,
  };
};

export const CatListStoreProvider: FC = ({ children }) => {
  const store = useCatListStore();
  return <CatListStoreContext.Provider value={store}>{children} </CatListStoreContext.Provider>;
};

// tslint:disable-next-line
export default (): CatListStore => useContext(CatListStoreContext) as CatListStore;

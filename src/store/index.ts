import { applyMiddleware, createStore, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { StateType } from '../types';
import rootReducer from './reducers';

function configureStore(initialState: StateType): Store {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunkMiddleware));
  return store;
}

export default configureStore;

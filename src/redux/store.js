import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import reducer from './reducers';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

/** REDUX CORE -----------------------------------------------
 
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const rootReducer = combineReducers({
  contacts: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store; 
 
 */

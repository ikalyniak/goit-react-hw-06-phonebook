import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './actions';
import dataContacts from '../contacts.json';

const items = createReducer(dataContacts, {
  // [actions.addNewContact]: (state, action) => [...state, action.payload],
  [actions.addNewContact]: (state, action) => {
    if (state.find(elem => elem.name === action.payload.name)) {
      alert(`${action.payload.name} is already in contacts`);
      return state;
    }
    return [...state, action.payload];
  },
  [actions.deleteContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

/**
 NOTE:  -----------------------------------------------
1)
 [actionTypes.ADD]: (state, action) => [...state, action.payload]
 => ----- analog expression ----- =>
'phonebook/addNewContact': (state, action) => [...state, action.payload]

 2)
 [actions.addNewContact]
 => ----- programmatically toString() ----- =>
 => ----- see logger in Console as example ----- =>
 actions.addNewContact.type

 3)
      (_, action)  ------=> the first parameter is not used


 */

/** REDUX CORE -----------------------------------------------
 
import { combineReducers } from 'redux';

import actionTypes from './actionTypes';
import dataContacts from '../contacts.json';

const items = (state = dataContacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      if (state.find(elem => elem.name === payload.name)) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
 
 */

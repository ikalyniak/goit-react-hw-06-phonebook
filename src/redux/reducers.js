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

import { combineReducers } from 'redux';

import actionTypes from './actionTypes';
import dataContacts from '../contacts.json';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = (state = dataContacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      // return [...state, payload];
      return state.find(elem => elem.name === payload.name)
        ? alert(`${payload.name} is already in contacts`)
        : [...state, payload];

    case actionTypes.DELETE:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};
const filter = (state = '', action) => state;

export default combineReducers({
  items,
  filter,
});

// import { combineReducers } from 'redux';

// import actionTypes from './actionTypes';
// import dataContacts from '../contacts.json';
// // import rootReducer from './reducers';

// const initialState = {
//   contacts: dataContacts,
//   filter: '',
// };

// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.ADD:
//       return state.contacts.find(elem => elem.name === action.payload.name)
//         ? alert(`${action.payload.name} is already in contacts`)
//         : {
//             ...initialState,
//             contacts: [...state.contacts, action.payload],
//           };

//     case actionTypes.DELETE:
//       return {
//         ...initialState,
//         contacts: state.contacts.filter(item => item.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contactsReducer,
//   filterReducer,
// });

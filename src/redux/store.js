import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import actionTypes from './actionTypes';
import dataContacts from '../contacts.json';
// import rootReducer from './reducers';

const initialState = {
  contacts: dataContacts,
  filter: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return state.contacts.find(elem => elem.name === action.payload.name)
        ? alert(`${action.payload.name} is already in contacts`)
        : {
            ...initialState,
            contacts: [...state.contacts, action.payload],
          };

    case actionTypes.DELETE:
      return {
        ...initialState,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload;

    default:
      return state;
  }
};

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

const store = createStore(contactsReducer, composeWithDevTools());

export default store;

/**

 const reducer = (state = {}, action) => state;
 
 Шаг 1
Используй только возможности библиотеки Redux (без redux-toolkit).

Создай хранилище и добавь инструменты разработчика
Создай действия (actions) сохранения и удаления контакта, а также обновления фильтра.
Вынеси типы действий в отдельный файл констант.
Создай редюсеры контактов и фильтра.
Свяжи React-компоненты с Redux-логикой при помощи бибилиотеки react-redux.
 */

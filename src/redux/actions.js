import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addNewContact = createAction(
  'phonebook/addNewContact',
  ({ name, number }) => ({
    //Using Prepare Callbacks to Customize Action Contents
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  }),
);

const deleteContact = createAction('phonebook/deleteContact');
const changeFilter = createAction('phonebook/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addNewContact, deleteContact, changeFilter };

/** REDUX CORE -----------------------------------------------
 
 import { v4 as uuidv4 } from 'uuid';
 
 import actionTypes from './actionTypes';

const addNewContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

const changeFilter = value => ({
  type: actionTypes.FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addNewContact, deleteContact, changeFilter };
 
 */

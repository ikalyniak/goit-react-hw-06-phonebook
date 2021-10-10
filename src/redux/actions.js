import actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addNewContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: { id: uuidv4(), name, number },
});

export const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: actionTypes.FILTER,
  payload: value,
});

import actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

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

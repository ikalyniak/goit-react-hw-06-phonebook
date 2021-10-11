import actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const addNewContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: { id: uuidv4(), name, number },
});

export default { addNewContact };

import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';
uuidv4();

const addContact = text => ({
  type: types.ADD,
  payload: { id: uuidv4(), text },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const denyDouble = text => ({
  type: types.CHECK,
  payload: text,
});

export default { addContact, deleteContact, changeFilter, denyDouble };

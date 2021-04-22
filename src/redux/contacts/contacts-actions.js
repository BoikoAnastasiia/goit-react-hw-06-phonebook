import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';
uuidv4();

export const addContact = text => ({
  type: types.ADD,
  payload: { id: uuidv4(), text },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = text => ({
  type: types.CHANGE_FILTER,
  payload: text,
});

export const denyDouble = text => ({
  type: types.CHECK,
  payload: text,
});

// export default { addContact, deleteContact, changeFilter, denyDouble };

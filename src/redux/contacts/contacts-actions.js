import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

uuidv4();

const addContact = createAction('contacts/add', text => ({
  payload: {
    id: uuidv4(),
    text,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };

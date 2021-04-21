import { createStore, combineReducers } from 'redux';
import types from '../redux/contacts/contacts-types';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contacts = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (state.contacts.some(name => name.name === payload.name))
        return alert(`${payload.name} is already in your contacts`);
      payload.id = uuidv4();
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const store = createStore(combineReducers({ contacts, filter }));
export default store;

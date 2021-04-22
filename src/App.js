import React from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';
import { connect } from 'react-redux';
import * as actions from './redux/contacts/contacts-actions';

const App = (addContact, deleteContact, denyDouble, changeFilter, search) => (
  <Container>
    <PhoneBookForm
      onSubmit={addContact}
      onAdd={addContact}
      onDouble={denyDouble}
    />
    <Search value={search} onChange={changeFilter} />
    <ContactsList
      contacts={search.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase()),
      )}
      onDelete={deleteContact}
    />
  </Container>
);

const mapStateToProps = state => ({
  contacts: state.contacts,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  addContact: text => dispatch(actions.addContact(text)),
  denyDouble: text => dispatch(actions.denyDouble(text)),
  deleteContact: text => dispatch(actions.deleteContact(text)),
  changeFilter: text => dispatch(actions.changeFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

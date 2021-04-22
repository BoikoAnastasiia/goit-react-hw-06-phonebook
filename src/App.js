import React from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';
import { connect } from 'react-redux';
import * as actions from '../src/redux/contacts/contacts.actions';

const App = (
  addContact,
  deleteContact,
  denyDouble,
  changeFilter,
  filteredNames,
  search,
) => (
  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

  //   componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);
  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  // getFilteredNames = () => {
  //   const { filter, contacts } = this.state;
  //   const normilizeFilter = filter.toLowerCase();

  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normilizeFilter),
  //   );
  // };

  // render() {
  //   const { filter } = this.state;
  //   const filteredNames = this.getFilteredNames();

  // return (
  <Container>
    <PhoneBookForm
      onSubmit={addContact}
      onAdd={addContact}
      onDouble={denyDouble}
    />
    <Search value={search} onChange={changeFilter} />
    <ContactsList contacts={filteredNames} onDelete={deleteContact} />
  </Container>
);

const mapStateToProps = state => ({
  contacts: state.contacts,
  search: state.search,
  filteredNames: state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(state.search.toLowerCase()),
  ),
});

const mapDispatchToProps = dispatch => ({
  addContact: text => dispatch(actions.addContact(text)),
  denyDouble: text => dispatch(actions.denyDouble(text)),
  deleteContact: text => dispatch(actions.deleteContact(text)),
  changeFilter: text => dispatch(actions.changeFilter(text)),
});

// getFilteredNames = () => {
//   const { filter, contacts } = this.state;
//   const normilizeFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normilizeFilter),
//   );
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';
import { connect } from 'react-redux';
import * as actions from '../src/redux/contacts/contacts.actions';

const App = (addContact, deleteContact) => (
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
      onSubmit={this.addContact}
      onAdd={this.addContact}
      onDouble={this.denyDouble}
    />
    <Search value={filter} onChange={this.changeFilter} />
    <ContactsList contacts={filteredNames} onDelete={this.deleteContact} />
  </Container>
);

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

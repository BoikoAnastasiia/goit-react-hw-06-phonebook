import React, { Component } from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

class App extends Component {
  state = {
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  addContact = data => {
    const newContact = data;

    if (this.state.contacts.some(name => name.name === newContact.name))
      return alert(`${newContact.name} is already in your contacts`);

    newContact.id = uuidv4();
    return this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = nameId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(name => name.id !== nameId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredNames = () => {
    const { filter, contacts } = this.state;
    const normilizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normilizeFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredNames = this.getFilteredNames();

    return (
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
  }
}

export default App;

import React from 'react';
import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';

const App = (
  <Container>
    <PhoneBookForm />
    <Search />
    <ContactsList />
  </Container>
);

export default App;
// state.contacts.some(name => name.name === payload.name)
//   ? alert(`${payload.name} is already in your contacts`)
//   : null;

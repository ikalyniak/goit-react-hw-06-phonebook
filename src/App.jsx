// import { useState } from 'react';
// import PropTypes from 'prop-types';

// import useLocalStorage from './hooks/useLocalStorage';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
// import dataContacts from './contacts.json';
import styles from './App.module.css';

function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', dataContacts);
  // const [filter, setFilter] = useState('');

  // const addNewContact = newContact => {
  //   contacts.find(elem => elem.name === newContact.name)
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : setContacts(state => [...state, newContact]);
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const getContacts = () => {

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // const deleteContact = id => {
  //   setContacts(contacts.filter(item => item.id !== id));
  // };

  // const filteredContacts = getContacts();

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      {/* <Form addContact={addNewContact} /> */}
      <Form />
      <h2>Contacts</h2>
      {/* <Filter value={filter} onChange={changeFilter} /> */}
      <Filter />
      {/* <Contacts contacts={filteredContacts} onClick={deleteContact} /> */}
      <Contacts />
    </div>
  );
}

export default App;

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
// };

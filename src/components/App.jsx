import {useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/contactsOperation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {dispatch(fetchContacts())}, [dispatch]);

   return (
      <>
        <h2>Phonebook</h2>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </>
    );

}

export default App;
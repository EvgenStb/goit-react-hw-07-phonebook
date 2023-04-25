import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getContactsFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsOperation';
// import { useEffect } from 'react';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(({id, name, phone}) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{phone}</span>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}


export default ContactList;

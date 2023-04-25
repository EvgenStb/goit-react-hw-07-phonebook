import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperation';
import Notiflix from 'notiflix';

const INITIAL_STATE = {
  name: '',
  number:'',
}

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
 const [{name, number}, setState] = useState(INITIAL_STATE);
 


  const handleInput = e => {
    const {name, value} = e.target;
    setState(prevState => ({...prevState, [name]: value}))
  };


const handleSubmit = e => {
  e.preventDefault();
  const newContact = {
    name,
    number,
  };
  
  if (contacts.find(contact => contact.name === newContact.name )) {
    return Notiflix.Notify.failure(`${newContact.name} is already is contacts`);
  }
  dispatch(addContact(newContact));
  resetForm();
};


const resetForm =() => {
  setState(INITIAL_STATE)
}
 return (
   <>
     <form type="submit" onSubmit={handleSubmit}>
       <label>
         Name
         <input
           type="text"
           onChange={handleInput}
           value={name}
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
         />
       </label>
       <label>
         Number
         <input
           type="tel"
           onChange={handleInput}
           value={number}
           name="number"
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
         />
       </label>
       <button type="submit">Add contact</button>
     </form>
   </>
 );
}

export default ContactForm;
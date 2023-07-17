import { useState } from 'react';
import {
  ContactCreateForm,
  InputCreateForm,
  BtnAddContact,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const nameIsExists =
    contacts
      ? contacts.find(contact => contact.name === name)
      : false;

  const handleSubmit = event => {
    event.preventDefault();
    if (nameIsExists) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <ContactCreateForm onSubmit={handleSubmit}>
      <label>
        Name
        <InputCreateForm
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <InputCreateForm
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <BtnAddContact type="submit">Add contact</BtnAddContact>
    </ContactCreateForm>
  );
};

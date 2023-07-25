import { useState } from 'react';
import {
  WrapperContactForm,
  TitlePhonebook,
  ContactCreateForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from '@mui/material';
import { AccountCircle, AddCircleOutlined } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const nameIsExists = contacts
    ? contacts.find(contact => contact.name === name)
    : false;

  const handleSubmit = event => {
    event.preventDefault();
    if (nameIsExists) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <WrapperContactForm>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactCreateForm onSubmit={handleSubmit}>
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          onSubmit={handleSubmit}
        >
          <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="standard"
          onSubmit={handleSubmit}
        >
          <InputLabel htmlFor="standard-adornment-amount">
            Phone number
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            startAdornment={
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          type="submit"
          variant="outlined"
          startIcon={<AddCircleOutlined />}
        >
          Add contact
        </Button>
      </ContactCreateForm>
    </WrapperContactForm>
  );
};

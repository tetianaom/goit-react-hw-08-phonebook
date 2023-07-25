import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListCss, ContactsTitle } from './ContactList.styled';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactListCss>
      <ContactsTitle>Contacts</ContactsTitle>
      {contacts.length > 0 &&
        visibleContacts.map(contact => (
          <div key={contact.id}>
            <ContactItem
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </div>
        ))}
    </ContactListCss>
  );
};

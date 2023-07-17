import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListCss } from './ContactList.styled';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ContactListCss>
        {contacts.length > 0 &&
          visibleContacts.map(contact => (
            <div key={contact.id}>
              <ContactItem
                id={contact.id}
                name={contact.name}
                number={contact.phone}
              />
            </div>
          ))}
      </ContactListCss>
    </>
  );
};

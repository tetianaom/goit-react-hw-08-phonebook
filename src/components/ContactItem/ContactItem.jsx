import React from 'react';
import PropTypes from 'prop-types';
import { ContactItemCss } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Button from '@mui/material/Button';
import { Delete } from '@mui/icons-material';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemCss>
      <p>
        {name}: {number}
      </p>
      <Button
        variant="outlined"
        startIcon={<Delete />}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </ContactItemCss>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

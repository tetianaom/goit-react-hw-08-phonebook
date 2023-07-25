import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { WrapperFilter } from './Filter.styled';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <WrapperFilter>
      <TextField
        fullWidth
        id="outlined"
        label="Find contacts by name"
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </WrapperFilter>
  );
};

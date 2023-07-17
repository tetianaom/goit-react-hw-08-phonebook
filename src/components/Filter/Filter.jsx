import React from 'react';
import { InputCreateForm } from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <InputCreateForm type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

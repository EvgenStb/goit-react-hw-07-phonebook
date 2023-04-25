import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getContactsFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter)

  return (
    <>
      <p>Find contacts</p>
      <input
        type="text"
        value={filter}
        name={!Number(filter) ? 'name' : 'number'}  
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </>
  );
};

export default Filter
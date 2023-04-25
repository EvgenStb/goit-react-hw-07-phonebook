import { createSlice} from "@reduxjs/toolkit";
import {fetchContacts,addContact,deleteContact} from './contactsOperation'

const initialState = {
  item: [],
  isLoading: false,
  error: null,
}; 

const handleLoading = state => {
    state.isLoading = true;
    state.error = null}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: handleLoading,
    [fetchContacts.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handleLoading,
    [addContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item.push(action.payload)
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handleLoading,
    [deleteContact.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item= state.item.filter(contact => contact.id !== action.payload.id)
    },
    [deleteContact.rejected]: handleRejected
    }
});


export const contactsReducer = contactsSlice.reducer;


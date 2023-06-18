import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteContact } from './operations';

const isLoading = state => {
  state.contacts.isLoading = true;
};

const IsError = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const counterSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      //fetchBasic
      .addCase(fetchContacts.pending, state => isLoading(state))
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items.push(...action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) =>
        IsError(state, action)
      )
      //
      //addContact
      .addCase(addNewContact.pending, state => isLoading(state))
      .addCase(addNewContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.isLoading = false;
      })
      .addCase(addNewContact.rejected, (state, action) =>
        IsError(state, action)
      )
      //
      //deleteContact
      .addCase(deleteContact.pending, state => isLoading(state))
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const index = state.contacts.items.findIndex(
          item => item.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) =>
        IsError(state, action)
      );
  },
});

export const { changeFilter } = counterSlice.actions;

export const contactsReducer = counterSlice.reducer;

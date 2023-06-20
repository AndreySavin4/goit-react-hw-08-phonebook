import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',

  async (value, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', value);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

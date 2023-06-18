import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Token = {
  setToken(token) {
    axios.default.headers.common.Authorization = `Bearer ${token}`;
  },

  unsetToken() {
    axios.default.headers.common.Authorization = '';
  },
};

export const RegisterUser = createAsyncThunk(
  'auth/signup',
  async (contact, thunkAPI) => {
    try {
      console.log(contact);
      const { data } = await axios.post('/users/signup', { ...contact });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

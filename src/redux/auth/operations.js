import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const RegisterUser = createAsyncThunk(
  'auth/register',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup/', { ...contact });
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const LoginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const LogOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const responce = await axios.post('/users/logout');
    token.unset();
    return responce;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const RefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token === null) {
      console.log('huinia');
      return;
    }
    try {
      token.set(token);
      const responce = await axios.get('/users/current');
      console.log(responce);
      // return responce;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error);
    }
  }
);

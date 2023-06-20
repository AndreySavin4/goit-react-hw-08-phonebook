import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loginUser, registerUser, logOut, refreshUser } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  token: null,
  isLoginIn: false,
  isRefreshing: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoginIn = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoginIn = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoginIn = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoginIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, AuthSlice.reducer);

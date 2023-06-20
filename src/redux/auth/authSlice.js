import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LoginUser, RegisterUser, LogOut } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  token: null,
  isLoginIn: false,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoginIn = true;
      })
      .addCase(RegisterUser.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoginIn = true;
      })
      .addCase(LoginUser.rejected, (state, { payload }) => {
        state.error = payload.message;
      })
      .addCase(LogOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoginIn = false;
      })
      .addCase(LogOut.rejected, (state, { payload }) => {
        state.error = payload.message;
      });
    // .addCase(RefreshUser.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoginIn = true;
    // })
    // .addCase(RefreshUser.rejected, (state, { payload }) => {
    //   state.error = payload.message;
    // });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, AuthSlice.reducer);

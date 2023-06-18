import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/createSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

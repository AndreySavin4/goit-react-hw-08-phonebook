import { RegisterUser } from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(RegisterUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        console.log('Sorry');
      });
  },
});

export const authReducer = AuthSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    // currentUser: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const { loginFailure, loginStart, loginSuccess, logoutStart } =
  userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLoggedIn: false,
  token: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
  },
});

const { reducer, actions } = slice;
export const { setUser, logout } = actions;
export default reducer;

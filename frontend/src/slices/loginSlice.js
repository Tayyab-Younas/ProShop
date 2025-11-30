import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const LogInSlice = createSlice({
  name: "LogIn",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;

      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = LogInSlice.actions;

export default LogInSlice.reducer;

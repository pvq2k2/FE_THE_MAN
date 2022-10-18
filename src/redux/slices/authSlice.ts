import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";


type AuthState = {
  isLogged: boolean;
  currentUser: User | {};
};

const initialState: AuthState = {
  isLogged: false,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, { payload }) {
      state.isLogged = true;
      state.currentUser = payload.data;
      localStorage.setItem("user", JSON.stringify(state.currentUser));
    },
      
    signout(state) {
      state.isLogged = false;
      state.currentUser = {};
      localStorage.removeItem("user");
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
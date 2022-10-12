import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signup } from "../../api-cilent/Auth";
import { get, getAll, update } from "../../api-cilent/User";

import { User } from "../../models/User";
import { useAppDispatch } from "../store";

type UsersState = {
  Users: {
    count: number;
    User: User[];
  };
  User: User;
  page: number;
  limit: number;
};

const initialState: UsersState = {
  Users: {
    count: 0,
    User: [],
  },
  page: 1,
  limit: 10,
  User: {},
};

export const getUsers = createAsyncThunk(
  "Users/getUsers",
  async (data: any) => {
    const response = await getAll(data.page, data.limit);
    console.log(response);

    return response.data;
  }
);

export const addUser = createAsyncThunk("Users/addUser", async (User: any) => {
  const res = await signup(User);
  return res;
});

export const getUser = createAsyncThunk("Users/getUser", async (id: any) => {
  const res = await get(id);
  return res.data;
});

export const updateUser = createAsyncThunk(
  "Users/updateUser",
  async (User: any) => {
    const res = await update(User);
    return res;
  }
);

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.Users = payload as any;
    });

    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.User = payload as User;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.Users.User = state.Users.User.map((item) =>
        item._id === payload?._id ? payload : item
      ) as User[];
    });
  },
});

export default UsersSlice.reducer;
export const { setPage } = UsersSlice.actions;

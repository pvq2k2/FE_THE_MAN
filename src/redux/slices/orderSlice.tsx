import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCart } from "../../api-cilent/Cart";
import { AddOrderApi } from "../../api-cilent/Orders";

type orderState = {
        order: {},
        orders: []
};

const initialState: orderState = {
    order: {},
    orders: []
};

export const addOrder = createAsyncThunk(
  "Users/addorder",
  async (data: any) => {
    const response = await AddOrderApi(data);  
    const remove = await removeCart(data?._id)
    return response?.data;
  }
);


const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.fulfilled, (state, { payload }) => {
    })
  },
});

export default UsersSlice.reducer;

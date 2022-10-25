import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeCart } from "../../api-cilent/Cart";
import { AddOrderApi, GetOrdersApi, readOrdertApi, removeOrderApi } from "../../api-cilent/Orders";
type orderState = {
        order: {},
        orders: [],
};

const initialState: orderState = {
    order: {},
    orders: [],
};

export const getOrders = createAsyncThunk(
  "orders/getorders",
  async () => {
    const res = await GetOrdersApi()
    return res.data
  }
);
export const addOrder = createAsyncThunk(
  "Users/addorder",
  async (data: any) => {
    const response = await AddOrderApi(data);  
    const remove = await removeCart(data?._id)
    return response?.data;
  }
);
export const removeOrder = createAsyncThunk("orders/removeorders", async (id: string) => {
   const res = await removeOrderApi(id);
   return res.data
})

export const readOrder = createAsyncThunk("orders/readorder", async (id: string) => {
  const res = await readOrdertApi(id)
  return res.data
})

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.orders = payload
    }),
    builder.addCase(removeOrder.fulfilled, (state, { payload }) => {
      state.orders = state.orders.filter((item: any) => item._id !== payload._id)
    }),
    builder.addCase(readOrder.fulfilled, (state, { payload }) => {
      state.order = payload
    }),
    builder.addCase(addOrder.fulfilled, (state, { payload }) => {
    })
  },
});

export default orderSlice.reducer;

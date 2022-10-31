import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { removeCart } from "../../api-cilent/Cart";
import { AddOrderApi, GetOrdersApi, readOrdertApi, removeOrderApi, UpdateQuantityCart, updateStatusOrderApi } from "../../api-cilent/Orders";
import { get } from "../../api-cilent/Product";
type orderState = {
        order: {},
        orders: any[],
        orderinfo: {}
};

const initialState: orderState = {
    order: {},
    orders: [],
    orderinfo: {}
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
   
    return data;
  }
);
export const removeOrder = createAsyncThunk("orders/removeorders", async (id: string) => {
   const res = await removeOrderApi(id);
   return res.data
})

export const infoOrder = createAsyncThunk("orders/infoorder", async (id: string) => {
  try {
    const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail", id, {
      headers: {
        'Token': '422b151b-4b63-11ed-8008-c673db1cbf27'
      }
    })
    return res.data
  } catch(err) {
    return {log: [{
      status: ''
    }]}
  }
  
})
export const cancleOrder = createAsyncThunk("orders/cancleorders", async (data:any) => {
        const res = await axios.post('https://online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel', data , 
            {
              headers: {
                'Content-Type': 'application/json',
                'ShopId': 3348656,
                'Token': '422b151b-4b63-11ed-8008-c673db1cbf27',
              },
            }    
        )
        return res.data
})
export const readOrder = createAsyncThunk("orders/readorder", async (id: any) => {
  const res = await readOrdertApi(id)
  return res.data
})
export const updateOrder = createAsyncThunk("orders/updateorder", async (data: any) => {
  const res = await updateStatusOrderApi(data)
  return res.data
})

export const orderConfirm = createAsyncThunk("orders/orderconfirm", async (data:any) => {
  const res = await axios.post("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create", data, {
    headers: {
      'Content-Type': 'application/json',
      'ShopId': 3348656,
      'Token': '422b151b-4b63-11ed-8008-c673db1cbf27',
    },
  })
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
    builder.addCase(addOrder.fulfilled,  (state, { payload }) =>  {
      const response =  AddOrderApi(payload);  
      const remove =  removeCart(payload?._id)
      for (let index = 0; index < payload.product?.length; index++) {
        const element = payload.product[index];
         UpdateQuantityCart(element);
      }
      
    }),
    builder.addCase(orderConfirm.fulfilled, (state, { payload }) => {
   
    }),
    builder.addCase(updateOrder.fulfilled, (state, { payload }) => {
      state.orders = state.orders.map((item: any) =>
      item._id === payload?._id ? payload : item
    ) 
    }),
    builder.addCase(infoOrder.fulfilled, (state, { payload }) => {
      state.orderinfo = payload
    }),
    builder.addCase(cancleOrder.fulfilled, (state, { payload }) => {

    })
  },
});

export default orderSlice.reducer;

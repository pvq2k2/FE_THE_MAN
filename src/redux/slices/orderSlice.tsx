import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { removeCart } from "../../api-cilent/Cart";
import {
  AddOrderApi,
  countProductApi,
  GetOrdersApi,
  readOrdertApi,
  removeOrderApi,
  UpdateQuantityCart,
  updateStatusOrderApi,
} from "../../api-cilent/Orders";
import { get } from "../../api-cilent/Product";
type orderState = {
  order: {};
  orders: any[];
  orderinfo: {};
  success: number;
};

const initialState: orderState = {
  order: {},
  orders: [],
  orderinfo: {},
  success: 0,
};

export const getOrders = createAsyncThunk("orders/getorders", async () => {
  const res = await GetOrdersApi();
  return res.data;
});

export const removeOrder = createAsyncThunk(
  "orders/removeorders",
  async (id: string) => {
    const res = await removeOrderApi(id);
    return res.data;
  }
);

export const infoOrder = createAsyncThunk(
  "orders/infoorder",
  async (id: string) => {
    try {
      const res = await axios.post(
        "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail",
        id,
        {
          headers: {
            Token: "755b4fbb-5918-11ed-bd1f-1a28f04fff2f",
          },
        }
      );
      return res.data;
    } catch (err) {
      return {
        log: [
          {
            status: "",
          },
        ],
      };
    }
  }
);
export const cancelOrder = createAsyncThunk(
  "orders/cancleorders",
  async (data: any) => {
    const res = await axios.post(
      "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          ShopId: 120366,
          Token: "755b4fbb-5918-11ed-bd1f-1a28f04fff2f",
        },
      }
    );
    return res.data;
  }
);
export const readOrder = createAsyncThunk(
  "orders/readorder",
  async (id: any) => {
    const res = await readOrdertApi(id);
    return res.data;
  }
);
export const updateOrder = createAsyncThunk(
  "orders/updateorder",
  async (data: any) => {
    const res = await updateStatusOrderApi(data);
    return res.data;
  }
);
export const searchOrder = createAsyncThunk(
  "orders/search",
  async (id: string) => {
    let result = [];
    try {
      const res = await readOrdertApi(id);
      if (id) {
        result.push(res.data);
      } else {
        result = res.data;
      }
      if (res.data == null) {
        result = [];
      }
    } catch (error) {
      toast.info("Không tìm thấy!!!");
    }
    return result;
  }
);
export const orderConfirm = createAsyncThunk(
  "orders/orderconfirm",
  async (data: any) => {
    const res = await axios.post(
      "https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          ShopId: 120366,
          Token: "755b4fbb-5918-11ed-bd1f-1a28f04fff2f",
        },
      }
    );
    return res.data;
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, { payload }) => {
      state.orders = payload;
    }),
      builder.addCase(removeOrder.fulfilled, (state, { payload }) => {
        state.orders = state.orders.filter(
          (item: any) => item._id !== payload._id
        );
      }),
      builder.addCase(readOrder.fulfilled, (state, { payload }) => {
        state.order = payload;
      }),
    
      builder.addCase(orderConfirm.fulfilled, (state, { payload }) => {}),
      builder.addCase(updateOrder.fulfilled, (state, { payload }) => {
        state.orders = state.orders.map((item: any) =>
          item._id === payload?._id ? payload : item
        );
      }),
      builder.addCase(infoOrder.fulfilled, (state, { payload }) => {
        state.orderinfo = payload;
      }),
      builder.addCase(cancelOrder.fulfilled, (state, { payload }) => {}),
      builder.addCase(searchOrder.fulfilled, (state, { payload }) => {
        if (payload.length >= 1) {
          state.orders = payload;
        } else {
        }
      });
  },
});

export default orderSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  thongKeByDate,
  thongKeByMonth,
  thongKeByYear,
  thongke_tong,
} from "../../api-cilent/Statistical";

type Statistical = {
  data: {};
};

const initialState: Statistical = {
  data: {},
};

export const statistical_total = createAsyncThunk(
  "statistical/total",
  async () => {
    const response = await thongke_tong();
    return response.data;
  }
);
export const statistical_day = createAsyncThunk(
  "statistical/day",
  async (date: any) => {
    const response = await thongKeByDate(date);
    return response.data;
  }
);
export const statistical_month = createAsyncThunk(
  "statistical/month",
  async (date: any) => {
    const response = await thongKeByMonth(date);
    return response.data;
  }
);
export const statistical_year = createAsyncThunk(
  "statistical/year",
  async (date: any) => {
    const response = await thongKeByYear(date);
    return response.data;
  }
);

const statisticalReducer = createSlice({
  name: "statistical",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(statistical_total.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.data = payload as any;
    });
    builder.addCase(statistical_day.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.data = payload as any;
    });
    builder.addCase(statistical_month.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.data = payload as any;
    });
    builder.addCase(statistical_year.fulfilled, (state, { payload }) => {
      console.log(payload);

      state.data = payload as any;
    });
  },
});

export default statisticalReducer.reducer;

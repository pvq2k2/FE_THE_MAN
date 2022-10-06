import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { add, get, getAll, remove, update } from "../../api-cilent/Product";

import { Product } from "../../models/Product";
import { useAppDispatch } from "../store";

type ProductsState = {
  products: {
    count: number;
    Product: Product[];
  };
  product: Product | {};
  page: number;
  limit: number;
};

const initialState: ProductsState = {
    products: {
    count: 0,
    Product: [],
  },
  page: 1,
  limit: 10,
  product: {},
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data: any) => {
    const response = await getAll(data.page, data.limit);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (_id: any) => {
    const data = await remove(_id);
    console.log(data);
    return _id;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: any) => {
    const res = await add(product);
    return res;
  }
);

export const getProduct = createAsyncThunk(
    "products/getProduct",
    async (id: any) => {
    const res = await get(id);
    return res.data;
});

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product: any) => {
    const res = await update(product);
    return res;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload as any;
    });
    builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
      state.products.Product = state.products.Product.filter(
        (item) => item._id !== payload
      );
    });

    builder.addCase(getProduct.fulfilled, (state, { payload }) => {
      console.log("jh", payload);
      
      state.product = payload as Product;
    });

    builder.addCase(updateProduct.fulfilled, (state, { payload }) => {
      state.products.Product = state.products.Product.map((item) =>
        item._id === payload?._id ? payload : item
      ) as Product[];
    });
  },
});

export default productsSlice.reducer;
export const { setPage } = productsSlice.actions;
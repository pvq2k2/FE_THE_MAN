import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../../api-cilent/Product";
import { Product } from "../../models/Product";



interface IProductState {
  product: {},
  products: []
}

const initialState: IProductState = {
  product: {},
  products: []
}


export const addProduct = createAsyncThunk("product/create", async (product: Product) => {
  const newProduct = await createProduct(product);
  return newProduct;
})

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addProduct.fulfilled, (state, { payload }) => {
      state.products.push(payload as never)
    })
  }
})
export default productSlice.reducer
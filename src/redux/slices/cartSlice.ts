import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addcart, readcart } from "../../api-cilent/Cart";



interface Icart{
   cart: {},
   carts: []
}
const initialState : Icart={
    cart: {},
    carts: []
}


export const addToCart = createAsyncThunk("carts/addtocart", async (product: any, iduser: any) => {
                const cart = await readcart(iduser)
                console.log(cart);
                
})

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(addToCart.fulfilled, (state, {payload}) => {
         state.cart = payload 
        })
    },
  });
  export default cartSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface Icart{
    cart: {},
    carts: any[],
    orderdetail: any[]
}
const initialState: Icart = {
    cart: {},
    carts: [],
    orderdetail: []
}

if(localStorage.getItem("cart")) {
    initialState.carts = JSON.parse(localStorage.getItem("cart") as any);
}

export const addCart = createAsyncThunk("cart/addcart", async (product: any) => {
            let carts: []
            if (localStorage.getItem("cart")) {
                carts = JSON.parse(localStorage.getItem("cart") as any);
              } else {
                carts = [];
              }
               const existProduct = carts.find(
      (item: { _id: string | undefined }) => item._id === product._id
    );
    const existColor = carts.find(
      (item: { color: string }) => item.color === product.color
    );
    const existSize = carts.find(
      (item: { size: string }) => item.size === product.size
    );

    if (!existProduct) {
      carts.push(product as never);
    } else {
      if (!existColor || !existSize) {
        carts.push(product as never);
      } else {
        existProduct.quantity += product.quantity;
      }
    }
    return carts;
  
})

const cartPostSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{},
    extraReducers: (build) => {
        build.addCase(addCart.fulfilled, (state,{payload}) => {
            localStorage.setItem("cart", JSON.stringify(payload))
            toast.success("Thêm vào giỏ hàng thành công")
        })
    }
})
export default cartPostSlice.reducer;
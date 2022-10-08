import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  AddCartApi,
  GetCartsApi,
  readCartApi,
  removeCartApi,
  UpdateQuantityCart,
  updateStatusCartApi,
} from "../../api-cilent/Carts";
import { getAll } from "../../api-cilent/Product";

interface Icart {
  cart: {};
  carts: any[];
  orderdetail: any[];
}
const initialState: Icart = {
  cart: {},
  carts: [],
  orderdetail: [],
};

if (localStorage.getItem("cart")) {
  initialState.carts = JSON.parse(localStorage.getItem("cart") as any);
}

export const addCart = createAsyncThunk(
  "cart/addcart",
  async (product: any) => {
    let carts: [];
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
  }
);

export const readCarts = createAsyncThunk("cart/readcarts", async () => {
  const res = initialState.carts;
  return res;
});
export const readCart = createAsyncThunk("cart/readcart", async (id:any) => {
  const res = await readCartApi(id)
  return res.data;
});
export const listCarts = createAsyncThunk("cart/listcarts", async () => {
  const res = await GetCartsApi();  
  return res.data;
});
export const removeCart = createAsyncThunk("cart/removecart", async (id: any) => {
        const res = await removeCartApi(id)
        return res.data
})
export const addCarts = createAsyncThunk("cart/addcarts", async (data: any) => {
  const res = await AddCartApi(data);

  for (let index = 0; index < data.product?.length; index++) {
    const element = data.product[index];
    await UpdateQuantityCart(element);
  }
  return res;
});
export const Increment = createAsyncThunk(
  "cart/increment",
  async (data: any) => {
    return data;
  }
);
export const updateStatusCart = createAsyncThunk(
  "cart/updatestatuscart",
  async (data: any) => {
    const res = await updateStatusCartApi(data)
    return res.data
  }
);
export const Decrement = createAsyncThunk(
  "cart/decrement",
  async (data: any) => {
    return data;
  }
);

const cartPostSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addCart.fulfilled, (state, { payload }) => {
      localStorage.setItem("cart", JSON.stringify(payload));
      toast.success("Thêm vào giỏ hàng thành công");
    }),
      build.addCase(addCarts.fulfilled, (state, { payload }) => {
        localStorage.removeItem("cart");
        toast.success("Đặt hàng thành công");
      }),
      build.addCase(readCart.fulfilled, (state, { payload }) => {
            state.cart = payload
      }),
      build.addCase(readCarts.fulfilled, (state, { payload }) => {
        state.carts = payload as never;
      }),
      build.addCase(listCarts.fulfilled, (state, { payload }) => {
        state.orderdetail = payload as never;
      }),
      build.addCase(removeCart.fulfilled, (state, { payload }) => {
          state.orderdetail = state.orderdetail.filter((item:any) => item._id != payload._id)
      }),
      build.addCase(Increment.fulfilled, (state, { payload }) => {
        const cart = JSON.parse(localStorage.getItem("cart") as any);
        const cartsa = cart.find(
          (item: any) =>
            item._id == payload._id &&
            item.color == payload.color &&
            item.size == payload.size
        );
        cartsa.quantity++;
        // console.log("cartsa.quantity", cartsa.quantity + 'cart,' + cartsa.remainingproducts);
        if (cartsa.quantity <= cartsa.remainingproducts) {
          localStorage.setItem("cart", JSON.stringify(cart));
          state.carts = cart;
        } else {
          toast.info("Sản phẩm này chỉ còn " + cartsa.remainingproducts);
        }
      }),
      build.addCase(Decrement.fulfilled, (state, { payload }) => {
        const cart = JSON.parse(localStorage.getItem("cart") as any);
        const cartsa = cart.find(
          (item: any) =>
            item._id == payload._id &&
            item.color == payload.color &&
            item.size == payload.size
        );
        cartsa.quantity--;
        if (cartsa.quantity <= 0) {
          const confirm = window.confirm("Bạn có chắc chắn muốn xoá không");
          if (confirm) {
            const cartsb = cart.filter((item: any) => item !== cartsa);
            localStorage.setItem("cart", JSON.stringify(cartsb));
            toast.success("Xoá thành công");
            state.carts = cartsb;
            return;
          } else {
            return;
          }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        state.carts = cart;
      });
      build.addCase(updateStatusCart.fulfilled, (state, {payload}) => {
       state.orderdetail = state.orderdetail.map((item: any) => item._id === payload._id ? item:payload)  
      })
  },
});
export default cartPostSlice.reducer;

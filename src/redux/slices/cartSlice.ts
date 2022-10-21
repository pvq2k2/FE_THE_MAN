import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addcart,
  readcart,
  removeCart,
  updateCart,
} from "../../api-cilent/Cart";
import { get } from "../../api-cilent/Product";

interface Icart {
  cart: {};
  carts: [];
}
const initialState: Icart = {
  cart: {},
  carts: [],
};

export const readCart = createAsyncThunk(
  "carts/readcart",
  async (iduser: string) => {
    const res = await readcart(iduser);
    return res;
  }
);
export const Increment = createAsyncThunk(
  "carts/increment",
  async (product: any) => {
    const { data } = await readcart(product.userID);
    const { data: producta } = await get(product._id);

    const quantityold = producta.type.find(
      (item: any) => item.color == product.color && item.size == product.size
    );
    const cartnew = data.products.find(
      (item: any) =>
        item._id == product._id &&
        item.color == product.color &&
        item.size == product.size
    );

    if (cartnew.quantity < quantityold.quantity) {
      cartnew.quantity++;
      updateCart(data);
    } else {
      toast.info("Sản phẩm này chỉ còn " + quantityold.quantity);
    }
    return data.products;
  }
);
export const Decrement = createAsyncThunk(
  "carts/decrement",
  async (product: any) => {
    const { data } = await readcart(product.userID);
    const cartnew = data.products.find(
      (item: any) =>
        item._id == product._id &&
        item.color == product.color &&
        item.size == product.size
    );
    if (cartnew.quantity <= 1) {
      const confirm = window.confirm("Bạn có muốn xoá không?");
      if (confirm) {
        const cartnewa = data.products.filter((item: any) => item !== cartnew);
        data.products = cartnewa;
        toast.info("Xoá thành công?");
      }
    } else {
      cartnew.quantity--;
    }
    updateCart(data);
    if (data.products.length <= 0) {
      await removeCart(data._id);
    }
    return data.products;
  }
);

export const addToCart = createAsyncThunk(
  "carts/addtocart",
  async (carts: any) => {
    const { data } = await readcart(carts.userID);
    let cart = {
      products: [],
      userID: {},
    };
    if (data) {
      cart = data;
    } else {
      cart = {
        products: [],
        userID: {},
      };
    }
    if (cart?.products?.length > 0) {
      const exitsID = cart.products.find(
        (item: any) => item._id === carts.products._id
      ) as any;
      const exitsColor = cart.products.find(
        (item: any) => item.color === carts.products.color
      );
      const exitsSize = cart.products.find(
        (item: any) => item.size === carts.products.size
      );
      if (!exitsID) {
        cart.products.push(carts.products as never);
      } else {
        if (!exitsColor || !exitsSize) {
          cart?.products.push(carts.products as never);
        } else {
          exitsID.quantity += carts.products.quantity;
        }
      }
      await updateCart(cart);
    } else {
      cart.products.push(...cart.products, carts.products as never);
      cart.userID = carts.userID;
      await addcart(cart);
    }

    return cart;
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addToCart.fulfilled, (state, { payload }) => {
      state.carts = payload.products as [];
      toast.success("Thêm đơn hàng thành công!");
    }),
      build.addCase(readCart.fulfilled, (state, { payload }) => {
        state.carts = payload?.data?.products;
      }),
      build.addCase(Increment.fulfilled, (state, { payload }) => {
        state.carts = payload as [];
      }),
      build.addCase(Decrement.fulfilled, (state, { payload }) => {
        state.carts = payload as [];
      });
  },
});
export default cartSlice.reducer;

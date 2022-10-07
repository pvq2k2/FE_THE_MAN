import { combineReducers } from "@reduxjs/toolkit";

import postReducer from "./slices/postSlice";
import cateReducer from "./slices/catePostSlice";
import cateproReducer from "./slices/cateProductSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import sliderReducer from "./slices/Slider";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  catePro: cateproReducer,
  catepost: cateReducer,
  product: productReducer,
  slider: sliderReducer,
  carts: cartReducer
});

export default rootReducer;

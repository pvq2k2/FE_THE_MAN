import { combineReducers } from "@reduxjs/toolkit";

import postReducer from "./slices/postSlice";
import cateReducer from "./slices/catePostSlice"
import cateproReducer from "./slices/cateProductSlice";
import productReducer from "./slices/productSlice";

const rootReducer = combineReducers({
  post: postReducer,
  catePro : cateproReducer,
  catepost: cateReducer,
  product: productReducer
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";

import postReducer from "./slices/postSlice";
import cateReducer from "./slices/catePostSlice"
import cateproReducer from "./slices/cateProductSlice";

const rootReducer = combineReducers({
  post: postReducer,
  catePro : cateproReducer,
  catepost:cateReducer
});

export default rootReducer;

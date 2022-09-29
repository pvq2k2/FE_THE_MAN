import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";
import cateReducer from "./slices/catePostSlice"
const rootReducer = combineReducers({
  post: postReducer,
  catepost:cateReducer
});

export default rootReducer;

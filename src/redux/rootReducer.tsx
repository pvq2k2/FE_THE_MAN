import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";

const rootReducer = combineReducers({
  post: postReducer,
});

export default rootReducer;

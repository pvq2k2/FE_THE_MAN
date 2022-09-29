import { combineReducers } from "@reduxjs/toolkit";

import postReducer from "./slices/postSlice";
import cateproReducer from "./slices/cateProductSlice";

const rootReducer = combineReducers({
  post: postReducer,
  catePro : cateproReducer
});

export default rootReducer;

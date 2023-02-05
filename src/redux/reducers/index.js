import { combineReducers } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import authSlice from './authSlice';
import userSlice from "./userSlice"
export const reducers = combineReducers({
  product: productSlice,
  auth:authSlice,
  user:userSlice

});

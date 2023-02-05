import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

export const addUser = createAsyncThunk("users/addUsers", async (params) => {
  return params;
});

const initialState = {
  user: [],
};
export const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default productSlice.reducer;

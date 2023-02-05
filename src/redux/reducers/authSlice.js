import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToken = createAsyncThunk("users/token", async (params) => {
  return params;
});

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
  },
});

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

export const fetchProducts = createAsyncThunk(
  "users/fetchProduct",
  async (params) => {
    const { data } = await api.product.getProduct();
    return data.data;
  }
);

const initialState = {
  products: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;

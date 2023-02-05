import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: null,
  products: [],
  product: {},
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductStart(state, action) {
      state.isLoading = true;
    },
    getProducts(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProduct(state, action) {
      state.product = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { getProducts, getProduct, getProductStart } = actions;
export default reducer;

import { createSlice } from "@reduxjs/toolkit";
import { url } from "inspector";

const initialState = {
  imgZoomProduct: false,
};

export const productReducer = createSlice({
  name: "toggleSearch",
  initialState,
  reducers: {
    toggleZoomProduct: (state) => {
      state.imgZoomProduct = !state.imgZoomProduct;
    },
  },
});

export const { toggleZoomProduct } = productReducer.actions;
export default productReducer.reducer;

import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebar.reducer";
import loadingReducer from "./reducers/search.reducer";
import cartReducer from "./reducers/cart.reducer";
import productReducer from "./reducers/product.reducer";
import imgFocus from "./reducers/imgFocus.reducer";

export const store: any = configureStore({
  reducer: {
    sidebarCatalog: sidebarReducer,
    loadingSearch: loadingReducer,
    sidebarCart: cartReducer,
    productReducer: productReducer,
    imgFocus: imgFocus
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

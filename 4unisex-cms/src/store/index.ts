import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./reducers/sidebar.reducer";
import loadingReducer from "./reducers/loading.reducer";

export const store = configureStore({
  reducer: {
    sidebarUpdate: sidebarReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

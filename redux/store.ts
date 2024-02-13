import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    AllCarts: cartSlice,
  },
});

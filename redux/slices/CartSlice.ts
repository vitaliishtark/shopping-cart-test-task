import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, image, price } = action.payload;

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, title, image, price, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const cartID = action.payload;
      return state.filter((item) => item.id !== cartID);
    },
    incrementItem: (state, action) => {
      const cartID = action.payload;
      const existingItem = state.find((item) => item.id === cartID);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const cartID = action.payload;
      const existingItem = state.find((item) => item.id === cartID);

      if (existingItem.quantity <= 1) {
        return state.filter((item) => item.id !== cartID);
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;

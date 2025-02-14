import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    sendOrder: (state) => {
      state.items = [];
      state.orderSent = true; 
    },
    resetOrderState: (state) => {
      state.orderSent = false;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart, sendOrder, resetOrderState } = cartSlice.actions;
export default cartSlice.reducer;

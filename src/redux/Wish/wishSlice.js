import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWish: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearWish: (state) => {
      state.items = [];
    }
  }
});

export const { addToWish, removeFromWish, clearWish } = wishSlice.actions;
export default wishSlice.reducer;

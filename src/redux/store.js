// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import buildingsReducer from "./BildingSlice/bildingSlice";

export const myStore = configureStore({
  reducer: {
    buildings: buildingsReducer,
  },
});

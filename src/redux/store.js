import { configureStore } from "@reduxjs/toolkit";
import buildingsReducer from "./BildingSlice/bildingSlice";
import wishReducer from "./Wish/wishSlice";

export const myStore = configureStore({
  reducer: {
    buildings: buildingsReducer,
    wish: wishReducer,
  },
});

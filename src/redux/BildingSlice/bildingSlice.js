// src/redux/buildingsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiApartament } from "../../axios/apiApartament"; // твой инстанс

// Асинхронный thunk для получения всех квартир
export const getBuildings = createAsyncThunk(
  "buildings/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiApartament.get("/company/House/apartments");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Не удалось получить данные");
    }
  }
);

const buildingsSlice = createSlice({
  name: "buildings",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBuildings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBuildings.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getBuildings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default buildingsSlice.reducer;

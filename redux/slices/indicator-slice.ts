import { createSlice } from "@reduxjs/toolkit";

interface indicatorState {
  indicator: number;
}

const initialState: indicatorState = {
  indicator: 0,
};

const indicatorSlice = createSlice({
  name: "indicator",
  initialState,
  reducers: {
    incrementIndicator(state) {
      state.indicator++;
    },
  },
});

export const { incrementIndicator } = indicatorSlice.actions;
export default indicatorSlice;

import { createSlice } from "@reduxjs/toolkit";

export interface LayoutiGlobalData {
  data: any;
}

const initialState: LayoutiGlobalData = {
  data: null,
};

export const LayoutiSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = LayoutiSlice.actions;

export default LayoutiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts:[],
}
const cardSlice = createSlice({
  name: "cart",
  initialState ,
  reducers: {
    loadcarts(state, action) {
      state.carts = action.payload;
    },
  }
})
export default cardSlice.reducer;
export const { loadcarts } = cardSlice.actions;
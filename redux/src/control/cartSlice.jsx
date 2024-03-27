import { createSlice } from "@reduxjs/toolkit";
import datas from "../components/datas";

const initialState = {
  cartItems: datas,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    decrease: (state, action) => {
      state.cartItems.find((item) => {
        if (item.id == action.payload) {
          item.quantity -= 1;
        }
      });
    },
    increase: (state, action) => {
      state.cartItems.find((item) => {
        if (item.id == action.payload) {
          item.quantity += 1;
        }
      });
    },
    calculateTotal: (state) => {
      let total = 0;
      let actualQuantity = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
        actualQuantity += item.quantity;
      });
      state.total = total;
      state.quantity = actualQuantity;
    },
  },
});

export default cartSlice.reducer;
export const { decrease, increase, calculateTotal } = cartSlice.actions;

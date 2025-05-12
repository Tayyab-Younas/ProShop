import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItem.find((e) => e._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((e) =>
          e._id === existItem._id ? item : e
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemPrice = addDecimals(
        state.cartItem.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

      state.textPrice = addDecimals(Number(0.15 * state.itemPrice).toFixed(2));

      state.totalPrice = (
        Number(state.price) +
        Number(state.shippingPrice) +
        Number(state.textPrice)
      ).toFixed(2);

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartItem = JSON.parse(localStorage.getItem("persist:cartItems"))?.items;

const initialState = {
  items: cartItem?.length > 0 || cartItem !== undefined ? cartItem : [],
  totalItem: 0,
  subTotal: 0,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // getCartSuccess(state, action) {
    //   const items = action.payload;
    //   state.items = items;
    //   state.totalItem = items.length;
    // },
    // addCartSuccess(state, action) {
    //   const cartItem = action.payload;
    //   state.items = [...state.items, cartItem];
    //   state.totalItem = state.items.length;
    // },
    // editQuantitySuccess(state, action) {
    //   const { _id, quantity } = action.payload;
    //   state.items = state.items.map((item) =>
    //     item._id === _id ? { ...item, quantity } : item
    //   );
    // },
    // editSelectedSuccess(state, action) {
    //   const { type, _id } = action.payload;
    //   switch (type) {
    //     case "all":
    //       // _id will be the value to check select all or not
    //       state.items = state.items.map((item) => ({ ...item, selected: _id }));
    //       break;
    //     case "item":
    //       // _id of the cart item to be changed
    //       state.items = state.items.map((item) =>
    //         item._id === _id ? { ...item, selected: !item.selected } : item
    //       );
    //       break;
    //     default:
    //       break;
    //   }
    // },
    // removeCartSuccess(state, action) {
    //   const _id = action.payload;
    //   // _id with null will remove all selected items
    //   if (!_id) state.items = state.items.filter((item) => !item.selected);
    //   else state.items = state.items.filter((item) => item._id !== _id);
    //   state.totalItem = state.items.length;
    // },
    // changePaymentMethod(state, action) {
    //   const { key, label } = action.payload;
    //   state.paymentMethod.key = key;
    //   state.paymentMethod.label = label;
    // },
    // removeSelected(state, action) {
    //   const orderedItems = action.payload;
    //   state.items = state.items.filter(
    //     (item) => !orderedItems.includes(item.product._id)
    //   );
    //   state.totalItem = state.items.length;
    // },

    addToCart(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalItem = state.items.length;
    },

    incrementItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity += 1;
    },
    decrementItem(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalItem = state.items.length;
    },

    sumTotal(state, action) {
      let newSubTotal = state.items.reduce((prevValue, currentValue) => {
        return (prevValue += currentValue.price * currentValue.quantity);
      }, 0);
      state.subTotal = newSubTotal;
    },

    clearCart(state, action) {
      state.items = [];
      state.totalItem = 0;
    },
  },
});

const { reducer, actions } = slice;
export const {
  addToCart,
  incrementItem,
  decrementItem,
  deleteItem,
  clearCart,
  sumTotal,
} = actions;
export default reducer;

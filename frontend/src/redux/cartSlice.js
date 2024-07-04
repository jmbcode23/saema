import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const tempProduct = { ...action.payload, quantity: 1 };
      state.cartItems.push(tempProduct)
    },

  },
})


// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer
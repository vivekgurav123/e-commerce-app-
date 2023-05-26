import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addToCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext

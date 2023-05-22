import React, { createContext, useState, useEffect } from 'react'
const CartContext = createContext()

const cartItemsFromLocalStorage =
  JSON.parse(localStorage.getItem('cartItem')) || []
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(cartItemsFromLocalStorage)
  let handleAddToCart = (product) => {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      )
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }
  }
  // function below is for handleIncrease for d cart section
  function handleIncrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected) {
      setCartItem(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      )
    }
  }
  // function below is for handleDecrease for d cart section
  function handleDecrease(product) {
    const productSelected = cartItem.find(
      (singleCartItem) => singleCartItem.id === product.id
    )
    if (productSelected.quantity === 1) {
      setCartItem(cartItem.filter((oneItem) => oneItem.id !== product.id))
    } else {
      setCartItem(
        cartItem.map((dd) =>
          dd.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : dd
        )
      )
    }
  }
  // reduce ftn for d cart section
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  )
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }, [cartItem])

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        handleAddToCart,
        handleIncrease,
        handleDecrease,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext 

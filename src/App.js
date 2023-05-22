import { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import SingleProduct from './pages/SingleProduct'
// import { CartProvider } from './Hooks/CartContext'

// const cartItemsFromLocalStorage =
//   JSON.parse(localStorage.getItem('cartItem')) || []

function App() {
  // const [cartItem, setCartItem] = useState(cartItemsFromLocalStorage)
  // useEffect(() => {
  //   localStorage.setItem('cartItem', JSON.stringify(cartItem))
  // }, [cartItem])
  // let handleAddToCart = (product) => {
  //   const productSelected = cartItem.find(
  //     (singleCartItem) => singleCartItem.id === product.id
  //   )
  //   if (productSelected) {
  //     setCartItem(
  //       cartItem.map((oneItem) =>
  //         oneItem.id === product.id
  //           ? { ...productSelected, quantity: productSelected.quantity + 1 }
  //           : oneItem
  //       )
  //     )
  //   } else {
  //     setCartItem([...cartItem, { ...product, quantity: 1 }])
  //   }
  // }
  // console.log(cartItem.length)

  return (
    <div className=''>
      {/* <CartProvider>
       
      </CartProvider> */}
      <BrowserRouter>
        {/* <Navbar cartItem={cartItem} /> */}
        <Navbar />
        <Routes>
          {/* <Route
            index
            element={
              <Home
                cartItem={cartItem}
                setCartItem={setCartItem}
                handleAddToCart={handleAddToCart}
              />
            }
          /> */}
          <Route
            index
            element={
              <Home
                // cartItem={cartItem}
                // setCartItem={setCartItem}
                // handleAddToCart={handleAddToCart}
              />
            }
          />
          {/* <Route
            path='/Cart'
            element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}
          /> */}
          <Route
            path='/Cart'
            element={<Cart  />}
          />
          {/* <Route
            path='/SingleProduct/:id'
            element={
              <SingleProduct cartItem={cartItem} setCartItem={setCartItem} />
            }
          /> */}
          <Route
            path='/SingleProduct/:id'
            element={
              <SingleProduct />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react';
import '../styles/Home.css';
import Hero from '../pages/Hero';

const Home = ({ cartItem, setCartItem, handleAddToCart }) => {
  return (
    <div className='container'>
      <Hero
        cartItem={cartItem}
        setCartItem={setCartItem}
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default Home
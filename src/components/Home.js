import React,{useEffect} from 'react';
import '../styles/Home.css';
import Hero from '../pages/Hero';
// import Jewelry from '../pages/Jewelry';
import LastPage from '../pages/LastPage';
import Electronics from '../pages/Electronics';
import Women from '../pages/Women';
import Jewelry from '../pages/Jewelry';

const Home = () => {
   useEffect(() => {
     window.scroll({
       top: 0,
       left: 0,
       behavior: 'smooth',
     })
   }, [])
  return (
    <div className='container'>
      {/* <Hero
        cartItem={cartItem}
        setCartItem={setCartItem}
        handleAddToCart={handleAddToCart}
      /> */}
      <Hero/>
      <Electronics/>
      <Women/>
      <Jewelry/>
      <LastPage/>
    </div>
  )
}

export default Home
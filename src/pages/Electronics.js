import React, { useContext } from 'react';
import useFetch from '../Hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CartContext from '../Hooks/CartContext';
import '../styles/Electronics.css';
import '../styles/Women.css';

const Electronics = () => {
  const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext)
  const { data, error, Loading } = useFetch(
    'https://fakestoreapi.com/products/category/electronics'
  )
  const notify = () => {
    toast.success('An item has been added !', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return (
    <div>
      <div className='component-title-electronics'>
        <h2>ELECTRONICS CATEGORY</h2>
      </div>
      <div className='card-container-electronics mt-4'>
        {data.map((datumElectronics) => {
          const { id, image, price, title } = datumElectronics
          return (
            <div
              className='h-100 p-1 text-center card-inner-electronics shadow-sm border   border-3 rounded'
              key={id}
            >
              <Link
                className='text-decoration-none'
                to={`/SingleProduct/${id}`}
              >
                <img className='img-fluid p-4 w-100' src={image} alt={title} />
                <p className='fw-bold'>${price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumElectronics)
                  notify()
                }}
                className='btn text-white btn-primary'
              >
                add to cart
              </button>
              <ToastContainer />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Electronics

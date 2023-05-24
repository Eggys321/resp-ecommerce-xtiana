import React, { useContext } from 'react'
import useFetch from '../Hooks/useFetch'
import ClipLoader from 'react-spinners/ClipLoader'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import CartContext from '../Hooks/CartContext'
import '../styles/Jewelry.css'

const Jewelry = () => {
    const { cartItem, setCartItem, handleAddToCart } = useContext(CartContext)
    const { data, error, Loading } = useFetch(
      'https://fakestoreapi.com/products/category/jewelery'
    )
    const notify = () => {
      toast.success('An item has been added !', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  return (
    <div>
      <div className='component-title-jewelry'>
        <h2>JEWELRY CATEGORY</h2>
      </div>
      <div className='card-container-jewelry row  align-items-center  mt-4 w-100 m-auto '>
        {data.map((datumJewelry) => {
          const { id, image, price, title } = datumJewelry
          return (
            <div
              className='col-md-4 h-100  p-1 text-center card-inner-jewelry shadow-sm border   border-3 rounded'
              key={id}
            >
              <Link
                className='text-decoration-none'
                to={`/SingleProduct/${id}`}
              >
                <img className='w-100 img-fluid p-5' src={image} alt={title} />
                <p className='fw-bold'>${price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumJewelry)
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

export default Jewelry

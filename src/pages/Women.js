import React,{useContext} from 'react';
import useFetch from '../Hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CartContext from '../Hooks/CartContext';
import '../styles/Women.css';


const Women = () => {
    const {cartItem,setCartItem,handleAddToCart} = useContext(CartContext)
    const { data, error, Loading } = useFetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    )
     const notify = () => {
       toast.success('An item has been added !', {
         position: toast.POSITION.TOP_CENTER,
       })
     }
  return (
    <div className='container'>
      <h2>{Loading && <ClipLoader />} </h2>
      <div className='component-title-jewelry'>
        <h2>WOMEN CATEGORY</h2>
      </div>
      <div className='component-data-mapped-jewelry'>
        {data.map((datumWomen) => {
          const { id, image, price, title } = datumWomen
          return (
            <div key={id} className='component-data-inner-women'>
              <Link
                className='text-decoration-none'
                to={`/SingleProduct/${id}`}
              >
                <img className='' src={image} alt={title} />
                <p className='fw-bold'>${price} </p>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart(datumWomen)
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

export default Women
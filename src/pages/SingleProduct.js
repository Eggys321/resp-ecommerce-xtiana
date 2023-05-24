import React,{useContext,useEffect} from 'react';
import { useParams,Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import ClipLoader from 'react-spinners/ClipLoader';
import CartContext from '../Hooks/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/SingleProduct.css'



const SingleProduct = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`)
  const { title, image, description, price, rating } = data
    const { handleAddToCart } = useContext(CartContext)
     const notify = () => {
       // toast('An item has been added')
       toast.success('An item has been added !', {
         position: toast.POSITION.TOP_CENTER,
       })
     }
     useEffect(() => {
       window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
       })
     }, [data])

  return (
    <div>
      <div className='container single-component-container'>
        <h2> {loading && <ClipLoader color={'red'} size={50} />}</h2>
        <div className='row justify-content-between align-items-center mt-4'>
          <div className='col-sm-12 text-center col-md-4 '>
            <img className='img-fluid w-100 ' src={image} alt={title} />
          </div>
          <div className='col-sm-12 col-md-7'>
            <h1 className='text-danger fw-bold'> {title} </h1>
            <h4 className='text-success lh-base'> {description} </h4>
            <h3>${price} </h3>

            <div className='d-flex justify-content-between'>
              <button
                className='btn btn-primary'
                onClick={() => {
                  handleAddToCart(data)
                  notify()
                }}
              >
                add to cart
              </button>
              <Link to='/' className='btn btn-primary'>
                Back to home
              </Link>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct

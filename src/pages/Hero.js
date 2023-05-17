import React from 'react'
import '../styles/Hero.css'
import useFetch from '../Hooks/useFetch'
import ClipLoader from 'react-spinners/ClipLoader'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Hero = ({ cartItem, setCartItem, handleAddToCart }) => {
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch('https://fakestoreapi.com/products/14')
  const { data: data3, loading: loading3 } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  )
  //    console.log(data3);
  const notify = () => {toast.success('An item has been added !' ,{
    position:toast.POSITION.TOP_CENTER,
  })}

  return (
    <div className='container hero-container mt-4'>
      <h2> {loading3 && <ClipLoader color={'red'} />}</h2>
      {error2 && <h2> {error2.message} </h2>}

      <div className='row justify-content-between  gap-5'>
        <div className='col-sm-12 col-lg-6 shadow-sm  border border-5 rounded'>
          <img className='w-100 hero-img' src={data2.image} alt={data2.title} />
        </div>
        {/* Card section */}
        <div className='col-sm-12 col-lg-5 '>
          <div className='card-container mt-sm-4'>
            {data3.map((datum3) => {
              const { id, title, image, price } = datum3
              return (
                <div
                  className='h-100 p-1 text-center card-inner shadow-sm border   border-3 rounded'
                  key={id}
                >
                  <Link
                    className='text-decoration-none'
                    to={`/SingleProduct/${id}`}
                  >
                    <img className='img-fluid w-100' src={image} alt={title} />
                    <p className='fw-bold'>${price} </p>
                  </Link>
                  <button
                    onClick={() => {
                      handleAddToCart(datum3); notify()
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
      </div>
    </div>
  )
}

export default Hero

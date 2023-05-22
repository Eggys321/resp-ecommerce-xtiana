import React, { useContext } from 'react'
import '../styles/Cart.css'
import CartContext from '../Hooks/CartContext'

const Cart = () => {
  const { cartItem, setCartItem,handleDecrease,handleIncrease,totalPrice } = useContext(CartContext)
  
  return (
    <div className='container'>
      <div>
        {cartItem.length === 0 && (
          <div>
            <h3>No item in the cart</h3>
          </div>
        )}
      </div>
      <div className='container '>
        {cartItem.map((singleCartItem) => {
          const { image, id, title, price, quantity, description } =
            singleCartItem
          return (
            <div
              key={id}
              className='row justify-content-between align-items-center mt-4'
            >
              <div className='col-md-5 '>
                <img className='w-100' src={image} alt={title} />
              </div>
              <div className='col-md-6'>
                <h2 className='text-danger '> {title} </h2>
                <h4 className='text-success lh-base'>{description} </h4>
                <div>
                  <h4>
                    {quantity} * {price}
                  </h4>
                  <div className='d-flex justify-content-between w-75 gap-4'>
                    <button
                      onClick={() => handleIncrease(singleCartItem)}
                      className='btn btn-primary w-75'
                    >
                      increase
                    </button>
                    <button
                      onClick={() => handleDecrease(singleCartItem)}
                      className='btn btn-primary w-75'
                    >
                      decrease
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        <div className='text-center'>
          {cartItem.length >= 1 && (
            <div>
              <button
                onClick={() => setCartItem([])}
                className='w-50 btn btn-danger mt-5 fs-5 fw-bold'
              >
                {cartItem.length === 1 ? 'clear item' : 'clear All'}
              </button>
            </div>
          )}

          <div>
            <h1> Total Price </h1>
            <div>
              <h2>$ {totalPrice} </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import { removeProduct } from '../redux/cartSlice.js'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { products } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let totalPrice = 0
  products.forEach((product) => (totalPrice += product.quantity * product.price))

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }))
  }

  const handleOrder = () => {
    if (products.length > 0) {
      navigate('/checkout')
    }
  }

  return (
    <div className="bg-gray-200 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product._id} className="flex items-center mb-4 border-b pb-4">
                  <div onClick={() => handleRemoveProduct(product._id)} className="cursor-pointer mr-4 text-red-600"><AiOutlineClose /></div>
                  <img src={`http://localhost:3000/pictures/${product.img}`} alt={product.title} className="w-24 h-24 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <div className="flex items-center">
                      <span className="mr-2">{product.quantity} x </span>
                      <span className="font-semibold">${product.price}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-xl text-center">No products in the cart. Go shopping!</h1>
            )}
          </div>
          <div className="md:flex-1 px-4">
            <div className="flex flex-col items-end">
              <div className="mb-4">Total products: {products.length}</div>
              <div className="flex items-center">
                <span className="mr-4 font-semibold">Subtotal: ${totalPrice}</span>
                <button onClick={handleOrder} disabled={products.length === 0} className={`py-2 px-4 rounded-full font-bold ${products.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

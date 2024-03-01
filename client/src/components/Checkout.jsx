import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const { products } = useSelector((state) => state.cart)

  let totalPrice = 0
  products.forEach((product) => (totalPrice += product.quantity * product.price))

  return (
    <div className="bg-gray-200 py-8 h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your order is successful</h2>
            <p className="text-lg mb-4">Expect it in 1 hour</p>
            <span className="text-lg font-semibold">Total Price: ${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, clearCart } from "../redux/cartSlice.js";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance.js";


const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const { products } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = async () => {
    const orderData = {
      userId: user._id,
      userEmail: user?.email,
      products: products.map((product) => ({
        productId: product._id,
        quantity: product.quantity,
        title: product.title,
        price: product.price,
        category: product.category,
      })),
    };

    try {
      const response = await axiosInstance.post("/order/yourorders", orderData);
      console.log("Order placed successfully:", response.data);
      setOrderId(response.data.orderId);
      navigate("/checkout");
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your Cart
        </h2>
        {products.length === 0 ? (
          <p className="text-lg text-gray-600">No products found in your cart.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products List */}
            <div className="flex-1 space-y-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center bg-white rounded-xl shadow-sm p-4 border border-gray-200"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-24 h-24 rounded-lg object-cover mr-6"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Category: {product.category}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-sm font-medium text-blue-600">
                      Price: ${product.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(product._id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-xl p-6 shadow-md h-fit">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h3>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span className="font-medium">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-6">
                <span>Total Items</span>
                <span className="font-medium">{products.length}</span>
              </div>
              <button
                onClick={handleOrder}
                disabled={products.length === 0 || !user}
                className={`w-full py-3 text-white rounded-full font-semibold transition ${
                  products.length === 0 || !user
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                }`}
              >
                {user ? "Proceed to Checkout" : "Login First"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, clearCart } from "../redux/cartSlice.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const { products } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  //console.log(user.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = 0;
  products.forEach(
    (product) => (totalPrice += product.quantity * product.price)
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
    //console.log(orderData);
    try {
      const response = await axios.post(
        "http://localhost:3000/order/yourorders",
        orderData
      );
      //console.log(response.data);
      setOrderId(response.data.orderId);
    } catch (error) {
      console.error("Error placing order:", error.message);
    }

    if (products.length > 0) {
      //dispatch(clearCart());
      navigate("/checkout");
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-full mr-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Customer's Cart
            </h2>
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center mb-4 border"
                >
                  <img
                    src={`http://localhost:3000/pictures/${product.img}`}
                    alt={product.title}
                    className="w-24 h-24 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-600">
                      Quantity: {product.quantity}
                    </p>
                    <p className="text-lg font-semibold">${product.price}</p>
                    <div
                      onClick={() => handleRemoveProduct(product._id)}
                      className="cursor-pointer mr-4 text-red-600"
                    >
                      Remove
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
          <div className="w-full md:w-1/5">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Summary</h3>
              <div className="flex justify-between mb-2">
                <p className="text-base text-gray-700">Subtotal:</p>
                <p className="text-base font-semibold">${totalPrice}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-base text-gray-700">Total Products:</p>
                <p className="text-base font-semibold">{products.length}</p>
              </div>
              <button
                onClick={handleOrder}
                disabled={products.length === 0 || !user} // Check if user exists
                className={`py-2 px-4 rounded-full font-bold ${
                  products.length === 0 || !user // Update condition
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {user ? "Order now" : "Login First"}{" "}
                {/* Update button text based on user */}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* asdasdasd */}
    </>
  );
};

export default Cart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, clearCart } from "../redux/cartSlice.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  console.log(user);

  let totalPrice = 0;
  products.forEach(
    (product) => (totalPrice += product.quantity * product.price)
  );

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ _id: id }));
  };

  const handleOrder = () => {
    if (products.length > 0) {
      dispatch(clearCart());
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

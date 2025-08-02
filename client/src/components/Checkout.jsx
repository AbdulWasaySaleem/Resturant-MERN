import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice.js";
import axiosInstance from "../utils/axiosinstance.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const [userOrders, setUserOrders] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  const fetchUserOrders = async () => {
    try {
      const userId = user._id;

      const response = await axiosInstance.get("/order/userOrder", {
        params: { userId },
      });

      const fetchedOrder = response?.data?.data?.order;

      console.log("User orders fetched successfully:", fetchedOrder);

      if (fetchedOrder) {
        setUserOrders(fetchedOrder);
        dispatch(clearCart());
        await sendEmailConfirmation(fetchedOrder);
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  if (user) {
    fetchUserOrders();
  }
}, [user, dispatch]);


  const sendEmailConfirmation = async (order) => {
    try {
      await axiosInstance.post("/order/confirmOrder", {
        userId: order?.userId,
        email: order?.userEmail,
      });
      toast.success("Order confirmation email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const order = userOrders;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow hover:scale-105 transition-transform"
        >
          ← Go Back
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Summary</h2>

        {!order || !order.products ? (
          <p className="text-gray-600">You have no recent orders.</p>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Order ID:</span> {order.orderId}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {order.userEmail}
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Products</h3>

            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <p>
                    <span className="font-medium">Title:</span> {product.title}
                  </p>
                  <p>
                    <span className="font-medium">Quantity:</span> {product.quantity}
                  </p>
                  <p>
                    <span className="font-medium">Category:</span> {product.category}
                  </p>
                  <p>
                    <span className="font-medium">Price:</span> ${product.price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;

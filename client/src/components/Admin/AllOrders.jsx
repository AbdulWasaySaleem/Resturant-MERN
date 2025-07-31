import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosinstance";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axiosInstance.get("/order/all-order");
        setOrders(response?.data?.data?.orders || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">All Orders</h1>

      {loading ? (
        <div className="text-gray-600">Loading orders...</div>
      ) : orders.length === 0 ? (
        <div className="text-gray-600">No orders found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">User Email</th>
                <th className="py-3 px-4 text-center">Total Items</th>
                <th className="py-3 px-4 text-center">Amount</th>
                <th className="py-3 px-4 text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-800">{order.orderId}</td>
                  <td className="py-3 px-4 text-gray-700">{order.userEmail}</td>
                  <td className="py-3 px-4 text-center text-gray-700">{order.totalItems}</td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">
                    ${order.totalAmount}
                  </td>
                  <td className="py-3 px-4 text-center text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllOrders;

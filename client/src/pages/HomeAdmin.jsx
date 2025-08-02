import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosinstance";
import getErrorMessage from "../components/common/getErrorMessage";
import User from "../components/Admin/Cards/User";
import Product from "../components/Admin/Cards/Product";
import EditProductModal from "../components/Admin/EditProductModal";

const HomeAdmin = () => {
  const [allfoodDetails, setAllFoodDetails] = useState([]);
  const [alluserDetails, setAllUserDetails] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchFoodDetails();
    fetchUserDetails();
  }, [token]);

  const fetchFoodDetails = async () => {
    try {
      const res = await axiosInstance.get("/products/alldata");
      setAllFoodDetails(res.data.data);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const fetchUserDetails = async () => {
    try {
      const res = await axiosInstance.get("/auth/allusers");
      console.log(res.data.data);
      setAllUserDetails(res.data.data);
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const toggleAdminStatus = async (userId) => {
    try {
      await axiosInstance.patch(`/auth/users/toggle/${userId}`);
      toast.success("User admin status toggled");
      fetchUserDetails();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axiosInstance.delete(`/products/${productId}`);
      toast.success("Product deleted");
      fetchFoodDetails();
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  return (
    <div className="w-full px-4 md:w-11/12 mx-auto">
      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row gap-6 my-6">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-6 flex-1 shadow-lg">
          <p className="text-3xl font-bold">Items</p>
          <p className="text-5xl mt-2">{allfoodDetails.length}</p>
          <button
            onClick={() => setShowUserDetails(false)}
            className="mt-6 bg-white text-indigo-700 px-5 py-2 rounded-full font-semibold hover:bg-indigo-100 transition"
          >
            View Items
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-6 flex-1 shadow-lg">
          <p className="text-3xl font-bold">Users</p>
          <p className="text-5xl mt-2">{alluserDetails.length}</p>
          <button
            onClick={() => setShowUserDetails(true)}
            className="mt-6 bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            View Users
          </button>
        </div>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {showUserDetails
          ? alluserDetails.map((user, i) => (
              <User
                key={user._id}
                user={user}
                index={i}
                onToggleAdmin={toggleAdminStatus}
              />
            ))
          : allfoodDetails.map((product) => (
              <Product
                key={product._id}
                product={product}
                onDelete={handleDelete}
                onEdit={(product) => {
                  setEditProduct(product);
                  setShowEditModal(true);
                }}
              />
            ))}
      </div>
      <EditProductModal
        visible={showEditModal}
        product={editProduct}
        onClose={() => setShowEditModal(false)}
        onSave={fetchFoodDetails}
      />
    </div>
  );
};

export default HomeAdmin;

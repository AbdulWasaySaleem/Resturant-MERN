import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeAdmin = () => {
  const [allfoodDetails, setAllFoodDetails] = useState(null);
  const [alluserDetails, setAllUserDetails] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const { token } = useSelector((state) => state.auth);

  //see food details
  const fetchFoodDetails = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/alldata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setAllFoodDetails(data);
    } catch (error) {
      console.error("Error fetching food details:", error.message);
    }
  };
  //see all users
  const fetchUserDetails = async () => {
    try {
      const res = await fetch(`http://localhost:3000/auth/allusers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setAllUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const handleSeeUsers = () => {
    setShowUserDetails(true);
  };

  //see All products/items
  const handleSeeItems = () => {
    setShowUserDetails(false);
  };

  //Admin status
  // const toggleAdminStatus = async (userId) => {
  //   try {
  //     console.log(userId);
  //     const response = await fetch(
  //       `http://localhost:3000/auth/users/toggle/${userId}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       // Update the user's isAdmin status in the frontend state
  //       toast.success("done");
  //       setAllUserDetails((prevUsers) =>
  //         prevUsers.map((user) =>
  //           user.id === userId ? { ...user, isAdmin: !user.isAdmin } : user
  //         )
  //       );
  //       toast.success("User's admin status toggled successfully");
  //       fetchUserDetails();
  //     } else {
  //       toast.error("Failed to toggle user's admin status");
  //     }
  //   } catch (error) {
  //     console.error("Error toggling admin status:", error.message);
  //     toast.error("An error occurred while toggling user's admin status");
  //   }
  // };

  //handle delete
  const handleDelete = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        // Display success toast
        toast.success("Product deleted successfully");
        // Refresh the page or fetch updated data
        fetchFoodDetails();
      } else {
        toast.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
      // Handle error
      toast.error("An error occurred while deleting the product");
    }
  };

  useEffect(() => {
    fetchUserDetails();
    fetchFoodDetails();
    //toggleAdminStatus();
  }, [token]);

  return (
    <>
      <div className="w-full md:w-2/3">
        <div className="flex flex-col md:flex-row">
          <div
            className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-full md:w-1/2 ml-0 md:ml-2 p-6"
            style={{
              backgroundImage:
                "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
              backgroundPosition: "100% 40%",
            }}
          >
            <p className="text-5xl text-indigo-900">
              Items <br />
              <strong>{allfoodDetails?.length}</strong>
            </p>

            <a
              href="#"
              className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
            >
              <button onClick={handleSeeItems}>See items</button>
            </a>
          </div>
          <div
            className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-full md:w-1/2 ml-0 md:ml-2 mt-6 md:mt-0 p-6"
            style={{
              backgroundImage:
                "url(https://previews.dropbox.com/p/thumb/AAuwpqWfUgs9aC5lRoM_f-yi7OPV4txbpW1makBEj5l21sDbEGYsrC9sb6bwUFXTSsekeka5xb7_IHCdyM4p9XCUaoUjpaTSlKK99S_k4L5PIspjqKkiWoaUYiAeQIdnaUvZJlgAGVUEJoy-1PA9i6Jj0GHQTrF_h9MVEnCyPQ-kg4_p7kZ8Yk0TMTL7XDx4jGJFkz75geOdOklKT3GqY9U9JtxxvRRyo1Un8hOObbWQBS1eYE-MowAI5rNqHCE_e-44yXKY6AKJocLPXz_U4xp87K4mVGehFKC6dgk_i5Ur7gspuD7gRBDvd0sanJ9Ybr_6s2hZhrpad-2WFwWqSNkh/p.png?fv_content=true&size_mode=5)",
              backgroundPosition: "100% 40%",
            }}
          >
            <p className="text-5xl text-indigo-900">
              Users <br />
              <strong>{alluserDetails?.length}</strong>
            </p>
            <a
              href="#"
              className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
            >
              <button onClick={handleSeeUsers}>See Users</button>
            </a>
          </div>
        </div>

        <div className="pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {showUserDetails
              ? alluserDetails?.map((user, index) => (
                  <div
                    key={user.id}
                    className={`max-w-xs rounded overflow-hidden shadow-lg ${
                      user.isAdmin ? "bg-slate-400 text-white" : ""
                    }`}
                  >
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {index + 1}. {user.username}
                      </div>
                      <p className="text-gray-700 text-base truncate overflow-hidden">
                        {user.email}
                      </p>
                      <p className="text-gray-700 text-base truncate overflow-hidden">
                        Address: {user.address}
                      </p>
                    </div>
                    <div className="px-6 py-2 flex justify-center">
                      <button
                        //onClick={() => toggleAdminStatus(user?._id)}
                        className={`bg-blue-600 text-white font-bold py-2 px-2 rounded ${
                          user?.isAdmin ? "bg-red-500" : ""
                        }`}
                      >
                        {user.isAdmin
                          ? "Revoke Admin Privileges"
                          : "Grant Admin Privileges"}
                      </button>
                    </div>
                  </div>
                ))
              : allfoodDetails?.map((product) => (
                  <div
                    key={product.id}
                    className="max-w-xs rounded overflow-hidden shadow-lg"
                  >
                    <img
                      src={`http://localhost:3000/pictures/${product.img}`}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      alt="Product"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {product.title}
                      </div>
                      <p className="text-gray-700 text-base truncate overflow-hidden">
                        {product.description}
                      </p>
                      <p className="text-gray-700 text-base">
                        Price: ${product.price}
                      </p>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                      <Link
                        to={`/edit/${product._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;

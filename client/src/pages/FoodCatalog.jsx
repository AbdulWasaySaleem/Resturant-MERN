import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosinstance";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const fetchFoodType = async () => {
    try {
      const res = await axiosInstance.get(`/products?category=${foodEndpoint}`);
      setFilteredFoods(res.data.data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchFoodType();
  }, [foodEndpoint]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 capitalize">
          Explore the best {foodEndpoint} in town
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md transition-all duration-200 hover:scale-105 hover:from-purple-600 hover:to-blue-600 active:scale-95"
        >
          ← Go Back
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <Link to={`/food/${food._id}`} key={food._id}>
                <div className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200">
                  <img
                    src={food.img || "/fallback-food.jpg"}
                    className="w-full h-48 object-cover"
                    alt={food.title}
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                      {food.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {food.description}
                    </p>
                    <div className="flex justify-between text-sm text-gray-700">
                      <span>Review: {food.review}/5</span>
                      <span>${food.price}</span>
                    </div>
                    <div className="text-xs text-purple-700 mt-1">
                      Category: {food.category}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-xl text-center text-gray-500">
              No {foodEndpoint} available right now
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoodCatalog;

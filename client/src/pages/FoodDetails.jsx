import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { toast } from 'react-toastify';
import axiosInstance from "../utils/axiosinstance";
import { addProduct } from "../redux/cartSlice";

const FoodDetails = () => {
  const [foodDetails, setFoodDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const res = await axiosInstance.get(`/products/find/${id}`);
        setFoodDetails(res.data.data);
      } catch (error) {
        console.error("Error fetching food details:", error.message);
      }
    };
    fetchFoodDetails();
  }, [id, token]);

  const changeQuantity = (type) => {
    if (type === "dec" && quantity > 1) setQuantity((prev) => prev - 1);
    else if (type === "inc") setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    toast.success("Added to cart!");
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {foodDetails && (
          <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex-1 flex justify-center items-center">
              <img
                src={foodDetails.img || "/fallback-food.jpg"}
                alt={foodDetails.title}
                className="rounded-lg max-h-96 object-cover w-full"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {foodDetails.title}
              </h2>
              <p className="text-gray-600 mb-2">Review: {foodDetails.review}/5</p>
              <p className="text-xl font-semibold text-purple-700 mb-4">
                ${foodDetails.price * quantity}
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={() => changeQuantity("dec")}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-full"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => changeQuantity("inc")}
                  className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8 rounded-full"
                >
                  +
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-1">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {foodDetails.description}
                </p>
              </div>

              <button
                onClick={addToCart}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold text-lg transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FoodDetails;
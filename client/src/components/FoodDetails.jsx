import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProduct } from "../redux/cartSlice";

const FoodDetails = () => {
  const [foodDetails, setFoodDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/find/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setFoodDetails(data);
        setTotalPrice(data.price); // Set initial total price to unit price
      } catch (error) {
        console.error("Error fetching food details:", error.message);
      }
    };
    fetchFoodDetails();
  }, [id, token]);

  const changeQuantity = (command) => {
    if (command === "dec") {
      if (quantity === 1) return;
      setQuantity((prev) => prev - 1);
      setTotalPrice((prev) => prev - foodDetails.price); // Decrease total price
    } else if (command === "inc") {
      setQuantity((prev) => prev + 1);
      setTotalPrice((prev) => prev + foodDetails.price); // Increase total price
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ ...foodDetails, quantity }));
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <div className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4 border border-black rounded items-center">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] md:h-auto rounded-lg mb-4 flex justify-center items-center my-auto">
                {foodDetails && (
                  <img
                    className="max-w-full max-h-full object-cover mt-3"
                    src={`http://localhost:3000/pictures/${foodDetails.img}`}
                    alt="Product Image"
                  />
                )}
              </div>
            </div>
            <div className="md:flex-1 px-4">
              {foodDetails && (
                <>
                  <h2 className="text-2xl font-bold text-black mb-2">
                    {foodDetails.title}
                  </h2>
                  <p className="text-black text-sm mb-2">
                    Review: {foodDetails.review}/5
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-black">Price: </span>
                      <span className="text-gray-800">
                        ${foodDetails?.price * quantity}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => changeQuantity("dec")}
                        className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-blue-600"
                      >
                        -
                      </button>
                      <span className="text-black">{quantity}</span>
                      <button
                        onClick={() => changeQuantity("inc")}
                        className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold ml-2 hover:bg-blue-600"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-black">
                      Product Description:
                    </span>
                    <p className="text-black text-sm mt-2">
                      {foodDetails.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={addToCart}
                      className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 w-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;

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
  const { products } = useSelector((state) => state.cart);
  console.log(products)

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
    <div className="bg-gray-200 py-8 h-[750px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 border border-black rounded border-solid items-center">
          <div className="md:flex-1 px-4 border-r-0 md:border-r-2 border-black">
            <div className="h-[460px] md:h-auto rounded-lg mb-4 flex justify-center items-center my-auto">
              {foodDetails && (
                <img
                  className="max-w-full max-h-full object-cover"
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
                <p className="text-black text-sm mb-4">
                  {foodDetails.description}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sed ante justo. Integer euismod libero id mauris malesuada
                    tincidunt. Vivamus commodo nulla ut lorem rhoncus aliquet.
                    Duis dapibus augue vel ipsum pretium, et venenatis sem
                    blandit. Quisque ut erat vitae nisi ultrices placerat non
                    eget velit. Integer ornare mi sed ipsum lacinia, non
                    sagittis mauris blandit. Morbi fermentum libero vel nisl
                    suscipit, nec tincidunt mi consectetur.
                  </p>
                </div>
                <div className="m-2">
                  <button
                    onClick={addToCart}
                    className="bg-blue-500 text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-blue-600 w-full"
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
  );
};

export default FoodDetails;

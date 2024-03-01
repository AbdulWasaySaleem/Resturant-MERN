import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const location = useLocation();
  const foodEndpoint = location.pathname.split("/")[2];
  //console.log(foodEndpoint)
  const { token } = useSelector((state) => state.auth);

  const fetchFoodType = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/products?category=${foodEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //console.log(res)
      if (res.ok) {
        const data = await res.json();
        //console.log(data)
        setFilteredFoods(data);
      } else {
        console.error("Error fetching data:", res.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    fetchFoodType();
  }, [foodEndpoint, token]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          The best {foodEndpoint} in the country
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <Link to={`/food/${food._id}`} key={food._id}>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={`http://localhost:3000/pictures/${food.img}`}
                    className="w-full h-auto rounded-md mb-4"
                    alt={food.title}
                  />
                  <h1 className="text-xl font-semibold mb-2">{food.title}</h1>
                  <p className="text-gray-600 mb-2">{food.description}</p>
                  <p className="text-gray-600 mb-2">Review: {food.review}</p>
                  <p className="text-gray-600 mb-2">Price: ${food.price}</p>
                  <p className="text-gray-600 mb-2">
                    Category: {food.category}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-xl">No {foodEndpoint} available right now</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;

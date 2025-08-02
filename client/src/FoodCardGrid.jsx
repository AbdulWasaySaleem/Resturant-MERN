import { useState } from "react";
import { Link } from "react-router-dom";
import { HiStar, HiClock, HiHeart, HiArrowRight } from "react-icons/hi";

const FoodCardGrid = ({ foodTypes }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {foodTypes.map((foodType, index) => (
        <Link
          to={`/foods/${foodType.name}`}
          key={foodType.id}
          className="group block"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={foodType.img}
                alt={foodType.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
                <HiHeart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                <HiStar className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-semibold text-gray-900">
                  {foodType.rating}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <HiClock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">15-25 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-green-600">
                        $12-18
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {foodType.name}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-2">
                  {foodType.description ||
                    "Discover amazing flavors and textures in every bite of our carefully crafted dishes."}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Available</span>
                  </span>
                  <span>{foodType.available}+ dishes</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span>Explore</span>
                  <HiArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      hoveredCard === index ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FoodCardGrid;

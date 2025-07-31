import { useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { foodTypes } from "../../data/data.js";
import FoodCardGrid from "../../FoodCardGrid.jsx";

const Foods = () => {
  return (
    <section
      className="relative bg-gradient-to-b from-gray-50 to-white py-20"
      id="section"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            🍽️ Our Specialties
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Delicious Menu
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From comfort classics to exotic flavors, each dish is crafted with
            premium ingredients and culinary expertise that will tantalize your
            taste buds.
          </p>
        </div>

        {/* Food Cards Grid */}
        <FoodCardGrid foodTypes={foodTypes} />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-600 text-lg">
              Can't find what you're looking for?
            </p>
            <Link
              to="/foods"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View Full Menu
              <HiArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foods;

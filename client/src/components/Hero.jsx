import React from "react";
import { Link } from 'react-scroll';
import image from "../../public/images/Fastfood.jpg"

const Hero = () => {
  return (
    <div className="flex justify-center bg-hero ">
      <div className="flex flex-col md:flex-row items-center max-w-7xl px-6 md:px-20 py-12 md:py-24 bg-gray-100 m-4">
        <div className="w-full md:w-1/2 lg:pr-16 ">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-semibold">
            Experience the Taste of Authentic Cuisine.
          </h2>
          <p className="mt-6 md:mt-8 text-lg text-center md:text-left text-gray-700 font-light leading-relaxed">
            Our restaurant is dedicated to serving you the finest flavors from
            around the world. Indulge in our meticulously crafted dishes,
            prepared with the freshest ingredients and infused with passion and
            expertise.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Link to="section" smooth={true} duration={100} className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
              Order Now
            </Link>
            <Link to="section" smooth={true} duration={100} className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-md bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition duration-300">
              <a href="#foods">See Our Menu</a>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={image}
            alt="Illustration"
            className="w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

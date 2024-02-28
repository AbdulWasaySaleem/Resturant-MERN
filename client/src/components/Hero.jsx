import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row items-center max-w-7xl px-6 md:px-20 py-12 md:py-24">
        <div className="w-full md:w-1/2 lg:pr-16">
          <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-semibold">
            There’s a better way to connect with your customers.
          </h2>
          <p className="mt-6 md:mt-8 text-lg text-center md:text-left text-gray-700 font-light leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email
            and live chat with a personal touch, and deliver help content right
            where your customers need it, all in one place, and all for one low
            price.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
              Order Now
            </button>
            <button className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-md bg-white text-blue-500 border border-blue-500 hover:bg-blue-50 transition duration-300">
              <a href="#foods">See What's Available</a>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://loremflickr.com/g/600/600/girl"
            alt="Illustration"
            className="w-full md:max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

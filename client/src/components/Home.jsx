import React from "react";
import Hero from "./Hero";
import Foods from "./Foods";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row items-center px-6 md:px-20 py-12 md:py-24 justify-center">
        <div className="flex px-3 py-3 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Delivery is always on time</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

          </div>
        </div>
        {/* 2nd */}
        <div className="flex px-3 py-3 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">He is friendly and social</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

          </div>
        </div>
        {/* 3rd */}
        <div className="flex px-3 py-3 ">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">He works very ahrd</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

          </div>
        </div>
      </div>
      <Foods/>
      <Newsletter/>
    </div>
  );
};

export default Home;

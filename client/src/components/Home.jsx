import React from "react";
import Hero from "./Hero";
import Foods from "./Foods";
import Newsletter from "./Newsletter";
import Image from "../../public/images/delivery-is-always-on-time-vector.jpg";
import Image2 from "../../public/images/delivery-man-is-friendly-and-social-vector (1).jpg";
import Image3 from "../../public/images/delivery-man-is-friendly-and-social-vector.jpg";

const Home = () => {
  return (
    <div className="bg-slate-200">
      <Hero />
      <div className="flex justify-end items-center flex-col border-t-2 p-2">
        <h1 className="font-extrabold text-3xl text-blue-700">Delivery</h1>
        <p>
          "Timely deliveries are his forte, coupled with a warm and sociable
          demeanor. He's renowned for his unwavering work ethic and dedication."
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center px-6 md:px-20 py-12 md:py-24 justify-center ">
        <div className="flex px-3 py-3 bg-slate-100 rounded-lg">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
            <img className="w-full" src={Image} alt="Delivery on time" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Delivery is always on time
              </div>
              <p className="text-gray-700 text-base">
                Our delivery service ensures unwavering punctuality and
                reliability, reaching you right on schedule.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd */}
        <div className="flex px-3 py-3 bg-slate-100">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
            <img className="w-full" src={Image2} alt="Friendly and social" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                He is friendly and social
              </div>
              <p className="text-gray-700 text-base">
                Our delivery personnel extend a friendly and social interaction,
                making every delivery a pleasant experience.
              </p>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="flex px-3 py-3 bg-slate-100">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
            <img className="w-full" src={Image3} alt="Hardworking" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">He works very hard</div>
              <p className="text-gray-700 text-base">
                Our dedicated team member puts in maximum effort to ensure your
                orders are fulfilled efficiently and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Foods />
      <Newsletter />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomeAdmin from "./HomeAdmin";
import Test from "./Test";

const MainAdmin = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <HomeAdmin />;
      case "test":
        return <Test />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-orange-100 min-h-screen">
        <div className="bg-white text-blue-800 px-10 py-1 z-10 w-full">
          <div className="items-center justify-between py-2 text-5xl">
            <div className="font-bold text-blue-900 text-xl">
              Admin<span className="text-orange-600">Panel</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row p-4">
          <div className="w-full md:w-1/4 mr-0 md:mr-6 mb-6 md:mb-0">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <Link
                to="/adminpanel"
                onClick={() => setActiveComponent("home")}
                className={`inline-block text-gray-600 hover:text-black my-4 w-full ${
                  activeComponent === "home" ? "font-bold" : ""
                }`}
              >
                <span className="material-icons-outlined float-left pr-2"></span>
                Home
              </Link>
              <Link
                to="/test"
                onClick={() => setActiveComponent("test")}
                className={`inline-block text-gray-600 hover:text-black my-4 w-full ${
                  activeComponent === "create" ? "font-bold" : ""
                }`}
              >
                Create Item
              </Link>
            </div>
          </div>

          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default MainAdmin;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = user !== null;

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="">
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
        {/* Left side of the header */}
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          {/* Logo */}
          <div className="flex items-center justify-between w-full md:w-auto">
       
              <img
                src="https://www.svgrepo.com/show/491978/gas-costs.svg"
                height={40}
                width={40}
              />
          
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Center of the header */}
        <div className="hidden md:flex md:space-x-10">
          <Link
            to="/"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Contact
          </Link>
          <Link
            to="/foods"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Foods
          </Link>
          <Link
            to="/faq"
            className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            FAQ
          </Link>

          {user?.isAdmin && (
            <Link
              to="/adminpanel"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Admin
            </Link>
          )}
        </div>

        {/* Right side of the header */}

        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex">
            <Link
              to="/cart"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
            >
              Cart ({products.length})
            </Link>
            {/* Render profile icon or login link based on authentication status */}
            {isAuthenticated ? (
              <>
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                >
                  Signup
                </Link>
              </>
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { AiOutlineInfoCircle } from "react-icons/ai";
import axiosInstance from "../../utils/axiosinstance";
import { login } from "../../redux/authSlice";
import getErrorMessage from "../../components/common/getErrorMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      const { user, token } = response.data.data;

      if (user && token) {
        toast.success("Login Successful!");
        dispatch(login({ user, token }));
        navigate("/");
      } else {
        toast.error("Invalid credentials");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error on Login", error);
      toast.error(getErrorMessage(error));
    }
  };

  const handleAdminLogin = () => {
    setEmail("demoadmin@gmail.com");
    setPassword("123456789");
    toast.info("Admin credentials autofilled");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full  bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Log In
          </button>

          <div className="flex items-center justify-between mt-3">
            <button
              type="button"
              onClick={handleAdminLogin}
              className="text-sm bg-gray-100 border hover:bg-gray-200 px-4 py-2 rounded-lg font-medium text-gray-700 transition duration-200"
            >
              Login as Admin Demo
            </button>

            <button
              type="button"
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-200 transition "
              title="For demo purposes, click 'Login as Admin' to auto-fill credentials."
            >
              <AiOutlineInfoCircle className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:opacity-80"
            >
              Sign up here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

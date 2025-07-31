import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosinstance";
import { register } from "../../redux/authSlice";
import getErrorMessage from "../../components/common/getErrorMessage";

const Signup = () => {
  // State variables to store email and password
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
        address,
      });

      const data = res.data?.data;
      console.log(data);

      if (data?.user && data?.token) {
        dispatch(register(data));
        toast.success("Registered successfully!");
        navigate("/");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.log("Error on Register", error);
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="text"
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Address
              </label>
              <input
                type="text"
                id="text"
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

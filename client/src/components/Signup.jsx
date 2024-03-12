import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {register } from '../redux/authSlice';

const Signup = () => {
  // State variables to store email and password
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const res = await fetch("http://localhost:3000/auth/register",{
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({username, email,password, address})
    })

    const data = await res.json()
    console.log(data)
    dispatch(register(data)) // user: , token
    navigate("/")

   } catch (error) {
    console.log("Error on Login", error)
   }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" >
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
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
  );
};

export default Signup;

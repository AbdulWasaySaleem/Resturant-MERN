import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../redux/authSlice';

const Login = () => {
  // State variables to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
    const res = await fetch("http://localhost:3000/auth/login",{
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({email,password})
    })

    const data = await res.json()
    console.log(data)
    dispatch(login(data)) // user: , token
    navigate("/")

   } catch (error) {
    console.log("Error on Login", error)
   }
  };

  const handlesubmitoflog = ()=>{
    
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

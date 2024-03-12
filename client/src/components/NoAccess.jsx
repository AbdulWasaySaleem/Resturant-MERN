import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const NoAccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3); // Countdown time in seconds

  useEffect(() => {
    const timer =
      countdown > 0 &&
      setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/'); // Redirect to home page
    }
  }, [countdown, history]);

  return (
    <div className="container mx-auto mt-8 text-center">
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
      <p className="text-gray-600 mb-4">
        Sorry, you can't access this route.
      </p>
      <p className="text-gray-600">
        Returning to the home page in {countdown}...
      </p>
    </div>
  </div>
  );
};

export default NoAccess;

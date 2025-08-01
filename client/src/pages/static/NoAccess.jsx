import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdLockOutline } from "react-icons/md";

const NoAccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

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
      navigate("/");
    }
  }, [countdown]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">
        <div className="flex justify-center">
          <MdLockOutline className="text-purple-600 text-5xl" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Access Denied</h2>
        <p className="text-gray-600">
          Sorry, you don't have permission to view this page.
        </p>
        <p className="text-sm text-gray-500">
          Redirecting to the home page in{" "}
          <span className="font-semibold text-purple-600">{countdown}</span>{" "}
          second{countdown !== 1 ? "s" : ""}...
        </p>
      </div>
    </div>
  );
};

export default NoAccess;

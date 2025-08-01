import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 text-center">
      <HiOutlineExclamationCircle className="text-6xl text-purple-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

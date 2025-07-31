// src/components/admin/UserCard.jsx
import React from "react";

const User = ({ user, index, onToggleAdmin }) => {
  return (
    <div
      className={`bg-white/70 backdrop-blur-md shadow-md rounded-lg p-4 ${
        user.isAdmin ? "border border-indigo-600" : ""
      }`}
    >
      <h2 className="text-xl font-semibold text-indigo-900 mb-1">
        {index + 1}. {user.username}
      </h2>
      <p className="text-sm text-gray-700 truncate">{user.email}</p>
      <p className="text-sm text-gray-600 truncate">
        Address: {user.address}
      </p>
      <div className="mt-4 text-center">
        <button
          onClick={() => onToggleAdmin(user._id)}
          className={`w-full py-2 rounded-lg font-semibold text-white transition ${
            user.isAdmin
              ? "bg-red-500 hover:bg-red-600"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {user.isAdmin ? "Revoke Admin" : "Make Admin"}
        </button>
      </div>
    </div>
  );
};

export default User;

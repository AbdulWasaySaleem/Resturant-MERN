// src/components/admin/ProductCard.jsx
import React from "react";

const Product = ({ product, onDelete, onEdit }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md rounded-lg overflow-hidden shadow-md">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-indigo-800 mb-2 truncate">
          {product.title}
        </h2>
        <p className="text-gray-700 text-sm truncate">{product.description}</p>
        <p className="mt-2 text-indigo-600 font-semibold">${product.price}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onEdit(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(product._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

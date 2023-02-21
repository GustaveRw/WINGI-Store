import React from "react";
import { Link } from "react-router-dom";

function ProductDetails({ product }) {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:w-1/2 px-4">
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        <div className="md:w-1/2 px-4">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          <p className="mt-4 text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-500">{product.category}</p>
          <p className="mt-4 text-gray-800">{product.description}</p>
          <Link to="/" className="mt-8 bg-gray-800 text-white py-2 px-4 rounded-md">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

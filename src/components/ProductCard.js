import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-lg font-medium">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <p className="text-gray-500">{product.category}</p>
      </div>
    </div>
  );
}

export default ProductCard;

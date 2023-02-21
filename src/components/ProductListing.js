import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
  const [category, setCategory] = useState('');

  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl font-semibold">All Products</h2>
        <div className="relative">
          <select
            className="appearance-none border border-gray-400 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={category}
            onChange={handleCategoryChange}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L3.414 11H16a1 1 0 1 0 0-2H3.414l2.293-2.293a1 1 0 0 0 0-1.414z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

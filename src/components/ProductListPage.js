import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../mockdata/products';

const ProductListPage = () => {
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase()) &&
    (filterCategory === '' || product.category === filterCategory)
  );

  const handleSearch = event => {
    setSearchText(event.target.value);
  };

  const handleFilter = event => {
    setFilterCategory(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearch}
            className="rounded-lg px-4 py-2 mr-4"
          />
          <select
            value={filterCategory}
            onChange={handleFilter}
            className="rounded-lg px-4 py-2 bg-gray-100 text-gray-600"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;

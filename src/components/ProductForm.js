import React, { useState } from "react";

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: product ? product.name : "",
    description: product ? product.description : "",
    category: product ? product.category : "",
    price: product ? product.price : "",
    image: product ? product.image : "",
    inventory: product ? product.inventory : "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Product Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category">Product Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Product Image</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="inventory">Product Inventory</label>
        <input
          type="number"
          name="inventory"
          value={formData.inventory}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;

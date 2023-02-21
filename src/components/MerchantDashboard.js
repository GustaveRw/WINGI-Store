import React, { useState } from "react";

function MerchantDashboard() {
  // Create a state variable called 'products' that holds an empty array as its initial value
  const [products] = useState([]);

  // Create a state variable called 'showAddProductModal' that holds 'false' as its initial value
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  // Create a function called 'toggleAddProductModal' that toggles the value of 'showAddProductModal'
  const toggleAddProductModal = () => {
    setShowAddProductModal(!showAddProductModal);
  };

  return (
    <div>
      <h2>My Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the merchant's products and display each one */}
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.inventory}</td>
              <td>
                <button>Edit</button>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={toggleAddProductModal}>Add Product</button>

      {/* Render the modal if 'showAddProductModal' is true */}
      {showAddProductModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Product</h3>
            <form>
              <label>
                Name:
                <input type="text" />
              </label>
              <label>
                Category:
                <input type="text" />
              </label>
              <label>
                Price:
                <input type="number" />
              </label>
              <label>
                Inventory:
                <input type="number" />
              </label>
              <button>Add Product</button>
              <button onClick={toggleAddProductModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MerchantDashboard;

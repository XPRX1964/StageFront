import React, { useEffect, useState } from "react";
import axiosInstance from "../../Login/axiosInstance";
import AddProductForm from "./AddProductForm";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        console.log("Fetched Products:", response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axiosInstance.post("/products", newProduct);
      console.log("Product successfully added");
      setProducts([...products, response.data.data]);
      setShowForm(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axiosInstance.delete(`/products/${_id}`);
      console.log("Successfully deleted");
      setProducts(products.filter((product) => product._id !== _id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Manage Products</h2>
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </div>
      {showForm && <AddProductForm onAddProduct={handleAddProduct} />}
      <table className="min-w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Image</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Quantity</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {products.map((product) => (
            <tr
              key={product._id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="py-3 px-6 text-left">{product.name}</td>
              <td className="py-3 px-6 text-left">$ {product.price}</td>
              <td className="py-3 px-6 text-left">{product.description}</td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleEdit(product)}
                  className="text-blue-500 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

import React, { useState } from "react";
const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",

    description: "",
    images: [],
    currentImage: "",
    category: "6702758359fbdcd7f181c9c0", // Default category ID
    provider: "670275bf93fc86533823d340", // Default provider ID
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, currentImage: e.target.value });
  };

  const handleAddImage = () => {
    if (product.currentImage) {
      setProduct({
        ...product,
        images: [...product.images, product.currentImage],
        currentImage: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      name: "",
      price: "",

      description: "",
      images: [],
      currentImage: "",
      category: "6702758359fbdcd7f181c9c0", // Reset to default
      provider: "670275bf93fc86533823d340", // Reset to default
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-4 border border-gray-300 rounded"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={product.name}
        onChange={handleChange}
        required
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="number"
        name="description"
        placeholder="Quantity"
        value={product.description}
        onChange={handleChange}
        required
        className="border p-2 rounded mb-2 w-full"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
        className="border p-2 rounded mb-2 w-full"
      />

      <div className="mb-2">
        <input
          type="text"
          name="currentImage"
          placeholder="Image URL"
          value={product.currentImage}
          onChange={handleImageChange}
          className="border p-2 rounded w-full"
        />
        <button
          type="button"
          onClick={handleAddImage}
          className="bg-blue-500 text-white py-1 px-2 rounded mt-2"
        >
          Add Image
        </button>
      </div>
      <div className="mb-2">
        <h4 className="text-md">Added Images:</h4>
        <ul>
          {product.images.map((img, index) => (
            <li key={index} className="flex items-center mb-1">
              <img
                src={img}
                alt={`Product image ${index + 1}`}
                className="h-10 w-10 object-cover mr-2"
              />
              <span>{img}</span>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="hidden"
        name="category"
        value={product.category}
        onChange={handleChange} // This could be omitted since it's a hidden input
      />
      <input
        type="hidden"
        name="provider"
        value={product.provider}
        onChange={handleChange} // This could be omitted since it's a hidden input
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;

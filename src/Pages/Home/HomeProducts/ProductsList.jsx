import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductGridCard from "./ProductGridCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/products"
        );
        const uniqueProducts = Array.from(
          new Set(response.data.data.map((product) => product._id))
        ).map((_id) =>
          response.data.data.find((product) => product._id === _id)
        );

        console.log(response.data.data); // Debug log
        setProducts(uniqueProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 mt-10">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 laptopl:grid-cols-4 gap-4 place-items-center">
          {products.map((product, index) => (
            <ProductGridCard
              key={product._id || index}
              imgsrc={product.images}
              productname={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <p>No products available.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsList;

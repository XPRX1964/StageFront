import React, { useState } from "react";
import Buypopup from "./ProductsImages/Buypopup";
import ProductCard from "../../../Components/ProductCard/ProductCard";

function ProductGridCard({ imgsrc, productname, price }) {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="px-3 h-[497px] w-[300px] laptop:max-w-full group relative mt-[60px] mx-2">
        <div className="product-image-container relative w-full h-[400px]">
          <button className="w-full" onClick={handlePopupToggle}>
            <img
              src={imgsrc}
              alt="Product Image 1"
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            />
            <img
              src={imgsrc}
              alt="Product Image 2"
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
            />
          </button>
          <Buypopup imgsrc={imgsrc} productname={productname} price={price} />
        </div>

        <div className="mt-[20px]">
          <div className="name font-poppins text-base text-center">
            <button
              className="transition-colors hover:text-red-500"
              onClick={handlePopupToggle}
            >
              {productname}
            </button>
          </div>
          <div className="price text-center font-semibold">$ {price}</div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="relative bg-white p-6 rounded-lg transform transition-transform duration-300 ease-in-out scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 bg-red-500 text-white z-50 px-2 py-1 rounded"
              onClick={handlePopupToggle}
            >
              X
            </button>
            <ProductCard
              imgsrc={imgsrc}
              productname={productname}
              price={price}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductGridCard;

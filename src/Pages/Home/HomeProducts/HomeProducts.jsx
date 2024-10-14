import React from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";

function HomeProducts() {
  return (
    <div className="flex flex-col items-center w-screen">
      <ProductsHeader />
      <ProductsList cardwidth="300px" />
    </div>
  );
}

export default HomeProducts;

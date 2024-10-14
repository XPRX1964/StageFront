import React from "react";
import HomeProducts from "../Home/HomeProducts/HomeProducts";
import ProductsList from "../Home/HomeProducts/ProductsList";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div>
      <div className="py-[35px] flex justify-center gap-2 bg-[#f7f7f7] w-full text-center font-poppins font-[15px] ">
        <div className="hover:scale-110 transition-all cursor-pointer text-gray-500">
          <span className="text-gray-500  ">
            {" "}
            <Link to="/"> HOME </Link>{" "}
          </span>
        </div>
        <span>/ SHOP</span>
      </div>
      <div className="pt-[55px] flex tablet:pt-[95px] pb-[45px] tablet:pb-[100px] w-full">
        <div className="hidden laptop:flex-col laptop:flex px-3 w-[25%]">
          <div className="search flex flex-col w-full pb-2">
            <div className="font-poppins text-[#333] text-start">Search</div>
            <SearchBar />
          </div>
          <div className="filter flex flex-col pt-6  flex-1">
            <div className="categories flex flex-col w-full gap-3">
              <div className="font-poppins text-[#333] text-start">
                Categories
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">All Categories</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Fashion</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Men</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Women</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Electronics</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Furniture</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Plant</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Organic Food</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Floer</label>
                </div>
                <div className="flex items-center font-poppins text-sm">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="mr-2 size-4"
                  />
                  <label htmlFor="myCheckbox">Book</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-3">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default Shop;

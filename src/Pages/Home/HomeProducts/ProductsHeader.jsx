import React from "react";

function ProductsHeader() {
  return (
    <div className="container flex flex-col justify-center w-full mb-[-80px] ">
      <div className="w-full tablet:h-[36px] text-[30px] font-poppins text-center font-semibold mb-3 relative flex justify-center  ">
        DAILY DEALS!
        <div className="absolute bottom-[-5px] left-0 right-0 border-b-2 border-black"></div>
      </div>
      <div className="options flex flex-col gap-2 tablet:gap-0 m:flex-row m:flex-wrap tablet:flex-row justify-center items-center pt-[10px] pb-[30px] tablet:pt-[30px] tablet:pb-[55px] ">
        <div className="font-poppins text-[18px] font-medium text-center mx-[11px] py-2 px-4 text-[#555] s:w-full tablet:w-auto relative hover:scale-125  hover:text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          New Arrivals
        </div>
        <div className="font-poppins text-[18px] font-medium text-center mx-[11px] py-2 px-4 text-[#555] s:w-full tablet:w-auto relative hover:scale-125  hover:text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          Best Sellers
        </div>
        <div className="font-poppins text-[18px] font-medium text-center mx-[11px] py-2 px-4 text-[#555] s:w-full tablet:w-auto relative hover:scale-125  hover:text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          Sale Items
        </div>
      </div>
    </div>
  );
}

export default ProductsHeader;

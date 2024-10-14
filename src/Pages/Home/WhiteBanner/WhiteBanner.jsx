import React from "react";
import FreeShipping from "./FreeShipping";
import Support from "./Support";
import MoneyReturn from "./MoneyReturn";
import Discount from "./Discount";
function WhiteBanner() {
  return (
    <div className="w-full tablet:pt-[100px] tablet:pb-[60px] pt-[60px] pb-[20px] bg-white grid grid-cols-1 tablet:grid-cols-2 tablet:grid-rows-2 laptop:grid-cols-4 laptop:grid-rows-1 place-items-center">
      {/* First block */}
      <div className="px-3 flex gap-4 items-center">
        <div className="flex hover:animate-tada items-center justify-center h-20 w-20 tablet:h-24 tablet:w-24 laptop:h-28 laptop:w-28">
          <FreeShipping className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-poppins text-[18px] text-start">
            Free Shipping
          </div>
          <div className="font-poppins text-[14px] text-[#666]">
            Free shipping on all orders
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className="px-3 flex gap-4 items-center">
        <div className="flex items-center justify-center hover:animate-tada h-20 w-20 tablet:h-24 tablet:w-24 laptop:h-28 laptop:w-28">
          <Support className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-poppins text-[18px] text-start">
            Support 24h/7
          </div>
          <div className="font-poppins text-[14px] text-[#666]">
            Free shipping on all orders
          </div>
        </div>
      </div>

      {/* Third block */}
      <div className="px-3 flex gap-4 items-center">
        <div className="flex hover:animate-tada items-center justify-center h-20 w-20 tablet:h-24 tablet:w-24 laptop:h-28 laptop:w-28">
          <MoneyReturn className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-poppins text-[18px] text-start">
            Money Return
          </div>
          <div className="font-poppins text-[14px] text-[#666]">
            Free shipping on all orders
          </div>
        </div>
      </div>

      {/* Fourth block */}
      <div className="px-3 flex gap-4 items-center">
        <div className="flex hover:animate-tada items-center justify-center h-20 w-20 tablet:h-24 tablet:w-24 laptop:h-28 laptop:w-28">
          <Discount className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-poppins text-[18px] text-start">
            Free Shipping
          </div>
          <div className="font-poppins text-[14px] text-[#666]">
            Free shipping on all orders
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhiteBanner;

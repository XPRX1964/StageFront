import React, { useEffect, useState } from "react";
import BannerWoman from "./BannerWoman.png";

function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This delay ensures that the content will not be visible until the animation starts.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 160); // Small delay to ensure content doesn't flash

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div className="bg-red-100 w-full h-auto tablet:h-[450px] laptop:h-[520px] laptopl:h-[750px] flex items-end justify-center">
      <div className="tablet:flex tablet:flex-row flex flex-col w-full">
        <div
          className={`flex flex-col justify-center w-full items-center tablet:items-start tablet:ml-32 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-2xl font-medium leading-[30px] animate-fadeinright text-center font-poppins w-full tablet:text-start">
            Smart Products
          </div>

          <div className="laptopl:text-[72px] laptop:text-[52px] tablet:text-[40px] text-[33px] font-normal font-poppins pb-5 w-full tablet:text-start text-center animate-fadeinright">
            <span className="hidden tablet:inline">
              Winter Offer <br /> 2024 Collection
            </span>
            <span className="inline tablet:hidden">
              Winter Offer 2024 <br /> Collection
            </span>
          </div>

          <div className="pt-5 flex justify-center tablet:justify-start animate-fadeinright">
            <button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-red-100 hover:bg-red-100 border border-black group px-[35px] py-[15px]">
              <span className="w-56 h-48 rounded bg-red-600 absolute bottom-0 left-0 translate-x-full ease-out duration-[700ms] transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black font-poppins transition-colors duration-300 ease-in-out group-hover:text-white">
                SHOP NOW
              </span>
            </button>
          </div>
        </div>

        <div
          className={`w-full h-[450px] tablet:h-[450px] laptop:h-[520px] laptopl:h-[750px] overflow-hidden relative tablet:pt-0 pt-5 transition-opacity duration-700  ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={BannerWoman}
            alt="Banner Woman"
            className="object-contain absolute bottom-0 max-h-[95%] w-full animate-fadeinup"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

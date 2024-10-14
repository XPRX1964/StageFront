import React from "react";
import Banner from "./Banner/Banner";
import WhiteBanner from "./WhiteBanner/WhiteBanner";
import HomeProducts from "./HomeProducts/HomeProducts";
function Home() {
  return (
    <>
      <div className="w-full">
        <Banner />
        <WhiteBanner />
        <HomeProducts />
      </div>
    </>
  );
}

export default Home;

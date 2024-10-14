import React from "react";
import logo from "../logo.png";

function Logo() {
  return (
    <div className="flex items-satrt justify-start tablet:items-center mx-0 tablet:m-2 tablet:justify-center">
      <a href="# ">
        <img src={logo} alt="" className="w-full h-auto" />
      </a>
    </div>
  );
}

export default Logo;

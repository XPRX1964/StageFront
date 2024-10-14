import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="tablet:items-center tablet:justify-center w-full hidden tablet:flex ">
    <ul className="tablet:flex hidden justify-between gap-10">
      <button>
        <div className="relative hover:scale-125 font-poppins text-black cursor-pointer transition-all ease-in-out">
          <Link to="/">Home</Link>
        </div>
      </button>
      <button>
        <div className="relative hover:scale-125 font-poppins text-black cursor-pointer transition-all ease-in-out">
          <Link to="shop">Shop</Link>
        </div>
      </button>
      <button>
        <div className="relative hover:scale-125 font-poppins text-black cursor-pointer transition-all ease-in-out">
          <Link to="contactus">Contact Us</Link>
        </div>
      </button>
    </ul>
  </div>
);

export default Navigation;

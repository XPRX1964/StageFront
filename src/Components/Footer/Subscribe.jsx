import React from "react";

function Subscribe() {
  return (
    <div className="lg:px-3 flex font-poppins flex-col ">
      <div className="text-black font-bold text-lg">SUBSCRIBE</div>
      <div>
        Get E-mail updates about our latest shop <br></br>and special offers.
      </div>
      <div>
        <input
          type="mail"
          className="bg-orange-50 focus:outline-none"
          placeholder="Enter your email ..."
        />
      </div>
      <div>
        <button className="relative hover:scale-125 font-poppins text-black  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] bg-orange-50">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default Subscribe;

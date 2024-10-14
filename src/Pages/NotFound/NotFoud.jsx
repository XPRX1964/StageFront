import React from "react";

function NotFoud() {
  return (
    <>
      <div className="flex max-w-full max-h-full justify-center items-center py-14">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div>
            <span className="text-9xl text-[#c60f01] text-center font-poppins font-semibold">
              404
            </span>{" "}
          </div>

          <div>
            {" "}
            <span className="text-6xl text-[#c60f01] text-center font-poppins font-semibold">
              {" "}
              Not Found{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoud;

import React from "react";
import Arrow from "./Arrow";

function EditAccount({ openSection, setOpenSection }) {
  const toggleSection = () => {
    // If it's already open, close it. Otherwise, open it.
    setOpenSection(openSection === 1 ? null : 1);
  };

  return (
    <div className="laptopl:mx-[150px] px-3 laptop:mx-[120px] mx-0 w-[296px] m:w-[351.2px] l:w-[401.6px] tablet:w-[696px] laptopl:w-[876px]">
      <div className="w-full p-4">
        <div className="border-[0.8px] border-gray-300 py-2 bg-[#f7f7f7]">
          <button
            className="w-full text-left font-bold text-lg text-gray-800 py-4 items-center felx tablet:px-[35px] pl-[40px] pr-[30px] bg-[#f7f7f7]"
            onClick={toggleSection}
          >
            <div className="flex items-center gap-4 group">
              <div
                className={`font-medium text-[15px] leading-9 group-hover:text-red-600 transition-colors ${
                  openSection === 1 ? "text-red-600" : "text-black"
                }`}
              >
                1.
              </div>
              <div
                className={`flex-1 font-medium text-[15px] leading-9 group-hover:text-red-600 transition-colors ${
                  openSection === 1 ? "text-red-600" : "text-black"
                }`}
              >
                EDIT YOUR ACCOUNT INFORMATION
              </div>
              <div>
                <Arrow isActive={openSection === 1} />
              </div>
            </div>
          </button>
        </div>
        {openSection === 1 && (
          <div className="mb-4 p-4 border-gray-300 border-[0.8px] ">
            <form className="font-poppins">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 p-2 w-1/2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 p-2 w-1/2"
                />
              </div>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mt-4">
                <input
                  type="tel"
                  placeholder="Telephone"
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button className="mt-3 btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-white hover:bg-white border border-black group px-[25px] py-[7.5px]">
                  <span className="w-56 h-48 rounded bg-red-600 absolute bottom-0 left-0 translate-x-full ease-out duration-[700ms] transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-black font-poppins transition-colors duration-300 ease-in-out group-hover:text-white">
                    Continue
                  </span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditAccount;

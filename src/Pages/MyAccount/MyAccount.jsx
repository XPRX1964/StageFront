import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditAccount from "./EditAccount";
import ChangePassword from "./ChangePassword";
import axios from "axios";

function MyAccount() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/logout",
        {}
      );
      console.log(response.data);
      // Clear any user authentication data (local storage, context, etc.)
      localStorage.removeItem("user"); // Example of removing user data from local storage
      // Redirect to home or login page
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div>
      <div className="py-[35px] flex justify-center gap-2 bg-[#f7f7f7] w-full text-center font-poppins font-[15px] ">
        <div className="hover:scale-110 transition-all cursor-pointer text-gray-500">
          <span className="text-gray-500">
            <Link to="/"> HOME </Link>
          </span>
        </div>
        <span>/ My Account</span>
      </div>
      <div className="pt-[60px] pb-[40px] tablet:pt-[100px] tablet:pb-[80px] flex justify-center font-poppins flex-col items-center">
        {/* Pass the openSection and setOpenSection as props */}
        <EditAccount
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
        <ChangePassword
          openSection={openSection}
          setOpenSection={setOpenSection}
        />
      </div>
      <div className="flex justify-end">
        <div className=" p-4 ">
          <button
            type="submit"
            className="bg-[#f2f2f2] py-[11px] px-[30px] group hover:bg-red-600 transition-colors duration-300"
            onClick={handleLogout}
          >
            <span className="text-[14px] font-medium ease-in-out duration-700 group-hover:text-white">
              LOG OUT
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;

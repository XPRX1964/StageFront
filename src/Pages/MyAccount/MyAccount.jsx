import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditAccount from "./EditAccount";
import ChangePassword from "./ChangePassword";
import axios from "axios";
function MyAccount() {
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    navigate("/");
  };

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }

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

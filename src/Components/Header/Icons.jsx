import React, { useEffect, useRef, useState } from "react";
import ProfileIcon from "./SideBar/ProfileIcon";
import HeartIcon2 from "./HeartIcon2";
import ShopingCart from "./ShopingCart";
import Search from "./Search";
import { Link } from "react-router-dom";

const Icons = ({
  toggleSearch,
  toggleProfile,
  isSearchOpen,
  isProfileOpen,
  isAuthenticated, // New prop
}) => {
  const [searchHeight, setSearchHeight] = useState(0);
  const [profileHeight, setProfileHeight] = useState(0);

  const searchRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    setSearchHeight(isSearchOpen ? searchRef.current.scrollHeight : 0);
  }, [isSearchOpen]);

  useEffect(() => {
    setProfileHeight(isProfileOpen ? profileRef.current.scrollHeight : 0);
  }, [isProfileOpen]);

  return (
    <div className="pl-3 items-center gap-5 justify-between hidden lg:flex">
      <div>
        <button onClick={toggleSearch} className="group">
          <Search color="group-hover:text-red-600 text-black" size="24px" />
        </button>
      </div>
      <div>
        <button onClick={toggleProfile} className="group">
          <ProfileIcon color="group-hover:text-red-600 text-black" />
        </button>
      </div>
      <div>
        <button className="group">
          <Link to="/favorites">
            <HeartIcon2 color="text-black group-hover:text-red-600" />
          </Link>
        </button>
      </div>
      <div>
        <button className="group">
          <Link to="/cart">
            <ShopingCart color="group-hover:text-red-600 text-black" />
          </Link>
        </button>
      </div>

      <div
        ref={searchRef}
        style={{
          height: `${searchHeight}px`,
          overflow: "hidden",
          transition: "height 0.5s ease",
        }}
        className="fixed top-[89px] right-[10%] rounded w-[30%] z-40 bg-white shadow-md laptop:flex justify-center hidden"
      >
        <div className="flex-1 flex p-3 h-20">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-l pl-3 border-gray-300 py-2 focus:outline-none w-full"
          />
          <button className="w-[30%] rounded-r bg-red-600 flex justify-center items-center">
            <Search color="white" size="28px" />
          </button>
        </div>
      </div>

      {/* Profile Dropdown */}
      <div
        ref={profileRef}
        style={{
          height: `${profileHeight}px`,
          overflow: "hidden",
          transition: "height 0.5s ease",
        }}
        className="fixed top-[89px] right-[9.7%] rounded w-[8%] z-40 bg-white shadow-md laptop:flex justify-center hidden"
      >
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col items-start py-1 justify-between font-poppins text-[13px]">
            {/* Conditionally render links based on authentication status */}
            {!isAuthenticated ? (
              <>
                <button>
                  <div className="hover:text-red-500 transition-colors">
                    <Link to="/login">Login</Link>
                  </div>
                </button>
                <button>
                  <div className="hover:text-red-500 transition-colors">
                    <Link to="/register">Register</Link>
                  </div>
                </button>
              </>
            ) : null}
            <button>
              <div className="hover:text-red-500 transition-colors">
                <Link to="/myaccount">My Account</Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;

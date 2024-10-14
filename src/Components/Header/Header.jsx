import React, { useState } from "react";
import logo from "../logo.png";
import Navigation from "./Navigation";
import Icons from "./Icons";
import SideBar from "./SideBar/SideBar";
import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import { Link } from "react-router-dom";
function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isProfileOpen) setIsProfileOpen(false);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  return (
    <>
      <div className="bg-white fixed top-0 left-0 z-50 w-full h-[89px] lg:px-20 flex lg:gap-3 justify-between shadow-md">
        <div className="px-3 overflow-hidden flex justify-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="size-24 max-w-max" />
          </Link>
        </div>
        {!isSidebarOpen && (
          <>
            <Navigation />
            <Icons
              toggleSearch={toggleSearch}
              toggleProfile={toggleProfile}
              isSearchOpen={isSearchOpen}
              isProfileOpen={isProfileOpen}
            />
          </>
        )}
        <div
          className={`flex items-center justify-center pr-2 laptop:hidden ${
            isSidebarOpen ? "hidden" : ""
          }`}
        >
          <button onClick={toggleSidebar}>
            <Menu />
          </button>
        </div>
      </div>

      {/* SideBar with AnimatePresence */}
      <AnimatePresence>
        {isSidebarOpen && (
          <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

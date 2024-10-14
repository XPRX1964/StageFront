import React from "react";
import CloseTag from "./CloseTag";
import { motion } from "framer-motion";
import Search from "../Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeLogo from "./HomeLogo";
import ShopLogo from "./ShopLogo";
import ContactUsLogo from "./ContactUsLogo";
import PhoneLogo from "./PhoneLogo";
import MailLogo from "./MailLogo";
import TwitterLogo from "./TwitterLogo";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import Youtube from "./Youtube";
import ShopingCart from "../ShopingCart";
import HeartIcon from "../HeartIcon";
import ProfileIcon from "./ProfileIcon";

function SideBar({ isOpen, toggleSidebar }) {
  // Animation variants
  const sidebarVariants = {
    hidden: { x: "100%" }, // start off-screen to the right
    visible: { x: 0 }, // slide to position
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay of 500ms before changing opacity to 1

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);
  return (
    <>
      {isOpen && (
        <div
          onClick={toggleSidebar} // Close sidebar when clicking on the overlay
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 "
        />
      )}
      {isOpen && (
        <motion.div
          className="fixed right-0 w-100% laptop:hidden z-[50] h-full flex top-0"
          initial="hidden" // Initial state before animation
          animate="visible" // Animate to this state
          exit="hidden" // Animate to this state when exiting
          variants={sidebarVariants} // Use the defined variants
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Adjust the animation curve
        >
          <div className="flex w-[89px] h-[96px] items-center justify-end pr-2">
            <div className="rounded-full hover:animate-jiggle h-fit flex justify-center bg-[#343538] right-2 ">
              <button onClick={toggleSidebar} className="">
                <CloseTag color="white" />
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col bg-white flex-1 w-10/12">
            <div className="searchbar  bg-[#e6e6e6] h-[89px] w-full flex items-center justify-between">
              <input
                type="text"
                className="bg-[#e6e6e6] px-[15px] py-[5px] font-poppins focus:outline-none focus:ring-0"
                placeholder="Search..."
              />
              <button className="pr-4">
                <div>
                  <Search color="#aaa" />
                </div>
              </button>
            </div>
            <div className="flex flex-col  flex-1">
              <div
                className={`Linkscontainter flex flex-col justify-start flex-1 items-start gap-6 p-4 transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {" "}
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="font-poppins flex justify-center animate-slideinright duration-500 ">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <Link to="/">
                        <div className="flex gap-2 items-center">
                          <div className="pb-1">
                            <HomeLogo />
                          </div>
                          <div className="align-bottom">Home</div>
                        </div>
                      </Link>
                    </button>
                  </div>
                  <div className="font-poppins flex justify-center animate-slideinright duration-500">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <Link to="/shop">
                        <div className="flex gap-2 items-center">
                          <div className="pb-1">
                            <ShopLogo />
                          </div>
                          <div className="align-bottom">Shop</div>
                        </div>
                      </Link>
                    </button>
                  </div>
                  <div className="font-poppins flex justify-center animate-slideinright duration-500">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <Link to="/register">
                        <div className="flex gap-2 items-center">
                          <div className="pb-1">
                            <ProfileIcon color="black" fill="white" />
                          </div>
                          <div className="align-bottom">Register / Login</div>
                        </div>
                      </Link>
                    </button>
                  </div>
                  <div className="font-poppins flex justify-center animate-slideinright duration-500">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <Link to="/contactus">
                        <div className="flex gap-2 items-center">
                          <div className="pb-1">
                            <ContactUsLogo />
                          </div>
                          <div className="align-bottom">Contact Us</div>
                        </div>
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="felx flex-col font-poppins items-center justify-start py-6 gap-6 w-full">
                  <div>
                    <label
                      htmlFor="currency"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Select Currency
                    </label>
                    <select
                      name="currency"
                      id="currency"
                      className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-0"
                    >
                      <option value="eur">EUR</option>
                      <option value="usd">USD</option>
                      <option value="gbp">GBP</option>
                    </select>
                  </div>
                  <div className="pt-6">
                    <label
                      htmlFor="language"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Choose Language
                    </label>
                    <select
                      name="language"
                      id="language"
                      className="border border-gray-300 rounded-md p-2 w-full  focus:outline-none focus:ring-0"
                    >
                      <option value="english">English</option>
                      <option value="french">French</option>
                      <option value="turkish">Turkish</option>
                    </select>
                  </div>
                </div>
                <div className="iconslist font-poppins flex flex-col gap-1">
                  <div className="animate-slideinright">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <div className="flex items-center gap-2">
                        <div>
                          <HeartIcon color="black" fill="white" />{" "}
                        </div>
                        <div>
                          <Link to="/favorites">
                            <span>Whish List</span>
                          </Link>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="animate-slideinright">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <div className="flex items-center gap-2">
                        <div>
                          <ShopingCart color="text-black" />{" "}
                        </div>
                        <div>
                          <Link to="/cart">
                            <span>Shopping Cart</span>
                          </Link>
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="animate-slideinright">
                    <button className="relative hover:scale-110 font-poppins text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-black before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-black after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                      <div className="flex items-center gap-2">
                        <div>
                          <ProfileIcon color="black" fill="white" />{" "}
                        </div>
                        <div>
                          <button>
                            <Link to="/myaccount">
                              <span>Profile</span>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="sidebarfooter bg-white flex flex-col items-center p-2 font-poppins justify-between gap-6">
                <div className="flex flex-col gap-3 items-start w-full">
                  <div className="flex gap-2 group items-center hover:text-red-600 transition duration-300 hover:cursor-pointer">
                    <div className="group-hover:text-red-600 transition ">
                      <PhoneLogo />
                    </div>
                    <span className="text-xs">0850 222 5 288 (ATU)</span>
                  </div>
                  <div className="flex gap-2 group hover:text-red-600 transition duration-300 hover:cursor-pointer">
                    <div className="group-hover:text-red-600 transition">
                      <MailLogo />
                    </div>
                    <span className="text-sm">customer@atu.com.tr</span>
                  </div>
                </div>

                <div className="socials flex justify-between w-full px-4 pb-2 items-center h-5">
                  <div className="size-[18px] hover:scale-110 transition">
                    <button>
                      <TwitterLogo />
                    </button>
                  </div>
                  <div className="size-[18px] hover:scale-110 transition">
                    <button>
                      <Instagram />
                    </button>
                  </div>
                  <div className="size-[18px] hover:scale-110 transition">
                    <button>
                      <Facebook />
                    </button>
                  </div>
                  <div className="size-[18px] hover:scale-110 transition">
                    <button>
                      <Youtube />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default SideBar;

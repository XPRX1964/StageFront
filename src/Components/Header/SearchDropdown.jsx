import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";

const SearchDropdown = ({ isSearchOpen, toggleSearch }) => {
  const [searchHeight, setSearchHeight] = useState(0); // State for search height
  const searchRef = useRef(null); // Ref to get the full height of the search container

  useEffect(() => {
    if (isSearchOpen) {
      // Get the full height of the search div
      const fullHeight = searchRef.current.scrollHeight;
      setSearchHeight(fullHeight);
    } else {
      setSearchHeight(0); // Set height to 0 when closed
    }
  }, [isSearchOpen]);

  return (
    <div
      ref={searchRef}
      style={{
        height: `${searchHeight}px`, // Dynamic height
        overflow: "hidden",
        transition: "height 0.5s ease", // Smooth transition
      }}
      className="fixed top-[89px] right-[10%] rounded w-[30%] z-40 bg-white shadow-md laptop:flex justify-center hidden"
    >
      <div className="flex-1 flex p-3 h-20">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-l pl-3 border-gray-300 py-2 focus:outline-none w-full h-10"
        />
        <button className="w-[30%] rounded-r bg-red-600 flex justify-center items-center">
          <Search color="white" size="28px" />
        </button>
      </div>
    </div>
  );
};

export default SearchDropdown;

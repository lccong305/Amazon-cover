import React, { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { allItems } from "../../../constants";
const Search = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <div className="relative flex-grow hidden h-10 rounded-md md:flex">
        <span
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center h-full text-sm duration-300 bg-gray-200 border-2 cursor-pointer w-14 hover:bg-gray-300 text-amazon_blue font-titleFont rounded-tl-md rounded-bl-md"
        >
          All <span></span>
          <ArrowDropDownOutlinedIcon />
        </span>
        {showAll && (
          <div>
            <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
              {allItems.map((item) => (
                <li
                  className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  key={item._id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        <input
          className="flex-grow h-full px-2 text-base border-none outline-none text-amazon_blue "
          type="search"
        />
        <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
          <SearchIcon />
        </span>
      </div>
    </>
  );
};

export default Search;

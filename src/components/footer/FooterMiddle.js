import React from "react";
import { logo } from "../../assets/index";
import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";

const FooterMiddle = () => {
  return (
    <div className="w-full text-white bg-amazon_light">
      {/* ============ Top Start here ================== */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="grid w-full grid-cols-1 gap-6 p-10 md:p-0 md:items-start md:grid-cols-2 xl:grid-cols-4 md:place-items-center">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ============ Top End here ==================== */}
      {/* ============ Bottom Start here =============== */}
      <div className="flex items-center justify-center w-full gap-6 py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p className="flex items-center justify-center gap-1 px-2 py-1 duration-200 border border-gray-500 cursor-pointer hover:border-amazon_yellow">
            English
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 px-2 py-1 duration-200 border border-gray-500 cursor-pointer hover:border-amazon_yellow">
          {/* <img className="w-6" src={bdFlag} alt="flagImg" /> */}
          <p>VietNamese</p>
        </div>
      </div>
      {/* ============ Bottom End here ================= */}
    </div>
  );
};

export default FooterMiddle;

import React from "react";
import { Link } from "react-router-dom";
import LogoAmazon from "../../assets/amazon.png";
import LockIcon from "@mui/icons-material/Lock";
const HeaderCheckout = () => {
  return (
    <div className="px-5 ">
      <div className="mb-4 bg-gray-100 shadow-sm">
        <div className="w-full max-w-[1200px]  mx-auto pt-6 pb-3 flex justify-between items-center px-1">
          <Link to="/">
            <img
              src={LogoAmazon}
              alt=""
              className="object-cover w-20 h-7 md:w-28 md:h-10"
            />
          </Link>
          <span className="-mt-2 font-semibold text:2xl md:text-3xl">
            Checkout
          </span>
          <a
            target="blank"
            href="https://www.amazon.com/gp/help/customer/display.html?ie=UTF8&nodeId=201909010&ref_=ox_spc_privacy#"
          >
            <LockIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCheckout;

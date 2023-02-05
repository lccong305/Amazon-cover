import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const ref = useRef();
  const { isLoggedIn, userInfo } = useSelector((state) => state.auth);
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[39px] bg-amazon_light text-white flex items-center">
      {/* ============ ListItems Start here ============ */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="flex items-center gap-1 headerHover"
        >
          <MenuIcon />
          All
        </li>
        <li className="hidden md:headerHover md:inline-flex">Today's Deals</li>
        <li className="hidden md:headerHover md:inline-flex">
          Customer Service
        </li>
        <li className="hidden md:headerHover md:inline-flex">Gift Cards</li>
        <li className="hidden md:headerHover md:inline-flex">Registry</li>
        <li className="hidden md:headerHover md:inline-flex">Sell</li>
      </ul>
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {sidebar && (
        <div className="fixed top-0 left-0 w-full h-screen text-black bg-opacity-50 bg-amazon_blue">
          <div className="relative w-full h-full">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] md:w-[350px]  h-full bg-white border border-black"
            >
              <div className="flex items-center w-full gap-4 px-6 py-2 text-white bg-amazon_light">
                <AccountCircleIcon />
                <h3 className="text-lg font-bold tracking-wide font-titleFont">
                  Hello, {isLoggedIn ? userInfo?.clientName : "Sign In"}
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setSidebar(false)}
                className="cursor-pointer absolute top-0 left-[340px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ============ sideNav End here ================ */}
    </div>
  );
};

export default HeaderBottom;

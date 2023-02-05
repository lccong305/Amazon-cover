import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/index";
const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
      </Link>
    </>
  );
};

export default Logo;

import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/index";
const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className="headerHover">
          <img className="mt-2 w-28" src={logo} alt="logo" />
        </div>
      </Link>
    </>
  );
};

export default Logo;

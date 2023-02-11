import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const SignIn = () => {
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth);

  const href = isLoggedIn ? "#" : "/sign-in";

  return (
    <Link to={href}>
      <div className={`flex flex-col items-start justify-center headerHover`}>
        <p className="text-sm font-light whitespace-nowrap text-lightText">
          Hello, {isLoggedIn ? userInfo?.clientName : <span>sign in</span>}
        </p>
        <p className="hidden -mt-1 text-base font-semibold mdl:inline-flex text-whiteText">
          Accounts & Lists{" "}
          <span>
            <ArrowDropDownOutlinedIcon />
          </span>
        </p>
      </div>
    </Link>
  );
};

export default SignIn;

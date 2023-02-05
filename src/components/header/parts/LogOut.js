import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
const LogOut = ({ onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex-col items-start justify-center hidden lgl:flex headerHover"
      >
        <p className="text-xs font-light text-white mdl:text-sm mdl:text-lightText">
          <LogoutIcon fontSize="18" />
        </p>
        <p className="-mt-1 text-base font-semibold text-whiteText whitespace-nowrap">
          Logout
        </p>
      </div>
    </>
  );
};

export default LogOut;

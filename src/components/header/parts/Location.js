import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Location = () => {
  return (
    <>
      <div className="hidden cursor-pointer lg:items-center lg:flex headerHover">
        <LocationOnOutlinedIcon />
        <p className="flex flex-col text-xs font-light text-lightText">
          Deliver to{" "}
          <span className="-mt-1 text-base font-semibold text-whiteText">
            Vietnam
          </span>
        </p>
      </div>
    </>
  );
};

export default Location;

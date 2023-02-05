import React from "react";

const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="font-bold text-sm mb-1">
      {children}
    </label>
  );
};

export default Label;

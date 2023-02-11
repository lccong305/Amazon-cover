import React from "react";

const Label = ({ children, htmlFor, className = "" }) => {
  return (
    <label htmlFor={htmlFor} className={`mb-1 text-sm font-bold ${className}`}>
      {children}
    </label>
  );
};

export default Label;

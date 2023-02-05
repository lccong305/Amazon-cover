import React from "react";
import { Link } from "react-router-dom";

const styleDefault =
  "border-black border bg-amazon_yellow hover:bg-orange-300  p-1 rounded-sm flex justify-center items-center";
const Button = ({
  children,
  className = "",
  href,
  onSubmit = () => {},

  type = "button",
  ...rest
}) => {
  if (href) {
    return (
      <Link className={`${styleDefault} block  ${className}`} to={href}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={`${styleDefault} ${className}`}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

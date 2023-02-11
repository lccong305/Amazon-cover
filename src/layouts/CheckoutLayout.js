import React from "react";
import FooterCheckout from "./components/FooterCheckout";
import HeaderCheckout from "./components/HeaderCheckout";

const CheckoutLayout = ({ children }) => {
  return (
    <div className="">
      <HeaderCheckout />
      <div className="w-full max-w-[1200px]  mx-auto px-3"> {children}</div>
      <FooterCheckout />
    </div>
  );
};

export default CheckoutLayout;

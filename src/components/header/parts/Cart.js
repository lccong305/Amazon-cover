import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { totalItem } = useSelector((state) => state.cart);
  return (
    <>
      <Link to="/cart">
        <div className="relative flex items-start justify-center headerHover">
          <ShoppingCartIcon />
          <p className="mt-3 text-base font-semibold text-whiteText">
            Cart{" "}
            <span className="absolute text-base -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              {totalItem}
            </span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default Cart;

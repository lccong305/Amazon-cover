import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import CartItem from "../components/card/CartItem";
import { sumTotal } from "../store/slices/cart";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalItem, subTotal } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(sumTotal());
  }, [dispatch]);
  // const subTotal = items?.reduce((prevVal, currentVal) => {
  //   return (prevVal += currentVal.price * currentVal.quantity);
  // }, 0);

  console.log(subTotal);

  const handleCheckOut = () => {
    // dispatch(clearCart());
    if (!isLoggedIn) {
      navigate("/sign-in");
    } else {
      navigate("/check-out");
    }
  };

  return (
    <>
      <div
        className={`w-full p-4 font-bodyFont ${
          totalItem > 0 ? "block " : "hidden"
        }`}
      >
        <div
          className={` flex flex-col gap-y-4 xl:grid w-full xl:grid-cols-5 gap-8  `}
        >
          <div className="w-full h-full col-span-4 px-4 bg-white">
            <div className="flex font-medium items-center justify-between  border-b-[1px] py-3 border-b-gray-400">
              <h2 className="text-3xl ">Shopping Cart</h2>
              <h4 className="text-xl ">Subtotal</h4>
            </div>
            {items.length > 0 &&
              items.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-6 font-medium items-center justify-start  border-b-[1px] border-b-gray-400 p-4"
                >
                  <CartItem key={item.price} item={item} />
                </div>
              ))}
          </div>
          <div className="w-full col-span-1 p-4 bg-white rounded lg:h-56 ">
            <div className="flex gap-x-3 ">
              <span className="text-green-500">
                {" "}
                <CheckCircleOutlineIcon colors="green" />
              </span>
              <p className="mb-3">
                Your order qualifies for FREE Shipping Choose this option at
                checkout. See details....
              </p>
            </div>
            <div className="flex items-center justify-between px-4 mb-3">
              <span className="text-xl font-bold"> Total</span>
              <span className="text-2xl font-bold">${subTotal.toFixed(2)}</span>
            </div>
            <Button
              onClick={handleCheckOut}
              className="w-full py-2 text-xs border-none rounded-full"
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
      {totalItem === 0 && (
        <div className="mx-auto shadow-xl w-[400px] text-center border p-5 rounded-lg flex flex-col ">
          <h1 className="mb-1 text-2xl font-bold"> Your Cart feels lonely.</h1>
          <p className="mb-5">
            Your Shopping cart lives to serve. Give it purpose - fill it with
            books, electronics, videos, etc. and make it happy.
          </p>
          <Link
            to="/"
            className="inline-flex justify-center w-full px-4 py-2 text-white bg-orange-500 rounded-lg "
          >
            Continue shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;

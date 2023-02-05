import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderBottom from "./HeaderBottom";
import Cart from "./parts/Cart";
import Location from "./parts/Location";
import Logo from "./parts/Logo";
import LogOut from "./parts/LogOut";
import Order from "./parts/Order";
import Search from "./parts/Search";
import SignIn from "./parts/SignIn";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../store/slices/auth";
const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="flex items-center w-full gap-4 px-4 py-3 text-white bg-amazon_blue">
        <Logo />
        <Location />
        <Search />
        <SignIn />
        <Order />
        <Cart />
        {isLoggedIn && <LogOut onClick={handleLogout} />}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;

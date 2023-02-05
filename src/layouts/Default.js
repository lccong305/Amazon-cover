import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Default = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;

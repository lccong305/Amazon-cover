import React, { useEffect } from "react";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <div className="w-full py-10 -mt-12 md:-mt-36">
        <Products />
      </div>
    </>
  );
};

export default Home;

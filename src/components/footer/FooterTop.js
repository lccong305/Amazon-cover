import React from "react";
import { Link } from "react-router-dom";

const FooterTop = () => {
  return (
    <div className="w-full py-6 bg-white">
      <div className="w-full border-t-[1px] border-b-[1px] py-8">
        <div className="flex flex-col w-64 gap-1 mx-auto text-center">
          <p className="text-sm">See Personalised recommendations</p>
          <Link
            to="/sign-in"
            className="w-full py-1 font-semibold bg-yellow-400 rounded-md cursor-pointer blok hover:bg-yellow-500 active:bg-yellow-700"
          >
            Sign In
          </Link>
          <p className="mt-1 text-xs">
            New Customer?{" "}
            <Link to="/sign-up" className="ml-1 text-blue-600 cursor-pointer">
              Start here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

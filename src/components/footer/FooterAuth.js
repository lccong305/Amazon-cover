import React from "react";

const FooterAuth = () => {
  return (
    <>
      <div className="flex-grow  bg-[#F0F0F0] flex flex-col pb-10">
        <div className="flex gap-5 text-xs mx-auto text-blue-500 py-6 ">
          <span className="hover:text-orangeBtn hover:underline">
            Conditions of Use{" "}
          </span>
          <span className="hover:text-orangeBtn hover:underline">
            Privacy Notice
          </span>
          <span className="hover:text-orangeBtn hover:underline">Help</span>
        </div>
        <p className="text-xs text-gray-500 text-center font-medium">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </>
  );
};

export default FooterAuth;

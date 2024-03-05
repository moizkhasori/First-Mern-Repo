import React from "react";
import { customBlue } from "../colors";

const Header = () => {
  return (
    <div className="mb-8">
      <div
        className={`wrapperdiv w-[90%] mx-auto flex items-center justify-between p-6 border-gray-400 border-b border-opacity-10 text-white`}
      >
        <div className="leftside">
          <div className="logo w-16 h-16 bg-red-300"></div>
        </div>

        <div className="rightside flex gap-16 items-center">
          <div className="hidden sm:flex gap-6  ">
            <span>Work</span>
            <span>Testimonials</span>
            <span>About</span>
          </div>
          <div className=" hidden sm:block  border-gray-400 border-r border-opacity-20 h-8"></div>
          <div><button className="bg-blue-500 hover:bg-blue-600 transition-colors px-4 py-2 sm:px-12 sm:py-4 rounded-full">Contact Now</button></div>
        </div>
      </div>
    </div>
  );
};

export default Header;

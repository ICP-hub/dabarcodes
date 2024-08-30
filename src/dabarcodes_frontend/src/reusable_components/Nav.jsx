import React from "react";

const Nav = ({ children, className }) => {
  return (
    <nav
      className={`sticky top-0 left-0 w-full h-[86px] flex items-center lg:px-[60px] border-b-[2px] border-[#B4B1B4] z-50 justify-between ${className}`}
    >
      <div className="absolute inset-0 bg-white z-[-1]"></div>
      {children}
    </nav>
  );
};

export default Nav;

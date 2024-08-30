import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex  items-center w-[135px] h-[41px] cursor-pointer"
    >
      <img src="/image.png" alt="Logo" className="w-[135px] h-[41px]" />
    </Link>
  );
};

export default Logo;

import React from "react";
import { FaHome, FaBell, FaUser } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50 md:hidden">
      {" "}
      <div className="flex justify-around py-3">
        {/* Home */}
        <button className="flex flex-col items-center">
          <FaHome size={24} className="text-[#0D90C1]" />
          <span className="text-sm text-[#0D90C1]">Home</span>
        </button>
        {/* Tokens */}
        <button className="flex flex-col items-center">
          <GiTwoCoins size={24} className="text-[#0D90C1]" />
          <span className="text-sm text-[#0D90C1]">Tokens</span>
        </button>
        {/* Notifications */}
        <button className="flex flex-col items-center">
          <FaBell size={24} className="text-[#0D90C1]" />
          <span className="text-sm text-[#0D90C1]">Notifications</span>
        </button>
        {/* Profile */}
        <button className="flex flex-col items-center">
          <FaUser size={24} className="text-[#0D90C1]" />
          <span className="text-sm text-[#0D90C1]">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavBar;

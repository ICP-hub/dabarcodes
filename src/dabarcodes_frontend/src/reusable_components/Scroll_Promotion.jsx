import React, { useRef } from "react";

import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const Scroll_Promotion = ({ children, header, isTrue }) => {
  const scrollContainerRef = useRef(null);

  // Function to scroll the container
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300; // Adjust based on card width and spacing
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {isTrue && (
        <div className="flex mx-4 text-balance md:justify-between mt-2 md:mx-20 font-semibold">
          {/* <p className="lg:text-[22px]">Today’s Top Coupon Promotions</p> */}
          <p className="lg:text-[22px]">{header}</p>

          <Link
            to="/customers/promtoion-details"
            className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
          >
            View All
          </Link>
        </div>
      )}

      <div className="relative flex gap-4 lg:mx-16 md:mx-4 my-8 overflow-x-auto scroll-smooth hide-scrollbar cursor-pointer justify-center ">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md hidden md:block "
        >
          <IoMdArrowBack className="w-8 h-8" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0673C1] text-white rounded-full p-2 z-10 shadow-md hidden md:block"
        >
          <IoArrowForward className="w-8 h-8" />
        </button>
        <div
          // justify-center
          ref={scrollContainerRef}
          className="flex  gap-4 lg:mx-4 my-8 overflow-x-auto hide-scrollbar "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Scroll_Promotion;

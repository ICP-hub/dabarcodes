import React, { useState } from "react";
import SKUChart from "./extras/SKUChart";

import { productData } from "../customer/giftCarddata";
import SkuCard from "./extras/SkuCard";

const MySKUs = () => {
  const [activeSKU, setActiveSKU] = useState("All SKUs");

  const skuTypes = [
    "All SKUs",
    "Linked SKUs",
    "Floating SKUs",
    "SKUs Wishlist",
    "Unlinked SKUs",
  ];

  return (
    <>
      <div className="flex md:flex-row flex-col md:m-4 mb-4 justify-between items-center">
        <h2 className="md:text-2xl text-xl text-center md:text-left roboto-bold mb-2">
          My SKUs
        </h2>
        <Search />
      </div>

      <main className="flex justify-center ">
        <div className="w-fit border  rounded-md  md:text-sm gap-4 px-4 py-1 text-xs flex  border-[#ADADAD]">
          {skuTypes.map((type) => (
            <p
              key={type}
              onClick={() => setActiveSKU(type)}
              className={`cursor-pointer  rounded-md ${
                activeSKU === type ? "roboto-bold " : "roboto-regular"
              }`}
            >
              {type}
            </p>
          ))}
        </div>
      </main>

      <SKUChart />
      <div className="flex flex-col   gap-6 py-4">
        <SkuCard Data={productData} />
      </div>
    </>
  );
};

export default MySKUs;

const Search = () => {
  return (
    <div className={`relative w-72 `}>
      <input
        type="text"
        className="peer w-full h-10 bg-transparent text-blue-gray-700 font-sans font-normal outline-none border border-[#B4B1B4] rounded-[7px] pl-3 pr-10 py-2.5 text-sm placeholder-gray-500"
        placeholder="Search Retailer or Supplier or SKU"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B696B]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
    </div>
  );
};

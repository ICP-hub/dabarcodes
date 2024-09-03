import React from "react";
import { Link } from "react-router-dom";

import { Shops } from "../components/customer/giftCarddata";
import Shop_card from "../reusable_components/Shop_card";

const NearMERetailers = () => {
  return (
    <>
      <div className=" border mb-12 rounded-md  mx-4">
        <div className="flex  mx-4  text-balance justify-between my-4 md:mx-8  font-semibold">
          <p className="lg:text-[20px] ">Retailer near me</p>
          <Link
            to=""
            className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
          >
            View All
          </Link>
        </div>
        <div className=" flex   gap-4 mt-2 overflow-x-auto px-2 hide-scrollbar mb-8 md:mx-4">
          <Shop_card datas={Shops} />
        </div>
      </div>
    </>
  );
};

export default NearMERetailers;

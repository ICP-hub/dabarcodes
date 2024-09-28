import React from "react";
import { Link } from "react-router-dom";
import { ComboOffers } from "../components/customer/giftCarddata";
import Product_card from "./Product_card";

const Combo_Offers = () => {
  return (
    <>
      <div className=" border mb-12 rounded-md  mx-4">
        <div className="flex  mx-4  text-balance justify-between my-4 md:mx-8  font-semibold">
          <p className="md:text-xl text-base roboto-bold  ">
            Best Combo offers
          </p>
          <Link
            to=""
            className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
          >
            View All
          </Link>
        </div>
        <div className=" flex  md:flex-row flex-col items-center  gap-4 mt-2 overflow-x-auto px-2 hide-scrollbar mb-8 md:mx-4">
          <Product_card data={ComboOffers} />
        </div>
      </div>
    </>
  );
};

export default Combo_Offers;

import React from "react";
import { productData } from "../components/customer/giftCarddata";
import Long_product_card from "../reusable_components/Long_product_card";

const Top_SKU = () => {
  return (
    <>
      <p className="text-[#000000] md:text-2xl text-xl text-center py-10 font-serif font-semibold ">
        Top SKU's of the Week
      </p>
      <div className="overflow-x-auto  px-2 hide-scrollbar mb-12 md:mx-8">
        <div className="flex w-[570px] gap-4">
          <Long_product_card Data={productData} />
        </div>
      </div>
    </>
  );
};

export default Top_SKU;

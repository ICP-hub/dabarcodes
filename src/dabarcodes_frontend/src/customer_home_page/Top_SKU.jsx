import React from "react";
import { productData } from "../components/customer/giftCarddata";
import Long_product_card from "../reusable_components/Long_product_card";
import Product_card from "./Product_card";

const Top_SKU = () => {
  return (
    <>
      <p className=" text-base md:text-xl roboto-bold text-center py-10  ">
        Top SKUs of the week
      </p>
      <div className="overflow-x-auto  px-2 hide-scrollbar mb-12 md:mx-8">
        <div className="md:flex w-[570px] gap-4  hidden">
          <Long_product_card Data={productData} />
        </div>
        <div className="md:hidden w-[570px] gap-4  flex">
          <Product_card data={productData} />
        </div>
      </div>
    </>
  );
};

export default Top_SKU;

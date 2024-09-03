import React from "react";
import Product_card from "../Product_card";
import { productData, Shops } from "../../components/customer/giftCarddata";
import Long_product_card from "../../reusable_components/Long_product_card";
import { Link } from "react-router-dom";
import Shop_card from "../../reusable_components/Shop_card";

const All_Top_SKU = () => {
  return (
    <>
      {/* top skus */}
      <div>
        <p
          className="text-xl xl:mx-16 mx-8 md:text-start text-center 
        mt-16 mb-8
        font-extrabold Roboto"
        >
          Top SKUs
        </p>
        <div className="gap-8 md:grid xl:mx-16 mx-8 lg:grid-cols-3 md:grid-cols-2  mt-2 xl:grid-cols-4 mb-8 flex flex-col items-center ">
          <Product_card data={productData} />
        </div>
      </div>
      {/* recommend for u */}
      <div>
        <p
          className="text-xl xl:mx-16 mx-8 md:text-start text-center 
        mt-16 mb-8
        font-extrabold Roboto"
        >
          Recommend for you
        </p>
        <div className="gap-8 grid xl:mx-16 mx-8 grid-cols-1 xl:grid-cols-2  mt-2 mb-8 items-center justify-center">
          {productData.slice(0, 4).map((product, index) => (
            <div key={index} className="md:w-[570px]">
              <Long_product_card Data={[product]} />
            </div>
          ))}
        </div>
      </div>
      {/* retailers near me */}
      <div className=" my-12 rounded-md  xl:mx-16 mx-8 ">
        <div className="flex    text-balance justify-between my-4   font-semibold">
          <p className="lg:text-[20px] ">Retailers near me</p>
          <Link
            to=""
            className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
          >
            View All
          </Link>
        </div>
        <div className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
          <Shop_card datas={Shops} />
        </div>
      </div>
    </>
  );
};

export default All_Top_SKU;

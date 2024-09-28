import React from "react";
import Product_card from "../Product_card";
import { productData, Shops } from "../../components/customer/giftCarddata";
import Long_product_card from "../../reusable_components/Long_product_card";
import { Link, useParams } from "react-router-dom";
import Shop_card from "../../reusable_components/Shop_card";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const GetSkuByCategoryName = () => {
  const { name } = useParams();
  const decodedSku = decodeURIComponent(name);
  return (
    <>
      {/* top skus */}
      <div>
        <div className="md:flex justify-between   items-center ">
          <p
            className="text-2xl roboto-bold xl:mx-16 mx-8 md:text-start text-center 
        mt-16 mb-8 "
          >
            {decodedSku}
          </p>
          <div className="flex h-fit gap-8 mx-8 justify-center mb-8">
            <Sort />
            <Filter />
          </div>
        </div>

        <div className="gap-8 md:grid xl:mx-16 mx-8 lg:grid-cols-3 md:grid-cols-2  mt-2 xl:grid-cols-4 mb-8 flex flex-row justify-center flex-wrap ">
          <Product_card data={productData} />
        </div>
      </div>
      {/* recommend for u */}
      <div>
        <p
          className="text-2xl roboto-bold xl:mx-16 mx-8 md:text-start text-center 
        mt-16 mb-8
      "
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
          <p className="text-2xl roboto-bold">Retailers near me</p>

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

export default GetSkuByCategoryName;

function Sort() {
  return (
    <div className="flex rounded-md border-[#989898] items-center p-2 gap-2 border justify-between">
      <p>Sort</p>
      <HiAdjustmentsHorizontal />
    </div>
  );
}

function Filter() {
  return (
    <div className="flex rounded-md border-[#989898] items-center p-2 gap-2 border justify-between">
      <p>Filter</p>
      <HiAdjustmentsHorizontal />
    </div>
  );
}

import React from "react";
import ProductCard from "../../reusable_components/ProductCard";
import { Items } from "./giftCarddata";

const CoupanDetails = () => {
  return (
    <>
      <div className="bg-white    md:m-8 lg:mx-24 mt-24 md:flex">
        <div className="flex-1 pb-8">
          {/*  */}

          <div className="rounded-lg  mb-8 xl:mx-24 md:mt-12  h-[158px] m-4 ">
            <div className="flex px-8 py-4 gap-2 text-2xl font-bold">
              Save $20 off on Delivery Order of $75 or More
            </div>
            <div className="px-8  text-[#646464]">
              <p>
                Valid till :{" "}
                <span className="text-black font-bold">2024, 18 Aug</span>
              </p>
              <p>
                Promotional Offer :{" "}
                <span className="text-[#0D90C1] font-bold text-lg">
                  $20 off on $75
                </span>
              </p>
            </div>
          </div>

          {/*  */}
        </div>
        <div className="flex-1   ">
          <div className="shadow-2xl  rounded-xl m-4 p-4  w-fit border-3 ">
            <p className="p-2  font-semibold text-lg">SKU Details</p>
            <ul className="text-[#171717] p-2 text-sm gap-2 font-normal flex flex-col list-disc pl-8">
              <li>
                Save $5 on Your Next Purchase: Enjoy $5 off when you spend $50
                or more. Redeemable at any participating store location.
              </li>
              <li>
                20% Off Select Items: Get 20% off on a wide range of select
                items. Valid for in-store and online purchases.
              </li>
              <li>
                Buy One Get One Free: Purchase one item and get another one of
                the same kind for free. Applicable to selected products only.
              </li>
              <li>
                Free Shipping on Orders Over $75: Enjoy free standard shipping
                on all orders over $75. Available for a limited time.
              </li>
            </ul>
          </div>
          <div className="mt-auto p-4 flex md:justify-end justify-center ">
            <button
              className={`bg-[#0D90C1] hover:bg-[#0A6A9A] text-white px-[28px] py-[11px] rounded-[5px] w-fit`}
            >
              Click here to claim
            </button>
          </div>
        </div>
      </div>
      <div className="  md:m-8 lg:mx-24 mt-24 ">
        <h1 className="text-lg font-semibold font text-center lg:text-start text-balance">
          Products qualifying for Promotion
        </h1>
        <div className="md:m-16 m-8 md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 flex justify-center items-center flex-col">
          {Items.slice(0, 8).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoupanDetails;

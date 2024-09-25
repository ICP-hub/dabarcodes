import React from "react";
import { Link } from "react-router-dom";
import { category } from "../../components/customer/giftCarddata";
const Sku_category = () => {
  return (
    <>
      <h1 className="text-center my-8 md:my-20  Roboto font-extrabold text-3xl ">
        Explore by Category
      </h1>
      <div className="lg:mx-40 mb-40 md:gap-8 md:grid xl:grid-cols-5 cursor-pointer md:grid-cols-4 md:mx-8 flex flex-wrap    justify-center  gap-4      ">
        {category.map((item, index) => (
          <div className="md:w-[128px] flex ">
            <Link
              to="/sku-category"
              key={index}
              className="text-center flex-shrink-0 "
            >
              <div className="">
                <img
                  src={`/${item.img}`}
                  alt={item.alt}
                  className="hidden md:block min-w-28 min-min-h-28 object-contain   "
                />
                <img
                  src={`/${item.img}`}
                  alt={item.alt}
                  className="md:hidden  min-w-20 min-min-h-20 object-contain   "
                />
              </div>
              <p className="text-[16px] hover:font-bold   text-balance font-medium capitalize">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sku_category;

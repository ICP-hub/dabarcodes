import { useState } from "react";

const Product = ({ data, isLinked = false }) => {
  return (
    <div className="gap-4 flex flex-col p-4  ">
      {data.map((product) => (
        <div
          key={product.id}
          className={`${product.bgColor} ${
            product.isExpiringToday && " border-[#10B4F1] border-[2px]"
          } md:justify-between border  items-center md:flex rounded-xl  relative `}
        >
          {product.isExpiringToday && <Ribbon />}

          <div className="flex p-8 lg:p-4 ">
            <img className="w-20 h-20" src={product.img} alt="" />
            <div className="p-2 space-y-1 capitalize ">
              <p className="text-sm">{product.name}</p>
              <p className="text-[#000000] font-semibold text-xl">
                {product.percentageOff} off
              </p>
            </div>
          </div>

          <div
            className="lg:p-4 w-[200px] px-2 pb-4 text-white flex
          justify-center"
          >
            <button
              className={` ${
                isLinked ? "bg-[#10B4F1]" : "bg-[#0D90C1]"
              }  rounded-md px-6 py-1`}
            >
              {isLinked ? "Linked  " : "Link SKU"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
import { BsFillLightningChargeFill } from "react-icons/bs";
const Ribbon = () => {
  return (
    <div
      className="absolute  top-0 right-0 p-1 pl-4 text-white bg-[#0C87B5] rounded-bl-md "
      style={{
        width: "153.67px",
        height: "36px",
        borderRadius: "0px 10px 0px 24px",
        opacity: 0.8,
      }}
    >
      <span className="text-sm flex gap-2 pt-1 text-center text-[#FFFEFF]">
        <BsFillLightningChargeFill size={18} className="text-[#F4B335]" />
        FLOATING SKU
      </span>
    </div>
  );
};

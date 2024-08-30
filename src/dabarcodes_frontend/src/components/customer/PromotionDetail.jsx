import React from "react";
import { Link } from "react-router-dom";
import { promotionsData } from "./giftCarddata";
import Card from "./GiftCard";

const PromotionDetail = () => {
  return (
    <>
      <div className="flex text-balance mx-4  justify-between mt-8 md:mx-32 font-semibold">
        {/* <p className="lg:text-[22px]">Today’s Top Coupon Promotions</p> */}
        <p className="lg:text-[22px]">Promotional Coupans</p>

        <Link className="cursor-pointer underline decoration-[#0D90C1] underline-offset-8">
          Filter
        </Link>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:m-24 m-4 ">
        {promotionsData.map((promo, index) => (
          <Card
            key={index}
            title={promo.title}
            subtitle={promo.subtitle}
            expiration={promo.expiration}
            icon={promo.icon}
            bgColor={promo.bgColor}
            isExpiringToday={promo.isExpiringToday}
          />
        ))}
      </div>
    </>
  );
};

export default PromotionDetail;

import React, { useState } from "react";
import {
  PercentageOffData,
  dollorOffData,
  bundleOffData,
  listItems,
  PercentageOffDeals,
  dollorOffDeals,
  bundleOffDeals,
} from "./giftCarddata";
import Product from "../../reusable_components/Product";

const Current_Promotion = () => {
  const [selectedItem, setSelectedItem] = useState(1); // Default selected item
  const renderProduct = () => {
    switch (selectedItem) {
      case 1:
        return <Product data={PercentageOffData} />;
      case 2:
        return <Product data={dollorOffData} />;

      case 3:
        return <Product data={bundleOffData} />;

      default:
        return null;
    }
  };

  const renderDeals = () => {
    switch (selectedItem) {
      case 1:
        return <PercentageDeals />;
      case 2:
        return <DollarDeals />;

      case 3:
        return <BundleDeals />;

      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex mx-4 text-balance md:justify-between mt-2 md:mx-20 font-semibold">
        <p className="lg:text-[22px] mr-4">Current Products on Promotion</p>
      </div>
      <main className="md:grid flex mx-2  flex-col md:mx-16  gap-4 my-4 grid-cols-12 ">
        <div className="bg-white border rounded-lg shadow-xl md:col-span-4 lg:col-span-3 xl:col-span-2 md:h-[450px] h-[80px]">
          <ul className="capitalize flex md:block md:p-8 text-balance gap-4 px-2 py-2 justify-center items-center md:text-[19px] text-sm">
            {listItems.map((item) => (
              <React.Fragment key={item.id}>
                <li
                  onClick={() => setSelectedItem(item.id)}
                  className={`py-2 px-1 rounded cursor-pointer ${
                    selectedItem === item.id
                      ? `${item.bgColor} text-white`
                      : "bg-transparent text-black"
                  }`}
                >
                  {item.label}
                </li>
                <hr className="mb-4 mt-2 text-[#6B696B]" />
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="bg-white border rounded-lg shadow-xl md:col-span-8 lg:col-span-9  xl:col-span-10  col-span-12 h-auto ">
          <div className="flex mx-4 text-balance justify-between mt-8 md:mx-8 font-semibold">
            <p className="lg:text-[22px] mr-4">Products </p>

            <Link
              to="/sku-list"
              className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
            >
              View All
            </Link>
          </div>
          {renderProduct()}
          <div className="flex mx-4 text-balance justify-between mt-8 md:mx-8 font-semibold">
            <p className="lg:text-[22px] mr-4">Promotions </p>

            <Link
              to="/customers/promtoion-details"
              className="cursor-pointer hover:underline decoration-[#0D90C1] underline-offset-8"
            >
              View All
            </Link>
          </div>
          {renderDeals()}
        </div>
      </main>
    </>
  );
};

export default Current_Promotion;

import Scroll_Promotion from "../../reusable_components/Scroll_Promotion";
import Card from "./GiftCard";
import { Link } from "react-router-dom";

const PercentageDeals = () => {
  return (
    <Scroll_Promotion header={" Promotions"}>
      {PercentageOffDeals.map((promo, index) => (
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
    </Scroll_Promotion>
  );
};
const DollarDeals = () => {
  return (
    <Scroll_Promotion header={" Promotions"}>
      {dollorOffDeals.map((promo, index) => (
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
    </Scroll_Promotion>
  );
};
const BundleDeals = () => {
  return (
    <Scroll_Promotion isTrue={false} header={" Promotions"}>
      {bundleOffDeals.map((promo, index) => (
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
    </Scroll_Promotion>
  );
};

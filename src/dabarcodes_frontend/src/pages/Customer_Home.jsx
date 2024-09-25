import React from "react";

import Top_SKU from "../customer_home_page/Top_SKU";
import My_WishList from "../customer_home_page/My_WishList";
import Linked_SKU from "../customer_home_page/Linked_SKU";
import Top_skus from "../customer_home_page/Top_skus";
import Upcoming_Offers from "../customer_home_page/Upcoming_Offers";
import Explore_catagory from "../customer_home_page/Explore_catagory";
import Combo_Offers from "../customer_home_page/Combo_Offers";
import NearMERetailers from "../customer_home_page/NearMERetailers";
import MobileNavBar from "../components/common/MobileNavBar";

const Customer_Home = () => {
  return (
    <>
      <Top_SKU />
      <My_WishList />
      <Linked_SKU />
      <Explore_catagory />
      <Top_skus />
      <Upcoming_Offers />
      <div className=" hide-scrollbar md:flex   overflow-x-auto">
        <Combo_Offers />
        <Combo_Offers />
      </div>
      <NearMERetailers />
      <MobileNavBar />
      {/* old ui */}
    </>
  );
};

export default Customer_Home;

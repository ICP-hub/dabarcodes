import React from "react";

import Weekly_Promotions from "../components/customer/Weekly_Promotions";
import Category_Promotion from "../components/customer/Category_Promotion";
import Today_Top_Promotion from "../components/customer/Today_Top_Promotion";
import Upcoming from "../components/customer/Upcoming";
import Current_Promotion from "../components/customer/Current_Promotion";

const Customer_Home = () => {
  return (
    <>
      <Weekly_Promotions />
      <Category_Promotion />
      <Today_Top_Promotion />
      <Upcoming />
      <Current_Promotion />
    </>
  );
};

export default Customer_Home;

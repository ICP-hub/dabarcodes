import React from "react";
import Category_Promotion from "../components/customer/Category_Promotion";
import Products from "./Products";

const SKULIST = () => {
  return (
    <>
      <h1 className="mx-16 mt-12  mb-4 text-3xl font-bold"> SKU</h1>
      <Category_Promotion />
      <Products />
    </>
  );
};

export default SKULIST;

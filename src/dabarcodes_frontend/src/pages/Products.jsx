import React from "react";
import { Link } from "react-router-dom";
import Ribbon from "../reusable_components/Ribbon";
import { Items } from "../components/customer/giftCarddata";
import ProductCard from "../reusable_components/ProductCard";
const Products = () => {
  return (
    <>
      <div className="flex  mx-4  text-balance md:justify-between mt-2 md:mx-20  font-semibold">
        <p className="lg:text-[22px] ">Products</p>
        <Link
          to="/"
          className="cursor-pointer underline decoration-[#0D90C1] underline-offset-8"
        >
          Filters
        </Link>
      </div>
      <div className="md:m-16 m-8 md:grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4 suf:grid suf:grid-cols-2 flex justify-center items-center flex-col">
        {Items.map((Items) => (
          <ProductCard key={Items.id} product={Items} />
        ))}
      </div>
    </>
  );
};

export default Products;

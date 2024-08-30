import { RiDiscountPercentFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "react-router-dom";
const basePath = "/public/category";
import React from "react";
import { category } from "./Category_Promotion";
const CategoryDetail = () => {
  return (
    <>
      <Page />
      <Main />
    </>
  );
};

export default CategoryDetail;

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-[356px] m-8 bg-[#E7F8FE]  border-[0.86px]  rounded-lg shadow-lg lg:space-x-8 space-y-6 lg:space-y-0 p-6 lg:p-8">
      <div className="lg:flex hidden lg:w-[400px] lg:h-[236px] items-center justify-center">
        <img
          src="/promotion2.png"
          alt="Subscription"
          className="object-contain w-full h-full brightness-100"
        />
      </div>
      <main className="flex-1">
        {/* Header and Details Section */}
        <div className="mb-6">
          <span className="text-2xl font-bold italic block mb-4">
            Join the Subscription
          </span>
          <p className="text-md">
            Unlock exclusive access to gain unparalleled benefits designed to
            enhance your shopping experience:
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="flex items-center space-x-4">
              <RiDiscountPercentFill size={40} color="#B72322" />
              <p className="text-md font-bold">Exclusive Deals</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaHeart size={38} color="#B72322" />
              <p className="text-md font-bold">Personalized Offers</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <IoBagHandle size={40} color="#B72322" />
            <p className="text-md font-bold">Seamless Shopping</p>
          </div>
        </div>

        {/* Subscribe Button */}
        <div>
          <Link
            to="/purchase"
            className="bg-[#0D90C1] text-white py-2 px-6 rounded-md text-md font-medium hover:bg-[#0a7fb5]"
          >
            Subscribe Now
          </Link>
        </div>
      </main>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <main>
        <h1 className="text-center text-lg text-balance md:text-[39px] font-bold">
          Explore Products by Category
        </h1>
        <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:m-24 m-4 ">
          {category.map((item, index) => (
            <div key={index} className="text-center flex-shrink-0">
              <div className="image-item">
                <img
                  src={`${basePath}/${item.img}`} // Construct URL
                  alt={item.alt}
                  className="w-52 h-24  object-cover"
                />
              </div>
              <p className="text-[16px] font-medium capitalize">{item.name}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

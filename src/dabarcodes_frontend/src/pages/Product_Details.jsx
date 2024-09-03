import React, { useEffect, useState } from "react";
import { FaArrowCircleDown, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Participating from "../components/Retailers/Participating";
import ProductCard from "../reusable_components/ProductCard";
import { Items } from "../components/customer/giftCarddata";

const Product_Details = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    requestAnimationFrame(() => {
      setTimeout(scrollToTop, 0);
    });
  }, []);
  const [isView, setIsView] = useState(false);
  return (
    <>
      <Cards />
      <header className="xl:mx-24 md:mx-8 md:mt-12 text-lg font-semibold mt-8 mx-4">
        Participating Retailers
      </header>
      <Participating isTrue={true} setIsView={setIsView} isView={isView} />
      {isView && <Participating isTrue={false} />}
      <h1 className="text-center text-4xl font-semibold font-serif mb-8">
        You might also like
      </h1>
      <div className="flex justify-center md:justify-start gap-8 md:m-16 scroll-smooth hide-scrollbar cursor-pointer overflow-x-auto space-x-4">
        {Items.map((item) => (
          <div
            key={item.id}
            className="bg-[#E7F8FE] cursor-pointer rounded-md  min-w-[244px]"
          >
            {/* Adjust min-w-[200px] to your desired width */}
            <ProductCard product={item} />
          </div>
        ))}
      </div>
      ;
    </>
  );
};
export default Product_Details;

const Cards = () => {
  return (
    <>
      <section className="flex lg:flex-row flex-col md:mt-24 md:mx-24 mb-0 m-4  gap-12">
        <div>
          <img src="/details.png" alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-balance ">
            Kwality Wall’s Frozen Dessert
          </p>

          <div className="">
            <p className="text-sm  capitalize  p-2">See other flavors</p>
            <div className=" md:flex grid grid-cols-2  gap-4">
              <div className="bg-[#DBF4FD] pr-8  relative px-4 py-2 w-fit ">
                <p className="">Peanut Butter</p>
                <p className="absolute   top-3 right-2">
                  <FaTimes />
                </p>
              </div>
              <div className="bg-[#DBF4FD] pr-8  relative px-4 py-2 w-fit ">
                <p className="">Peanut Butter</p>
                <p className="absolute   top-3 right-2">
                  <FaTimes />
                </p>
              </div>
              <div className="bg-[#DBF4FD] pr-8  relative px-4 py-2 w-fit ">
                <p className="">Peanut Butter</p>
                <p className="absolute   top-3 right-2">
                  <FaTimes />
                </p>
              </div>
              <div className=" pr-8 shadow-sm relative px-4 py-2 w-fit ">
                <p className="">See More Flavors</p>
                <p className="absolute   top-3 right-2">
                  <FaChevronDown className="" />
                </p>
              </div>
            </div>
          </div>
          <hr className=" mb-2 mt-2 border-t-[0.5px] border-[#6B696B]" />
          <div className="md:flex justify-between items-end">
            <div className="  w-[290px]">
              <ul className="flex  justify-between ml-4 ">
                <li className="text-md font-bold list-disc ">Flavor Peanut</li>
                <li className="">Strawberry</li>
              </ul>
              <ul className="flex  justify-between ml-4 ">
                <li className="text-md font-bold list-disc ">Brand</li>
                <li>Kwality wall’s</li>
              </ul>
              <ul className="flex  justify-between ml-4 ">
                <li className="text-md font-bold list-disc ">Speciality</li>
                <li>Sweetened</li>
              </ul>
              <ul className="flex  justify-between ml-4 ">
                <li className="text-md font-bold list-disc ">Item Weight</li>
                <li>0.47 kg</li>
              </ul>
            </div>
            {/*  */}
            <div className="mt-4 pr-8 shadow-sm relative px-4 py-2 w-fit ">
              <p className="">View All details</p>
              <p className="absolute   top-3 right-2">
                <FaChevronDown className="" />
              </p>
            </div>
          </div>

          <hr className=" mb-2 mt-2 border-t-[0.5px] border-[#6B696B]" />
          <div className="bg-[#0D90C1] mb-8 rounded-md flex justify-center w-[200px] text-white">
            <button className="px-4 py-2">Link SKU</button>
          </div>
        </div>
      </section>
      <div className="shadow-2xl  rounded-xl m-4 p-4 md:mx-20 w-fit border-3 ">
        <p className="p-2  font-semibold text-lg">SKU Details</p>
        <ul className="text-[#171717] p-2 text-sm gap-2 font-normal flex flex-col list-disc pl-8">
          <li>
            Save $5 on Your Next Purchase: Enjoy $5 off when you spend $50 or
            more. Redeemable at any participating store location.
          </li>
          <li>
            20% Off Select Items: Get 20% off on a wide range of select items.
            Valid for in-store and online purchases.
          </li>
          <li>
            Buy One Get One Free: Purchase one item and get another one of the
            same kind for free. Applicable to selected products only.
          </li>
          <li>
            Free Shipping on Orders Over $75: Enjoy free standard shipping on
            all orders over $75. Available for a limited time.
          </li>
        </ul>
      </div>
    </>
  );
};

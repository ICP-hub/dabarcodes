import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoTime } from "react-icons/io5";
import { SlDirections } from "react-icons/sl";
import Product_card from "../customer_home_page/Product_card";
import { productData } from "../components/customer/giftCarddata";
import { useParams } from "react-router-dom";

// StoreInfo component
const StoreInfo = () => {
  const storeAddress = "10498 Maple Avenue, Bogielichboro 61521-6419";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    storeAddress
  )}`;

  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
    storeAddress
  )}`;

  const { name } = useParams();
  const decodedStoreName = decodeURIComponent(name);

  return (
    <>
      <div className="md:flex grid lg:mx-8  md:flex-row items-start md:items-start space-x-4 gap-8 rounded-md">
        {/* Store details */}
        <div className="flex flex-col p-8 flex-wrap space-y-4">
          <h1 className="text-xl roboto-bold md:text-4xl mb-2">
            {decodedStoreName.toUpperCase()}{" "}
          </h1>
          <p
            className="flex items-center 
text-base roboto-regular
           mb-1"
          >
            <span className="text-blue-500 mr-2">
              <FaMapMarkerAlt className="text-[#0D90C1]" size={20} />
            </span>
            {storeAddress}
          </p>
          <p
            className="flex text-[#00B42A] items-center 
text-base roboto-medium
           mb-1"
          >
            <span className="text-[#0D90C1] mr-2">
              <IoTime className="text-[#0D90C1]" size={20} />
            </span>{" "}
            Open
            <span
              className="text-black 
            text-base roboto-regular
            ml-2"
            >
              - until 11 pm
            </span>
          </p>
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center 
text-base roboto-regular
             underline"
          >
            <span className="mr-2">
              <SlDirections className="text-[#0D90C1]" size={20} />
            </span>{" "}
            Get directions
          </a>
        </div>

        {/* Google Maps Embed */}
        <div className="flex-1 p-2">
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="400px"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
      <StoreOffers />
    </>
  );
};

export default StoreInfo;

const StoreOffers = () => {
  return (
    <>
      <div className=" mt-12 mb-12 rounded-md  mx-4">
        <div className="md:flex   mx-4  text-balance justify-between my-4 md:mx-8  font-semibold">
          <p className="md:text-2xl text-xl roboto-bold  ">
            Available Products
          </p>
          <div className="flex gap-4 mt-2 md:mt-0 ">
            <Sort />
            <Filter />
            <Search />
          </div>
        </div>
        <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-8  mt-8 flex flex-wrap items-center justify-center  px-2  mb-8 md:mx-4">
          <Product_card data={productData.slice(0, 8)} />
        </div>
      </div>
    </>
  );
};
function Sort() {
  return (
    <div className="flex rounded-md border-[#989898] items-center p-2 gap-2 border justify-between">
      <p>Sort</p>
      <HiAdjustmentsHorizontal />
    </div>
  );
}

function Filter() {
  return (
    <div className="flex rounded-md border-[#989898] items-center p-2 gap-2 border justify-between">
      <p>Filter</p>
      <HiAdjustmentsHorizontal />
    </div>
  );
}

const Search = () => {
  return (
    <div className={`relative w-72 `}>
      <input
        name="global_input"
        type="text"
        className="peer w-full h-10 bg-transparent text-blue-gray-700 font-sans font-normal outline-none border border-[#B4B1B4] rounded-[7px] pl-3 pr-10 py-2.5 text-sm placeholder-gray-500"
        placeholder="Search retailers"
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B696B]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
    </div>
  );
};

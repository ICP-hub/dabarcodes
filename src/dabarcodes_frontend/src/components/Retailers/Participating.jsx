import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Participating = ({ isTrue = false, setIsView, isView }) => {
  const stores = [
    {
      storeName: "Store name 1",
      availability: "Available online and physical store",
      validity: "7th Aug",
      offer: "20% off",
    },
    {
      storeName: "Store name 2",
      availability: "Available online only",
      validity: "15th Aug",
      offer: "15% off",
    },
    {
      storeName: "Store name 3",
      availability: "Physical store only",
      validity: "30th Aug",
      offer: "10% off",
    },
  ];

  const handleClick = () => {
    setIsView((prevIsView) => !prevIsView); // Toggle the value of isView
  };

  return (
    <div className="flex xs:flex-col md:justify-center xs:items-center lg:items-center">
      <div className=" md:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2  flex justify-center items-center flex-col">
        {/* Map through the dummy data and render the Participating component */}

        {stores.map((store, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg border-2 mb-8 xl:mx-24 md:mt-12  h-[158px] m-4 w-[300px]"
          >
            <div className="flex px-8 py-4 gap-2">
              <img className="w-12 h-12" src="/shop.png" alt="Store Logo" />
              <div>
                <p className="font-bold">{store.storeName}</p>
                <p className="text-sm text-[#646464]">{store.availability}</p>
              </div>
            </div>
            <div className="px-8 text-[#646464]">
              <p>
                Valid till :{" "}
                <span className="text-black font-bold">{store.validity}</span>
              </p>
              <p>
                Promotional Offer :{" "}
                <span className="text-[#0D90C1] font-bold text-lg">
                  {store.offer}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {isTrue && (
        <FaArrowCircleDown
          onClick={handleClick}
          className={`xl:mr-16 mr-4 mt-8 xs:mt-0 xs:mb-8 xs:flex  lg:mt-0  md:mt-12 text-[#0673C1] transform transition-transform duration-[1000ms] ease-in-out ${
            isView ? "rotate-180" : "rotate-0"
          }`}
          size={40}
        />
      )}
    </div>
  );
};

export default Participating;

import React from "react";
import { HiArrowLongUp } from "react-icons/hi2";
import { useModal } from "../../context/ModalContext";

// Define card data
const cardData = [
  {
    id: 1,
    title: "Start Your Savings Journey",
    imageSrc: "/image/image 50.png",
    description: "Join as customer",
  },
  {
    id: 2,
    title: "Unlock Customer Insights",
    imageSrc: "/image/image 51.png",
    description: "Join as retailer",
  },
  {
    id: 3,
    title: "Promote Your Products Effortlessly",
    imageSrc: "/image/image 52.png",
    description: "Join as supplier",
  },
];

// Card component
const Card = ({ title, imageSrc, description }) => {
  const { openConnectWalletModal } = useModal();

  return (
    <div className="w-full max-w-xs bg-blue-200 rounded-lg flex flex-col items-center justify-center p-4">
      <p className="text-xl    roboto-bold  text-gray-800 text-center mb-4">
        {title}
      </p>
      <img src={imageSrc} alt="card-image" className="w-full h-auto mb-4" />
      <div
        onClick={openConnectWalletModal}
        className="flex items-center cursor-pointer"
      >
        <p className="text-base roboto-medium   text-gray-800">{description}</p>
        <HiArrowLongUp className="ml-2 size-7 rotate-90 text-[#171717]" />
      </div>
    </div>
  );
};

const DaBarcodesInfo = () => {
  return (
    <div
      id="about"
      className="bg-blue-100 py-12 px-6 flex justify-center items-center"
    >
      <div className="flex flex-col gap-24 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-10">
          <h1 className=" md:text-3xl text-2xl leading-6 roboto-bold  text-gray-800 text-center">
            What is DaBarcodes
          </h1>
          <p className="text-base roboto-regular  text-gray-600 text-center">
            daBarcodes bridges the gap between customers, suppliers, and
            retailers through a unique promotional platform. Whether you're here
            to save, promote, or analyze, daBarcodes offers the perfect
            solution.
          </p>
        </div>

        {/* Boxes Section */}
        <div className="flex gap-24 flex-wrap justify-center">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              imageSrc={card.imageSrc}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaBarcodesInfo;

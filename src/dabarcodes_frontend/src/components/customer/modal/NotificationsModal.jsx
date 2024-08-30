import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import { useModal } from "../../../context/ModalContext";
import { CiCircleQuestion } from "react-icons/ci";
const cardItems = ["All", "General", "Promotions", "Expiring Soon", "Coupons"];

const cardData = [
  {
    imgSrc: "/nutella.png",
    title: "Exclusive Deal: Save 20% on your linked SKUs at [Retailer Name].",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 20% off",
    validTill: "Valid till: August 29, 2024",
    buttonText: "Claim offer",
  },
  {
    imgSrc: "/nutella.png",

    title: "Exclusive Deal: Save 20% on your linked SKUs at [Retailer Name].",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 20% off",
    validTill: "Valid till: August 29, 2024",
    buttonText: "Claim offer",
  },
  {
    imgSrc: "/nutella.png",

    title: "Exclusive Deal: Save 20% on your linked SKUs at [Retailer Name].",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 20% off",
    validTill: "Valid till: August 29, 2024",
    buttonText: "Claim offer",
  },
  {
    imgSrc: "/nutella.png",

    title: "Exclusive Deal: Save 20% on your linked SKUs at [Retailer Name].",
    skuName: "SKU Name : SKU Name",
    promotionDetail: "Promotion Detail : 20% off",
    validTill: "Valid till: August 29, 2024",
    buttonText: "Claim offer",
  },
];
const NotificationsModal = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const { isNotificitionsOn, closeNotificitions } = useModal();
  return (
    <Modal
      isOpen={isNotificitionsOn}
      onClose={closeNotificitions}
      className="flex md:flex-col gap-4 w-[300px] md:w-[551px] h-fit"
      mainclass="flex justify-center items-center md:items-start  md:justify-end  md:pt-24 md:pr-32 "
    >
      <div>
        <ul className="flex  md:flex-row flex-col md:justify-center md:items-center md:gap-6 gap-4">
          <CiCircleQuestion size={20} className="text-[#37352F]" />
          {cardItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`cursor-pointer flex  items-center ${
                activeIndex === index
                  ? "font-semibold underline decoration-black underline-offset-8"
                  : ""
              }`}
            >
              {item}
              {activeIndex === index && (
                <p className="bg-[#FE5F33] underline   w-4 h-4 text-white rounded-[3px] text-center text-xs ml-2">
                  {cardData.length}
                </p>
              )}
            </li>
          ))}
        </ul>

        <hr className="hidden md:block border-t-2 mt-4 border-[#F5F5F5] " />
      </div>
      <hr className="md:hidden  w-px h-[400px] bg-gray-300 transform rotate-180" />

      <div className="overflow-y-auto max-h-[400px]   hide-scrollbar">
        {cardData.map((card, index) => (
          <>
            <CardComponent
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              skuName={card.skuName}
              promotionDetail={card.promotionDetail}
              validTill={card.validTill}
              buttonText={card.buttonText}
            />
            <hr className="block border-t-2 mt-4 border-[#F5F5F5] " />
          </>
        ))}
      </div>
    </Modal>
  );
};

export default NotificationsModal;
const CardComponent = ({
  imgSrc,
  title,
  skuName,
  promotionDetail,
  validTill,
  buttonText,
}) => {
  return (
    <div className="md:flex gap-4 mb-8">
      <img className="w-12 h-12 mt-2" src={imgSrc} alt="Card Image" />
      <div>
        <p className="text-md font-normal">{title}</p>
        <p className="pt-2 text-xs text-[#646464]">{skuName}</p>
        <p className="pt-2 text-xs text-[#646464]">{promotionDetail}</p>
        <p className="pt-2 text-xs text-[#646464]">{validTill}</p>
        <button className="border mt-4 border-[#0D90C1] font-medium rounded-md text-[#0D90C1] px-2 md:px-4 py-1 hover:bg-[#E7F8FE]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

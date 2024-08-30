import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../../context/ModalContext";
import { useNavigate } from "react-router-dom";

const CoupanModal = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const { isCoupanOn, closeCoupan } = useModal();
  const handleClick = () => {
    navigate("/coupan-details");

    closeCoupan();
  };

  return (
    <Modal
      isOpen={isCoupanOn}
      onClose={closeCoupan}
      className="w-[600px] mx-4 md:mx-0   "
      mainclass="flex justify-center items-center overflow-x-auto "
    >
      <div className="flex   gap-4">
        <img className="md:w-32 md:h-32 w-16 h-16" src="/coupan.png" alt="" />

        <div>
          <p className="text-lg font-bold  py-2">$1.25 off with myWalgreens </p>
          <p className="">$1.25 off with myWalgreens</p>
          <p className="text-[#646464] text-sm">Redeem online or in store</p>
        </div>
      </div>

      <div>
        <div className="mt-4">
          <p className="text-[#646464]">
            Valid til: <span className="text-[#0D90C1]">7th Aug</span>
          </p>
        </div>
        <div className="text-[12px] mt-1  ">
          <p>
            When you spend $75 on total order. Must clip offer by Monday, July
            22, 2024, at 11:59pm PT and redeem by Monday, July 29, 2024, at
            11:59pm PT. Valid only on Pickup and Delivery orders where
            available. Not
            {isExpanded && (
              <>
                {" "}
                valid on in-store, Delivery Now or Ship purchases. Offer not
                valid for existing Pickup or Delivery customers. Offer subject
                to change at any time. Excludes alcohol and gift cards. Delivery
                times not guaranteed. $35 order minimum for free Pickup.
                Restrictions may apply. Subject to availability. Pickup &
                Delivery Only Limit of one coupon per household. Digital Coupons
                and paper coupons may not be combined on the purchase of a
                single item. Specially marked items, such as Clearance or
                Manager’s Specials may not be eligible for Digital Coupons.
              </>
            )}
          </p>
          <button
            className=" mt-2 text-[#0D90C1] underline underline-offset-2"
            onClick={handleToggle}
          >
            {isExpanded ? "Hide Details" : "More Details"}
          </button>
        </div>
        <div className="py-4  text-white   ">
          <button
            onClick={handleClick}
            className={` 
            bg-[#0D90C1]
            rounded-md px-6 py-1`}
          >
            View Details
          </button>
          <p className="text-[#646464] text-xs mt-8">
            Terms and conditions apply. Offers are subject to change and may
            vary by location. Please check the specific details for each coupon
            before use.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CoupanModal;

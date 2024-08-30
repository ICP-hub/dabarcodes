import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../../context/ModalContext";
import { IoMdClose } from "react-icons/io";

const LinkedSku = () => {
  const { linkedSKU, closeLinkedSKU } = useModal();

  return (
    <Modal
      isOpen={linkedSKU}
      onClose={closeLinkedSKU}
      className=" mx-4 md:mx-0   "
      mainclass="flex   justify-center items-center overflow-x-auto "
    >
      <div className="flex relative flex-col w-[220px]  md:w-[350px] items-center">
        <IoMdClose
          onClick={closeLinkedSKU}
          size={24}
          className="absolute right-2 top-0 cursor-pointer "
        />
        <p className="text-sm text-[#949494] mt-8 text-center">
          You're about to link this SKU to your account. Once linked, this
          action is irreversible.
        </p>
        <p className="mt-2 text-sm text-black">
          Are you sure you want to proceed?
        </p>
        <div
          className={`border border-[#0D90C1] mt-4  rounded-md flex justify-center w-[200px] text-white
         
            
            `}
        >
          <button className="px-4 py-2 text-[#0D90C1]">
            Link as Fixed SKU
          </button>
        </div>
        <div
          className={`bg-[#0C87B5]  mt-4 rounded-md flex justify-center w-[200px] text-white
         hover:bg-[#10B4F1]
            
            `}
        >
          <button className="px-4 py-2 text-[#E7F8FE]">
            Link as Floating SKU
          </button>
        </div>
        <p className="text-[#171717] mt-4 font-normal">
          Available Utility Tokens: <span className="font-bold">04</span>
        </p>
      </div>
    </Modal>
  );
};

export default LinkedSku;

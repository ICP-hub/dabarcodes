import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../../context/ModalContext";
import { CiCircleQuestion } from "react-icons/ci";
import { X } from "lucide-react";

const UnlinkItemModal = () => {
  const { isUnlinkItemModal, closeUnlinkItemModal } = useModal();

  const handleUnlink = () => {
    console.log("Unlink button clicked");
    // Add your unlinking logic here
    closeUnlinkItemModal();
  };

  return (
    <div>
      <Modal
        isOpen={isUnlinkItemModal}
        onClose={closeUnlinkItemModal}
        className="sm:w-fit w-[280px] sm_md:w-fit roboto-regular text-xs  "
        mainclass="flex justify-center items-center   "
      >
        <p className="flex  justify-end cursor-pointer">
          <X onClick={closeUnlinkItemModal} />
        </p>
        <div className="px-8">
          <h2 className="pt-8 text-center   py-4">
            Are you sure to unlink the item from your account?
          </h2>
          <div className=" mb-6">
            <p className="text-center">
              Unlinking Processing fee:{" "}
              <span className="roboto-medium">$3</span>
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <button
              onClick={closeUnlinkItemModal}
              className="flex-1 border border-[#0D90C1] text-[#0D90C1] px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleUnlink}
              className="flex-1 btn text-white px-4 py-2 rounded-md"
            >
              Unlink
            </button>
          </div>
          <div className=" mt-12 flex justify-end items-center gap-1 text-end">
            <CiCircleQuestion size={16} />
            <a href="#" className="text-sm text-[#949494]">
              Learn more about unlinking item
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UnlinkItemModal;

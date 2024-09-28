import React, { useState } from "react";
import Modal from "./Modal";
import { useModal } from "../../../context/ModalContext";
import { CiCircleQuestion } from "react-icons/ci";
import { X } from "lucide-react";

const LinkItemModal = () => {
  const { isLinkItemModal, closeLinkItemModal } = useModal();

  const [isFixedSku, setIsFixedSku] = useState(true);

  const handleUnlink = () => {
    console.log("Link button clicked");
    // Add your unlinking logic here
    closeLinkItemModal();
  };

  const handleLinkFloating = () => {
    console.log(" Product link using floating sku");
    closeLinkItemModal();
  };

  const openFloatingSku = () => {
    setIsFixedSku(false);
  };

  const closeFloatingSku = () => {
    setIsFixedSku(true);
  };

  return (
    <div>
      <Modal
        isOpen={isLinkItemModal}
        onClose={closeLinkItemModal}
        className="sm:w-[400px] w-[280px] roboto-regular text-xs"
        mainclass="flex justify-center items-center"
      >
        <p className="flex justify-end cursor-pointer">
          <X onClick={closeLinkItemModal} />
        </p>

        {/* Pass the functions as props to FixedSku and FloatingSku */}
        {isFixedSku ? (
          <FixedSku
            handleUnlink={handleUnlink}
            openFloatingSku={openFloatingSku}
          />
        ) : (
          <FloatingSku
            handleLinkFloating={handleLinkFloating}
            closeFloatingSku={closeFloatingSku}
          />
        )}

        <div className="mt-12 flex justify-end items-center gap-1 text-end">
          <CiCircleQuestion size={16} />
          <a href="#" className="text-sm text-[#949494]">
            Learn more about Tokens
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default LinkItemModal;

const FloatingSku = ({ handleLinkFloating, closeFloatingSku }) => {
  return (
    <div className="px-8">
      <h2 className="pt-8 text-center">
        Use your Floating SKU this month. Link it to any promotion, but only
        once per month.
      </h2>
      <p className="text-center py-2">Are you sure you want to proceed?</p>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleLinkFloating} // Use the passed function
          className="flex-1 btn w-[180px] text-white px-4 py-2 rounded-md"
        >
          Linked as Floating SKU⚡
        </button>
        <p
          onClick={closeFloatingSku} // Use the passed function
          className="underline underline-offset-2 cursor-pointer text-[#0D90C1]"
        >
          Back to Fixed Linked SKU
        </p>
      </div>
    </div>
  );
};

const FixedSku = ({ handleUnlink, openFloatingSku }) => {
  return (
    <div className="px-8">
      <h2 className="pt-8 text-center">
        You're about to link this SKU to your account. Once linked, this action
        is irreversible.
      </h2>
      <p className="text-center py-2">Are you sure you want to proceed?</p>
      <div className="mb-6 mt-4">
        <p className="text-center">
          Utility Token Left: <span className="roboto-medium">3</span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleUnlink} // Use the passed function
          className="flex-1 btn w-[150px] text-white px-4 py-2 rounded-md"
        >
          Linked as Fixed SKU
        </button>
        <button
          onClick={openFloatingSku} // Use the passed function
          className="flex-1 w-[150px] border border-[#0D90C1] text-[#0D90C1] px-3 py-2 rounded-md hover:bg-gray-100"
        >
          Use Floating Token ⚡
        </button>
      </div>
    </div>
  );
};

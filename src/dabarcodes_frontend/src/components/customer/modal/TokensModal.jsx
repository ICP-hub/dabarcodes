import React from "react";
import Modal from "./Modal";
import { useModal } from "../../../context/ModalContext";

const TokensModal = () => {
  const { closeToken, isTokenOpen } = useModal();
  return (
    <Modal
      isOpen={isTokenOpen}
      onClose={closeToken}
      className="flex gap-4 w-[300px] md:w-[450px] h-fit"
      mainclass="flex justify-center items-center md:items-start  md:justify-end  md:pt-24 md:pr-32 "
    >
      <img className="w-12 h-12" src="/succesfull.png" alt="" />

      <div>
        <p className="text-lg font-bold  py-2">Want more utility tokens ? </p>
        <p className="pb-4">
          Utility tokens allow you to link your favorite SKUs and access
          exclusive promotions
        </p>
        <button className="bg-[#0D90C1]  font-medium rounded-md text-white px-12 py-1  ">
          Buy
        </button>
      </div>
    </Modal>
  );
};

export default TokensModal;

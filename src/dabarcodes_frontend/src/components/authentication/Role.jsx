import React from "react";
import Modal from "../../reusable_components/Modal";

import { useModal } from "../../context/ModalContext";

const Role = () => {
  const { closeRoleModal, openConnectWalletModal } = useModal();
  const handleRoleImageClick = (name) => {
    console.log(`Role image clicked: ${name}`);
  };

  const handleRoleButtonClick = () => {
    console.log("Role button clicked");
    closeRoleModal();
    openConnectWalletModal();
  };
  return (
    <Modal
      onClose={closeRoleModal}
      headerText="Choose your Role"
      buttonText="Continue"
      images={[
        {
          src: "/customer.png",
          alt: "Customer",
          name: "Customer",
        },
        {
          src: "/retailer.png",
          alt: "Reatiler",
          name: "Reatiler",
        },
        {
          src: "/supplier.png",
          alt: "Supplier",
          name: "Supplier",
        },
      ]}
      showOr={false}
      showSearch={false}
      onImageClick={handleRoleImageClick}
      onButtonClick={handleRoleButtonClick}
    />
  );
};

export default Role;

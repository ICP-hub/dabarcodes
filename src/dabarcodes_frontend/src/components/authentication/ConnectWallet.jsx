import React from "react";
import Modal from "../../reusable_components/Modal";
import { useModal } from "../../context/ModalContext";
import { useAuthStore } from "../../../../store/authStore";

const ConnectWallet = () => {
  const { closeConnectWalletModal } = useModal();
  const { login } = useAuthStore();
  const handleConnectWalletImageClick = (name) => {
    console.log(`Connect Wallet image clicked: ${name}`);
  };

  const handleConnectWalletButtonClick = () => {
    closeConnectWalletModal();
    login();
  };

  const handleEmailChange = (email) => {
    console.log(`Email entered: ${email}`);
  };
  return (
    <>
      <Modal
        onClose={closeConnectWalletModal}
        headerText="Connect Wallet"
        buttonText="Next"
        images={[
          {
            src: "/login1.png",
            alt: "ICP",
            name: "ICP Login",
          },
          {
            src: "/login2.png",
            alt: "NFID",
            name: "NFID",
          },
          {
            src: "/login3.png",
            alt: "Bifinity",
            name: "Bifinity",
          },
        ]}
        showOr={true}
        showSearch={true}
        onImageClick={handleConnectWalletImageClick}
        onButtonClick={handleConnectWalletButtonClick}
        onEmailChange={handleEmailChange}
      />
    </>
  );
};

export default ConnectWallet;

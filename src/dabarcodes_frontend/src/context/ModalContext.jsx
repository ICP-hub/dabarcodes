import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] =
    useState(false);
  const [isCountryList, setIsCountryList] = useState(false);

  const openRoleModal = () => setIsRoleModalOpen(true);
  const closeRoleModal = () => setIsRoleModalOpen(false);

  const openConnectWalletModal = () => setIsConnectWalletModalOpen(true);
  const closeConnectWalletModal = () => setIsConnectWalletModalOpen(false);

  const openCountryList = () => setIsCountryList(true);
  const closeCountryList = () => setIsCountryList(false);

  //
  const [isTokenOpen, setIsTokenOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isNotificitionsOn, setIsNotificitionsOn] = useState(false);
  const [isCoupanOn, setIsCoupanOn] = useState(false);
  const [linkedSKU, setIsLinkedSKU] = useState(false);

  const openLinkedSKU = () => setIsLinkedSKU(true);
  const closeLinkedSKU = () => setIsLinkedSKU(false);

  const openToken = () => setIsTokenOpen(true);
  const closeToken = () => setIsTokenOpen(false);

  const openProfile = () => setIsProfileModalOpen(true);
  const closeProfile = () => setIsProfileModalOpen(false);

  const openNotificitions = () => setIsNotificitionsOn(true);
  const closeNotificitions = () => setIsNotificitionsOn(false);

  const openCoupan = () => setIsCoupanOn(true);
  const closeCoupan = () => setIsCoupanOn(false);

  //

  return (
    <ModalContext.Provider
      value={{
        isRoleModalOpen,
        isConnectWalletModalOpen,
        //
        openRoleModal,
        closeRoleModal,
        //
        openConnectWalletModal,
        closeConnectWalletModal,
        //
        isTokenOpen,
        isProfileModalOpen,
        isNotificitionsOn,
        isCoupanOn,
        //
        openToken,
        closeToken,
        //
        openProfile,
        closeProfile,
        //
        openNotificitions,
        closeNotificitions,
        //
        openCoupan,
        closeCoupan,
        //
        openLinkedSKU,
        closeLinkedSKU,
        linkedSKU,
        //
        isCountryList,
        openCountryList,
        closeCountryList,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

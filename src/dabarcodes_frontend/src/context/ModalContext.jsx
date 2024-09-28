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
  const [isSingleQR, SetIsSingleQR] = useState(false);
  const [isMultiQR, SetIsMultiQR] = useState(false);
  const [isUnlinkItemModal, SetUnlinkItemModal] = useState(false);
  const [isLinkItemModal, SetLinkItemModal] = useState(false);

  const openToken = () => setIsTokenOpen(true);
  const closeToken = () => setIsTokenOpen(false);

  const openProfile = () => setIsProfileModalOpen(true);
  const closeProfile = () => setIsProfileModalOpen(false);

  const openNotificitions = () => setIsNotificitionsOn(true);
  const closeNotificitions = () => setIsNotificitionsOn(false);

  const openCoupan = () => setIsCoupanOn(true);
  const closeCoupan = () => setIsCoupanOn(false);

  const openQR = () => SetIsSingleQR(true);
  const closeQR = () => SetIsSingleQR(false);

  const openMultiQR = () => SetIsMultiQR(true);
  const closeMultiQR = () => SetIsMultiQR(false);

  const openUnlinkItemModal = () => SetUnlinkItemModal(true);
  const closeUnlinkItemModal = () => SetUnlinkItemModal(false);

  const openLinkItemModal = () => SetLinkItemModal(true);
  const closeLinkItemModal = () => SetLinkItemModal(false);

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

        //
        isCountryList,
        openCountryList,
        closeCountryList,
        //
        isSingleQR,
        openQR,
        closeQR,
        //
        isMultiQR,
        openMultiQR,
        closeMultiQR,
        //
        isUnlinkItemModal,
        openUnlinkItemModal,
        closeUnlinkItemModal,
        //
        isLinkItemModal,
        openLinkItemModal,
        closeLinkItemModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

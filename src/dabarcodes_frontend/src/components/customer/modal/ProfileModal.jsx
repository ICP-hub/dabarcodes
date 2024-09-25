import React from "react";
import { useModal } from "../../../context/ModalContext";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

const ProfileModal = () => {
  const { isProfileModalOpen, closeProfile } = useModal();
  const { logout } = useAuthStore();

  const LogOut = () => {
    logout();
    closeProfile();
  };
  return (
    <Modal
      isOpen={isProfileModalOpen}
      onClose={closeProfile}
      className="flex flex-col gap-2  w-[256px] h-[359px]"
      mainclass="flex justify-center items-center md:items-start  md:justify-end  md:pt-24 md:pr-20 "
    >
      <div
        onClick={closeProfile}
        className="flex flex-col gap-2 text-black font-semibold"
      >
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/subscription">Subscription Management</Link>
        <Link to="/user/my-skus">My Linked SKUs</Link>
        <Link to="/user/settings">Settings</Link>
        <Link to="/user/my-utility-tokens">Utility Tokens</Link>
      </div>
      <button
        onClick={LogOut}
        className="bg-[#E7F8FE] p-2 mt-16 text-black  font-semibold rounded-md hover:border   border-[#0D90C1] "
      >
        Logout
      </button>
    </Modal>
  );
};

export default ProfileModal;

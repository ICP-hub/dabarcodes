import { useState } from "react";
import { useModal } from "../context/ModalContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useAuthStore } from "../store/authStore";

const IconBar = ({ className }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const handleClick = () => {
    if (!isEnlarged) {
      setIsEnlarged(true);
      setTimeout(() => {
        setIsEnlarged(false);
      }, 1000);
    }
  };
  const { openProfile, openToken, openNotificitions, openCountryList } =
    useModal();
  //
  const { selectedCountryCode, selectedCountryName, selectedCountryImage } =
    useAuthStore((state) => ({
      selectedCountryCode: state.selectedCountryCode,
      selectedCountryName: state.selectedCountryName,
      selectedCountryImage: state.selectedCountryImage,
    }));
  return (
    <div className={`hover:cursor-pointer ${className}`}>
      <div className="flex justify-center items-center gap-1">
        <p
          onClick={handleClick}
          className={isEnlarged ? "text-lg" : "text-base"}
        >
          35/95
        </p>
        <img
          onClick={handleClick}
          className={`transition-transform ${
            isEnlarged ? "h-12 w-12" : "h-10 w-10"
          }`}
          src="/succesfull.png"
          alt="Success Icon"
        />
        <MdKeyboardArrowDown
          onClick={openToken}
          className="text-[#171717]"
          size={32}
        />
      </div>

      <div className="pl-8 flex gap-4 justify-center items-center">
        <FaBell
          onClick={openNotificitions}
          size={24}
          className="text-[#0D90C1]"
        />
        <IoMdPerson
          onClick={openProfile}
          size={24}
          className="text-[#0D90C1]"
        />
        <div
          onClick={openCountryList}
          className="flex justify-center items-center gap-1 "
        >
          <img
            className="w-6 rounded-full h-6"
            src={selectedCountryImage}
            alt={selectedCountryName}
          />
          <p>{selectedCountryCode}</p>
          <MdKeyboardArrowDown className="text-[#171717]" size={32} />
        </div>
      </div>
    </div>
  );
};

export default IconBar;

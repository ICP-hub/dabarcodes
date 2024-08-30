import { useState } from "react";
import { useModal } from "../context/ModalContext";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

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
  const { openProfile, openToken, openNotificitions } = useModal();
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

      <div className="pl-8 flex gap-8 justify-center items-center">
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
      </div>
    </div>
  );
};

export default IconBar;

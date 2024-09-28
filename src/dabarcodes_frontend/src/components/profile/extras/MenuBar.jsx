import { useEffect, useRef } from "react";
import { useModal } from "../../../context/ModalContext";

const MenuBar = ({ isOpen, onClose, onOptionSelect }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        className="bg-white rounded-md p-4  font-normal text-base shadow-md w-64"
      >
        <ul className="flex flex-col gap-2">
          <li
            className=" cursor-pointer hover:bg-zinc-100 py-1 px-2 rounded-md "
            onClick={() => onOptionSelect("viewDetails")}
          >
            View Details
          </li>
          <li
            className=" cursor-pointer hover:bg-zinc-100 py-1 px-2 rounded-md  "
            onClick={() => onOptionSelect("unlink")}
          >
            Unlink SKU
          </li>
          <li
            className="hover:bg-zinc-100 py-1 px-2 rounded-md  cursor-pointer "
            onClick={() => onOptionSelect("qrCode")}
          >
            View QR Code
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;

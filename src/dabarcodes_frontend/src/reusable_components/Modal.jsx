import React, { useEffect } from "react";
import { useModal } from "../context/ModalContext";

const Modal = ({
  onClose,
  headerText,
  buttonText,
  images,

  onImageClick,
  onButtonClick,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };
  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-[300px] sm:w-[463px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-5xl"
        >
          &times;
        </button>
        <header className="text-[#0D90C1] pt-16 text-center sm:text-2xl font-extrabold py-4 rounded-t-lg">
          {headerText}
        </header>
        <div className="sm:p-8 p-4 ">
          <table className="w-full border border-black rounded-lg border-separate border-spacing-0">
            <tbody>
              <tr>
                {images.map((img, index) => (
                  <td
                    key={index}
                    className="p-4 flex items-center justify-center border-b border-black cursor-pointer
                    
                    hover:bg-[#B5E8FB]"
                    onClick={() => onImageClick(img.name)}
                  >
                    <img src={img.src} alt={img.alt} className="mr-2" />
                    <span className="font-bold">{img.name}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-8 text-center">
          <button
            onClick={onButtonClick}
            className="bg-[#0D90C1] text-white px-4 py-2 rounded-md w-full"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, className, mainclass }) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  //   } else {
  //     document.body.style.overflow = "unset"; // Restore scrolling when modal is closed
  //   }
  // }, [isOpen]);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className={`fixed inset-0 bg-black bg-opacity-50  z-50 ${mainclass}`}
      onClick={handleOutsideClick}
    >
      <div
        style={{ maxHeight: "90vh", overflowY: "auto" }}
        className={`bg-white p-6 hide-scrollbar   rounded-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

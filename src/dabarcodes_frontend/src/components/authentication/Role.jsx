import React from "react";
import { useModal } from "../../context/ModalContext";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const Role = () => {
  const { closeRoleModal } = useModal();

  const navigate = useNavigate();

  const handleRoleImageClick = (name) => {
    console.log(`Role image clicked: ${name}`);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeRoleModal();
    }
  };

  const handleRoleButtonClick = () => {
    console.log("Role button clicked");
    closeRoleModal();
    navigate("/login");
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-[300px] sm:w-[463px] relative">
        <button
          onClick={closeRoleModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-5xl"
        >
          &times;
        </button>
        <header className="text-2xl roboto-bold  pt-16 text-center  py-4 rounded-t-lg">
          Tell us Who you are
        </header>
        <div className="sm:p-8 p-4 ">
          <table className="w-full border border-black rounded-lg border-separate border-spacing-0">
            <tbody>
              <tr>
                <td
                  className="p-4 flex items-center justify-center border-b border-black cursor-pointer hover:bg-[#B5E8FB]"
                  onClick={() => handleRoleImageClick("Customer")}
                >
                  <img src="/customer.png" alt="Customer" className="mr-2" />
                  <span className="text-xl roboto-bold">Customer</span>
                </td>
              </tr>
              <tr>
                <td
                  className="p-4 flex items-center justify-center border-b border-black cursor-pointer hover:bg-[#B5E8FB]"
                  onClick={() => handleRoleImageClick("Retailer")}
                >
                  <img src="/retailer.png" alt="Retailer" className="mr-2" />
                  <span className="text-xl roboto-bold">Retailer</span>
                </td>
              </tr>
              <tr>
                <td
                  className="p-4 flex items-center justify-center cursor-pointer hover:bg-[#B5E8FB]"
                  onClick={() => handleRoleImageClick("Supplier")}
                >
                  <img src="/supplier.png" alt="Supplier" className="mr-2" />
                  <span className="text-xl roboto-bold">Supplier</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-8 text-center">
          <button
            onClick={handleRoleButtonClick}
            className="btn text-white px-4 py-2 rounded-md w-full"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Role;

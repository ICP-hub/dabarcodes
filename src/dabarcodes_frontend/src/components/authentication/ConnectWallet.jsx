import React from "react";
import { useModal } from "../../context/ModalContext";
import { useNavigate } from "react-router-dom";

const ConnectWallet = () => {
  const { closeConnectWalletModal, openRoleModal } = useModal();

  const handleConnectWalletImageClick = (name) => {
    console.log(`Connect Wallet image clicked: ${name}`);
    closeConnectWalletModal();
    openRoleModal();
  };

  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeConnectWalletModal();
    }
  };

  const GoToLogin = () => {
    navigate("/login");
    closeConnectWalletModal();
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-[300px] sm:w-[463px] relative">
        <button
          onClick={closeConnectWalletModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-5xl"
        >
          &times;
        </button>
        <header className="text-[#0D90C1] pt-16 text-center sm:text-2xl font-extrabold py-4 rounded-t-lg">
          Connect Wallet
        </header>
        <div className="sm:p-8 p-4 ">
          <table className="w-full border border-black rounded-lg border-separate border-spacing-0">
            <tbody>
              <tr>
                <td
                  className="p-4 flex items-center justify-center border-b border-black cursor-pointer hover:bg-[#B5E8FB]"
                  onClick={() => handleConnectWalletImageClick("ICP Login")}
                >
                  <img src="/login1.png" alt="ICP" className="mr-2" />
                  <span className="font-bold">ICP Login</span>
                </td>
              </tr>
              <tr>
                <td
                  className="p-4 flex items-center justify-center border-b border-black cursor-pointer hover:bg-[#B5E8FB]"
                  onClick={() => handleConnectWalletImageClick("NFID")}
                >
                  <img src="/login2.png" alt="NFID" className="mr-2" />
                  <span className="font-bold">NFID</span>
                </td>
              </tr>
              <tr>
                <td
                  className="p-4 flex items-center justify-center cursor-pointer hover:bg-[#B5E8FB]"
                  onClick={() => handleConnectWalletImageClick("Bifinity")}
                >
                  <img src="/login3.png" alt="Bifinity" className="mr-2" />
                  <span className="font-bold">Bifinity</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mb-8 space-y-8">
          <p className="text-sm text-[#454545]">
            Already have an account{" "}
            <span onClick={GoToLogin} className="text-[#0673C1] cursor-pointer">
              Log in
            </span>
          </p>
          <p className="text-xs ">
            By connecting your wallet, you confirm that you have read
            <br /> and agree to our{" "}
            <span className="text-[#0673C1] cursor-pointer">
              Terms and Conditions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;

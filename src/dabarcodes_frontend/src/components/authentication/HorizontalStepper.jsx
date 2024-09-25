import { IoMdCheckmark } from "react-icons/io";
import { FaUser, FaEnvelope, FaInfoCircle, FaLock } from "react-icons/fa";

const icons = [
  <FaUser size={20} />,
  <FaEnvelope size={20} />,
  <FaInfoCircle size={20} />,
  <FaLock size={20} />,
];

const HorizontalStepper = ({ currentStep }) => {
  return (
    <div className="md:hidden relative w-full  bg-[#B5E8FB] p-4 rounded-lg">
      <h1 className="text-[#000000] font-bold text-xl text-center mb-4">
        Create Account
      </h1>
      <div className="relative w-full   flex items-center justify-between ">
        {[
          "Personal Details",
          "Contact Details",
          "Additional Details",
          "Privacy Preferences",
          "Create Password",
        ].map((label, index, array) => (
          <div key={index} className="flex-1 flex items-center relative">
            {/* Circle with number or checkmark */}
            <div
              className={`flex  items-center justify-center w-8 h-8 rounded-full z-10 ${
                currentStep > index
                  ? "bg-[#0D90C1] text-white"
                  : currentStep === index + 1
                  ? "bg-[#0D90C1] text-white"
                  : "bg-gray-300 text-[#949494]"
              }`}
            >
              {currentStep > index + 1 ? <IoMdCheckmark /> : index + 1}
            </div>

            {/* Line between steps */}
            {index < array.length - 1 && (
              <div className="flex-1 h-1 bg-gray-300">
                <div
                  className={`h-full ${
                    currentStep > index ? "bg-[#0D90C1]" : "bg-gray-300"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalStepper;

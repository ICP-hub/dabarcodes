import { IoMdCheckmark } from "react-icons/io";
import Logo from "../../reusable_components/Logo";

const VerticalStepper = ({ currentStep }) => {
  return (
    <div className="w-[350px] hidden md:block relative  bg-[#B5E8FB] rounded-lg">
      <div className="ml-8 mr-8 mt-8">
        <Logo />
      </div>
      <h1 className="ml-8 mt-8  text-[#000000] font-bold text-xl">
        Create Account
      </h1>
      <ul className="list-none relative ml-8 mt-8 mr-8  ">
        {[
          "Personal Details",
          "Contact Details",
          "Additional Details",
          "Privacy Preferences",
          "Create Password",
        ].map((label, index) => (
          <li key={index} className="flex items-center mb-8 relative">
            {/* Circle with number or checkmark */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep > index
                  ? "bg-[#0D90C1] text-white"
                  : currentStep === index + 1
                  ? "bg-[#0D90C1] text-white"
                  : "bg-gray-300 text-[#949494]"
              }`}
            >
              {currentStep > index + 1 ? <IoMdCheckmark /> : index + 1}
            </div>
            {/* Step Label */}
            <span
              className={` ${
                currentStep > index ? "text-[#000000]" : "text-[#949494]"
              } ml-4  `}
            >
              {label}
            </span>
            {/* Line between steps */}
            {index !== 4 && (
              <div
                className={`absolute w-px top-10 left-3.5 transform -translate-x-1/2 z-0 ${
                  currentStep > index + 1 ? "bg-[#0D90C1]" : "bg-gray-400"
                } h-full`}
              ></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalStepper;

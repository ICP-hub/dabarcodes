import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Step1 from "./Forms/Step1";
import VerticalStepper from "./VerticalStepper";
import HorizontalStepper from "./HorizontalStepper";
import Step2 from "./Forms/Step2";
import Step3 from "./Forms/Step3";
import Step4 from "./Forms/Step4";
import Step5 from "./Forms/Step5";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},

    finalDetails: {},
  });

  const totalSteps = 5;

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, forms.length));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = () => {
    console.log(formData);

    alert("Form submitted! Check the console.");
  };

  const forms = [
    <Step1
      formData={formData}
      setFormData={setFormData}
      handleNextStep={handleNextStep}
      currentStep={currentStep}
      totalSteps={totalSteps}
    />,
    <Step2
      formData={formData}
      setFormData={setFormData}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
    />,
    <Step3
      formData={formData}
      setFormData={setFormData}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
    />,
    <Step4
      formData={formData}
      setFormData={setFormData}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
    />,
    <Step5
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      handlePrevStep={handlePrevStep}
      currentStep={currentStep}
      totalSteps={totalSteps}
    />,
  ];

  return (
    <div className="container mx-auto  p-6">
      <div className="flex gap-2 ">
        <VerticalStepper currentStep={currentStep} />

        <div className="  w-full p-4">
          <HorizontalStepper currentStep={currentStep} />

          {forms[currentStep - 1]}

          {/* <div
            className={`mt-4 flex ${
              currentStep > 1 ? "justify-between" : "justify-end"
            } `}
          >
            {currentStep > 1 && (
              <button
                onClick={handlePrevStep}
                className="border border-[#0D90C1] px-8 p-2 rounded"
              >
                Back
              </button>
            )}
            {currentStep < forms.length ? (
              <button
                onClick={handleNextStep}
                className="bg-[#0D90C1] text-white px-8 p-2 rounded"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-[#0D90C1] text-white px-8 p-2 rounded"
              >
                Submit
              </button>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;

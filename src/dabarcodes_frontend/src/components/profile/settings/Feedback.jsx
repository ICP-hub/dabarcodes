import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
const FeedbackOption = ({ text, onSelect, isSelected }) => (
  <div
    className={`text-[#646464] w-fit px-6  border shadow-lg justify-center rounded-lg flex flex-col items-center py-6 cursor-pointer ${
      isSelected ? "border-[#0D90C1] border-2" : "border-gray-300"
    }`}
    onClick={() => onSelect(text)}
  >
    <img src="laptop.png" alt={text} />
    <p className="roboto-general text-sm">{text}</p>
  </div>
);
const Feedback = ({ handleComponentSwitch }) => {
  // Initial form data setup
  const initialFormData = {
    selectedFeedback: "",
    additionalFeedback: "",
    isContactAllowed: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle feedback selection
  const handleFeedbackChange = (text) => {
    setFormData((prev) => ({ ...prev, selectedFeedback: text }));
  };

  // Handle textarea change
  const handleTextareaChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      additionalFeedback: event.target.value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      isContactAllowed: event.target.checked,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting form data:", formData);

    // setFormData(initialFormData);
  };

  return (
    <>
      <div className="space-y-4 ">
        <div className="flex gap-4 text-balance">
          <IoArrowBack
            className="cursor-pointer"
            onClick={() => handleComponentSwitch("settings")}
            size={24}
          />
          <p>Back to General Settings</p>
        </div>
        <p className="roboto-bold md:text-2xl text-xl">Support and Feedback</p>
        <p className="text-xl roboto-bold">Feedback</p>
        <p className="text-base roboto-medium">
          What do you think of the website daBARDODES?
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {["Terrible", "Bad", "Okay", "Good", "Amazing"].map((option) => (
            <FeedbackOption
              key={option}
              text={option}
              onSelect={handleFeedbackChange}
              isSelected={formData.selectedFeedback === option}
            />
          ))}
        </div>

        <p className="text-sm roboto-medium">Additional Feedback?</p>

        <textarea
          className="border resize-none p-[14px] h-24 w-full  rounded-md ml-2"
          placeholder="Write Here.."
          value={formData.additionalFeedback}
          onChange={handleTextareaChange}
        ></textarea>

        <div className="flex items-center mt-2">
          <input
            id="helper-checkbox"
            aria-describedby="helper-checkbox-text"
            type="checkbox"
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-2xl"
            style={{ accentColor: "#0D90C1" }}
            checked={formData.isContactAllowed}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="helper-checkbox"
            className="ms-2  roboto-medium text-sm"
          >
            I may be contacted about this feedback.{" "}
            <span className="text-[#0673C1]">Privacy Policy</span>
          </label>
        </div>

        <div className="w-fit rounded-md mt-1 text-white bg-[#0D90C1]">
          <button className="px-8 py-1" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Feedback;

import React, { useState } from "react";
import { deviceData } from "../../customer/giftCarddata";
import { languageOptions, privacyPreferences } from "../extras/data";
import { GrFormNext } from "react-icons/gr";

const GeneralSeetings = ({ handleComponentSwitch }) => {
  const initialFormData = {
    language: "",
    privacy: "",
    emailNotifications: false,
    mobileNotifications: false,
    dataPrivacy: false,
    emailOptions: {
      allSKUs: false,
      skusOnly: false,
      importantRemindersOnly: false,
    },
    mobileOptions: {
      allSKUs: false,
      skusOnly: false,
      importantRemindersOnly: false,
    },
  };

  // State management
  const [formData, setFormData] = useState(initialFormData);
  const hasChanges =
    JSON.stringify(formData) !== JSON.stringify(initialFormData);

  // Handle select changes
  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle switch changes
  const handleSwitchChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
      [`${field}Options`]: {
        allSKUs: false,
        skusOnly: false,
        importantRemindersOnly: false,
      },
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (field, option) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], [option]: !prev[field][option] },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting form data:", formData);
    setFormData(initialFormData);
  };

  return (
    <main>
      <div className="mb-4 flex-col flex gap-4">
        <div className="flex justify-between items-center">
          <p className="md:text-2xl text-xl roboto-bold ">Settings</p>
          {hasChanges && (
            <button
              className="mt-4 px-4 py-1 btn text-white rounded"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          )}
        </div>
        <p className="md:text-xl text-base  roboto-bold ">General Settings</p>
        <p className="text-base roboto-bold ">Language Preference</p>
      </div>

      <div className="mb-4">
        <label htmlFor="language-select" className="text-sm roboto-medium">
          Select Your Preferred Language
        </label>
        <select
          id="language-select"
          className="mt-1 block w-full p-2 border border-gray-300 rounded appearance-none"
          value={formData.language}
          onChange={(e) => handleSelectChange("language", e.target.value)}
        >
          <option value="">Select Language</option>
          {languageOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-6 my-4">
        <Switch
          id="email-notifications-switch"
          text="Email Notifications"
          checked={formData.emailNotifications}
          onChange={() => handleSwitchChange("emailNotifications")}
        />
        <Checkbox
          id="email-options-all-skUs"
          label="All SKUs and Reminders"
          text="Notify me of all SKUs and reminders that have been created"
          checked={formData.emailOptions.allSKUs}
          onChange={() => handleCheckboxChange("emailOptions", "allSKUs")}
          disabled={!formData.emailNotifications}
        />
        <Checkbox
          id="email-options-skus-only"
          label="SKUs only"
          text="Notify me of SKUs only"
          checked={formData.emailOptions.skusOnly}
          onChange={() => handleCheckboxChange("emailOptions", "skusOnly")}
          disabled={!formData.emailNotifications}
        />
        <Checkbox
          id="email-options-important-reminders-only"
          label="Important Reminders only"
          text="Notify me of important reminders only"
          checked={formData.emailOptions.importantRemindersOnly}
          onChange={() =>
            handleCheckboxChange("emailOptions", "importantRemindersOnly")
          }
          disabled={!formData.emailNotifications}
        />
      </div>

      {/* Mobile Notifications */}
      <div className="flex flex-col gap-6 my-4">
        <Switch
          id="mobile-notifications-switch"
          text="Mobile Notifications"
          checked={formData.mobileNotifications}
          onChange={() => handleSwitchChange("mobileNotifications")}
        />
        <Checkbox
          id="mobile-options-all-skUs"
          label="All SKUs and Reminders"
          text="Notify me of all SKUs and reminders that have been created"
          checked={formData.mobileOptions.allSKUs}
          onChange={() => handleCheckboxChange("mobileOptions", "allSKUs")}
          disabled={!formData.mobileNotifications}
        />
        <Checkbox
          id="mobile-options-skus-only"
          label="SKUs only"
          text="Notify me of SKUs only"
          checked={formData.mobileOptions.skusOnly}
          onChange={() => handleCheckboxChange("mobileOptions", "skusOnly")}
          disabled={!formData.mobileNotifications}
        />
        <Checkbox
          id="mobile-options-important-reminders-only"
          label="Important Reminders only"
          text="Notify me of important reminders only"
          checked={formData.mobileOptions.importantRemindersOnly}
          onChange={() =>
            handleCheckboxChange("mobileOptions", "importantRemindersOnly")
          }
          disabled={!formData.mobileNotifications}
        />
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="mb-4 flex-col flex gap-4">
        <p className="text-lg roboto-bold ">Privacy and Security</p>
        <p className="text-base roboto-bold ">Login Activity</p>
        <Device devices={deviceData} />
      </div>

      <div>
        <Switch
          id="data-privacy-switch"
          text="Data Privacy"
          checked={formData.dataPrivacy}
          onChange={() => handleSwitchChange("dataPrivacy")}
        />
        <div className="mb-4 mt-4">
          <label
            htmlFor="privacy-select"
            className="text-sm roboto-medium required"
          >
            Privacy Preference
          </label>
          <select
            id="privacy-select"
            className={`mt-1 appearance-none block w-full p-2 border border-gray-300 rounded ${
              !formData.dataPrivacy ? "cursor-not-allowed bg-gray-100" : ""
            }`}
            value={formData.privacy}
            onChange={(e) => handleSelectChange("privacy", e.target.value)}
            disabled={!formData.dataPrivacy}
          >
            <option value="">Select Privacy</option>
            {privacyPreferences.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className=" space-y-4  roboto-bold">
        <p className="text-xl ">Support and Feedback</p>

        <div
          onClick={() => handleComponentSwitch("feedback")}
          className="cursor-pointer flex justify-between items-center"
        >
          <p className="text-base">Feedback</p>
          <GrFormNext size={24} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-start justify-center items-center gap-2 space-x-4 mt-4">
        <div className="w-fit rounded-sm mt-1 flex  text-white bg-[#0D90C1]">
          <button className="px-8 py-1 ">Logout</button>
        </div>
        <div className="w-fit rounded-sm mt-1 border text-[#0D90C1] border-[#0D90C1]">
          <button className="px-4 py-1">Logout from all devices</button>
        </div>
      </div>
    </main>
  );
};

export default GeneralSeetings;

const Checkbox = ({ id, label, text, checked, onChange, disabled }) => {
  return (
    <div className="flex">
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={`${id}-text`}
          type="checkbox"
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded-2xl"
          style={{ accentColor: "#0D90C1" }}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
      <div className="ms-2 text-sm ">
        <label htmlFor={id} className="roboto-medium text-sm">
          {label}
        </label>
        <p id={`${id}-text`} className="roboto-regular text-sm text-[#646464]">
          {text}
        </p>
      </div>
    </div>
  );
};

const Switch = ({ id, text, checked, onChange }) => {
  return (
    <div className="flex justify-between">
      <p className="text-base roboto-bold ">{text}</p>
      <label
        htmlFor={id}
        className="relative inline-flex cursor-pointer items-center"
      >
        <input
          id={id}
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={onChange}
        />
        <div className="peer h-6 w-11 rounded-full border bg-[#B5E8FB] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0D90C1] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
      </label>
    </div>
  );
};

const Device = ({ devices }) => {
  return (
    <div className="space-y-4">
      {devices.map((device, index) => (
        <div
          key={index}
          className="border  font-normal text-sm shadow-lg rounded-lg flex justify-between px-4 py-4"
        >
          <div className="flex gap-2">
            <img src={device.imageSrc} alt="Device" className="" />
            <div className="md:whitespace-nowrap">
              <p className="text-base roboto-bold">{device.sessionInfo}</p>
              <p className="text-[#646464] text-sm roboto-regular">
                Login by: {device.loginBy}
              </p>
            </div>
          </div>

          <div className="text-right text-sm roboto-regular">
            <p>{device.operatingSystem}</p>
            <p>{device.location}</p>
            <p>{device.browser}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

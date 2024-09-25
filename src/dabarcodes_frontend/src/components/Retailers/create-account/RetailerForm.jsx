import { useEffect, useState } from "react";
import Logo from "../../../reusable_components/Logo";
import { useForm } from "react-hook-form";
import {
  cityOptions,
  countryOptions,
  stateOptions,
} from "../../profile/extras/data";

const RetailerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    personalInfo: {},
  });

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, forms.length));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const forms = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} />,
  ];
  const handleSubmit = () => {
    console.log(formData);

    alert("Form submitted! Check the console.");
  };
  return (
    <>
      <div className="h-[100px] flex flex-col w-fit justify-center items-center p-8 mx-auto mt-8  md:hidden   bg-[#B5E8FB] rounded-lg">
        <div className="ml-8 mr-8 ">
          <Logo />
        </div>
        <h1 className="ml-8   text-[#000000] font-bold text-xl">
          Become Our Retailer
        </h1>
      </div>
      <div className="flex justify-center md:justify-start mx-auto  p-6">
        <Sidebar />
        {/*  */}

        {/*  */}
        <div className="">
          {forms[currentStep - 1]}
          <div
            className={`mt-4 flex ${
              currentStep > 1 ? "justify-between" : "justify-end"
            } `}
          >
            {currentStep > 1 && (
              <button
                onClick={handlePrevStep}
                className="border border-[#0D90C1] px-8 md:ml-4 p-2 rounded"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default RetailerForm;

const Sidebar = () => {
  return (
    <div className=" hidden md:block w-[250px]    bg-[#B5E8FB] rounded-lg">
      <div className="ml-8 mr-8 mt-8">
        <Logo />
      </div>
      <h1 className="ml-8 mt-8  text-[#000000] font-bold text-xl">
        Become Our Retailer
      </h1>
      <img src="extra.png" alt="" className="p-4 object-contain" />
    </div>
  );
};

const Step1 = ({ formData, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    setFormData((prevData) => ({ ...prevData, personalInfo: data }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [name]: value,
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h3 className="font-bold text-xl mb-4">Personal Information</h3>
      <div className="md:flex gap-8">
        <div className="mb-4 md:w-2/5">
          <label className="block text-sm font-medium mb-1">Pronouns*</label>
          <select
            {...register("pronouns", { required: "This field is required" })}
            name="pronouns"
            onChange={handleChange}
            value={formData.personalInfo.pronouns || ""}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="He/Him">He/Him</option>
            <option value="She/Her">She/Her</option>
            <option value="They/Them">They/Them</option>
            <option value="Other">Other</option>
          </select>
          {errors.pronouns && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pronouns.message}
            </p>
          )}
        </div>

        <div className="mb-4 md:w-3/5">
          <label className="block text-sm font-medium mb-1">Name*</label>
          <input
            {...register("name", { required: "Name is required" })}
            name="name"
            onChange={handleChange}
            value={formData.personalInfo.name || ""}
            className="block w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
      </div>
      <h3 className="font-bold text-xl mb-4">Store Head Office Address</h3>
      <div className="md:grid grid-cols-2 gap-4">
        {/* Country */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Country*</label>
          <select
            {...register("country", { required: "Country is required" })}
            name="country"
            onChange={handleChange}
            value={formData.personalInfo.country || ""}
            className="p-2 border rounded"
          >
            <option value="">Select Country</option>
            {countryOptions.map((country, index) => (
              <option key={index} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">State*</label>
          <select
            {...register("state", { required: "State is required" })}
            name="state"
            onChange={handleChange}
            value={formData.personalInfo.state || ""}
            className="p-2 border rounded"
          >
            <option value="">Select State</option>
            {stateOptions.map((state, index) => (
              <option key={index} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
          )}
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">City*</label>
          <select
            {...register("city", { required: "City is required" })}
            name="city"
            onChange={handleChange}
            value={formData.personalInfo.city || ""}
            className="p-2 border rounded"
          >
            <option value="">Select City</option>
            {cityOptions.map((city, index) => (
              <option key={index} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Postal Code */}
        <div className="flex flex-col">
          <label className="text-sm font-medium">Postal Code*</label>
          <input
            type="text"
            {...register("postalCode", { required: "Postal Code is required" })}
            name="postalCode"
            onChange={handleChange}
            value={formData.personalInfo.postalCode || ""}
            className="p-2 border rounded"
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>
      <FileUploadComponent />
    </form>
  );
};

import { Check, X } from "lucide-react";

const FileUploadComponent = () => {
  const [showAddOutletsModal, setShowAddOutletsModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showUploadCSVModal, setShowUploadCSVModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log("Uploading file:", selectedFile);
    // Reset state after upload
    setSelectedFile(null);
    setShowUploadCSVModal(false);
  };

  return (
    <div className="p-4">
      <div className="shadow-lg rounded-md border flex justify-center items-center flex-col py-8">
        <button
          onClick={() => setShowAddOutletsModal(true)}
          className="text-sm px-2  border x-4 py-2 rounded"
        >
          Upload Image
        </button>
        <p className="text-xs font-normal Roboto px-8 py-2 ">
          File should be in the .png, .jpg, .svg format with max file size of
          5mb.
        </p>
      </div>

      {/* Add Outlets Modal */}
      {showAddOutletsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg items-center justify-between ">
            <div className="flex gap-4  ">
              <h2 className="text-lg font-semibold pb-4 ">
                Do you want to add your store outlets?
              </h2>
              <button
                className="pb-4"
                onClick={() => setShowAddOutletsModal(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => {
                  setShowAddOutletsModal(false);
                  setShowUploadModal(true);
                }}
                className="w-[100px] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-[#0D90C1] hover:bg-[#0A6A9A] cursor-pointer  "
              >
                Yes
              </button>

              <button
                onClick={() => setShowAddOutletsModal(false)}
                className="w-[100px] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#0D90C1] border  rounded-lg border-[#0D90C1]  cursor-pointer  "
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload File Modal */}
      {showUploadModal && (
        <div className="fixed p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base  font-semibold">
                Upload File for Store Information
              </h2>
              <button onClick={() => setShowUploadModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 p-8 text-center">
              <button
                onClick={() => setShowUploadCSVModal(true)}
                className="w-[152px] inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-[#0D90C1] hover:bg-[#0A6A9A] cursor-pointer  "
              >
                Upload File
              </button>
            </div>
            <a href="#" className="text-[#0D90C1] mt-2 inline-block">
              Download Format
            </a>
          </div>
        </div>
      )}

      {/* Upload CSV Modal */}
      {showUploadCSVModal && (
        <div className="fixed p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white flex flex-col  p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold">
                Upload CSV File for Store Information
              </h2>
              <button onClick={() => setShowUploadCSVModal(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="border-2 border-dashed border-gray-300 p-8 text-center">
              <input
                type="file"
                accept=".csv"
                onChange={handleFileChange}
                className="hidden"
                id="csvFileInput"
              />
              <label
                htmlFor="csvFileInput"
                className=" inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border  rounded-lg border-gray-400  cursor-pointer  "
              >
                Upload File
              </label>
            </div>
            {selectedFile && (
              <div className="mt-4 flex items-center justify-between">
                <span>{selectedFile.name}</span>
                <button onClick={() => setSelectedFile(null)}>
                  <X size={16} />
                </button>
              </div>
            )}
            <a href="#" className="text-[#0D90C1] mt-2 inline-block">
              Download CSV Format
            </a>
            <button
              onClick={handleUpload}
              className="bg-[#0D90C1] w-fit text-white px-4 py-2 rounded mt-4 "
              disabled={!selectedFile}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Step2 = ({ formData, setFormData }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    const lengthCriteria = password && password.length >= 12;
    const uppercaseCriteria = password && /[A-Z]/.test(password);
    const lowercaseCriteria = password && /[a-z]/.test(password);
    const numberCriteria = password && /[0-9]/.test(password);
    const specialCharCriteria =
      password && /[@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordCriteria({
      length: lengthCriteria,
      uppercase: uppercaseCriteria,
      lowercase: lowercaseCriteria,
      number: numberCriteria,
      specialChar: specialCharCriteria,
    });

    if (password && confirmPassword) {
      setPasswordError(
        password !== confirmPassword ? "Passwords do not match" : ""
      );
    }

    // Update formData in the parent whenever password or confirm password changes
    setFormData((prev) => ({
      ...prev,
      password: password,
      confirmPassword: confirmPassword,
    }));
  }, [password, confirmPassword, setFormData]);

  const handlePasswordChange = (e) => {
    setValue("password", e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setValue("confirmPassword", e.target.value);
  };

  return (
    <form className="px-8">
      <h3 className="font-bold text-xl mb-4">Setup Your Password</h3>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium">Password*</label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
          })}
          name="password"
          className="p-2 border rounded"
          style={{ borderColor: "#0D90C1" }}
          onChange={handlePasswordChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-medium">Confirm Password*</label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Confirm Password is required",
          })}
          name="confirmPassword"
          className="p-2 border rounded"
          style={{ borderColor: "#0D90C1" }}
          onChange={handleConfirmPasswordChange}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
        {passwordError && (
          <p className="text-red-500 text-sm mt-1">{passwordError}</p>
        )}
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword((prev) => !prev)}
          className="mr-2"
        />
        <label htmlFor="showPassword" className="text-sm font-medium">
          Show Password
        </label>
      </div>

      <div className="mt-2 text-sm">
        <p
          className={`flex items-center ${
            passwordCriteria.length ? "text-green-500" : "text-red-500"
          }`}
        >
          {passwordCriteria.length ? <Check size={20} /> : "•"} At least 12
          characters
        </p>
        <p
          className={`flex items-center ${
            passwordCriteria.uppercase ? "text-green-500" : "text-red-500"
          }`}
        >
          {passwordCriteria.uppercase ? <Check size={20} /> : "•"} Include both
          uppercase letters
        </p>
        <p
          className={`flex items-center ${
            passwordCriteria.lowercase ? "text-green-500" : "text-red-500"
          }`}
        >
          {passwordCriteria.lowercase ? <Check size={20} /> : "•"} Include both
          lowercase letters
        </p>
        <p
          className={`flex items-center ${
            passwordCriteria.number ? "text-green-500" : "text-red-500"
          }`}
        >
          {passwordCriteria.number ? <Check size={20} /> : "•"} Include at least
          one number (0-9)
        </p>
        <p
          className={`flex items-center ${
            passwordCriteria.specialChar ? "text-green-500" : "text-red-500"
          }`}
        >
          {passwordCriteria.specialChar ? <Check size={20} /> : "•"} Include at
          least one special character (@, #, $, etc.)
        </p>
      </div>
    </form>
  );
};

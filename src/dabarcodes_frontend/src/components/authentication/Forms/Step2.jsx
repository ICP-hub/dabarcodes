import { useEffect } from "react";
import { useForm } from "react-hook-form";
const dynamicData = {
  countries: [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
  ],
  states: ["California", "Texas", "New York", "Florida", "Illinois"],
  cities: ["Los Angeles", "Houston", "New York City", "Miami", "Chicago"],
  timeAtAddressOptions: [
    "Less than a year",
    "1-2 years",
    "3-5 years",
    "More than 5 years",
  ],
  shoppingPreferences: ["Online Shopping", "In-Store Shopping", "Both", "None"],
};

const Step2 = ({ formData, setFormData, handleNextStep, handlePrevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!formData.personalInfo) {
      setFormData({
        ...formData,
        personalInfo: {
          phoneNumber: "",
          email: "",
          preferredMode: "",
          country: "",
          state: "",
          city: "",
          postalCode: "",
          timeAtAddress: "",
          shoppingPreference: "",
          influencerReferralId: "",
        },
      });
    }
  }, [formData, setFormData]);

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        ...data,
      },
    }));
    handleNextStep();
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

  const handleCheck = () => {
    handleSubmit(onSubmit)(); // Validate and call onSubmit if valid
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        {/* Contact Information */}
        <h3 className="text-base roboto-bold mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className=" required text-sm roboto-medium">
              Phone Number
            </label>

            <input
              type="text"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              name="phoneNumber"
              onChange={handleChange}
              value={formData.personalInfo.phoneNumber || ""}
              className="p-2 border rounded"
            />
            {/*  */}
            <div className="flex items-center  mt-2">
              <input
                type="radio"
                {...register("preferredMode", {
                  required: "Please select a preferred mode",
                })}
                name="preferredMode"
                value="phone"
                onChange={handleChange}
                checked={formData.personalInfo.preferredMode === "phone"}
                className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#0D90C1] checked:border-[#0D90C1] checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:content-[''] checked:after:block checked:after:m-0.5"
              />

              <label className="text-sm roboto-regular text-[#646464s] ml-2">
                Preferred Mode of Communication
              </label>
            </div>
            {/*  */}
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
            {/*  */}
            {errors.preferredMode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.preferredMode.message}
              </p>
            )}

            {/*  */}
          </div>
          {/*  */}
          <div className="flex flex-col">
            <label className="text-sm roboto-medium required ">
              Email address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email address is required" })}
              name="email"
              onChange={handleChange}
              value={formData.personalInfo.email || ""}
              className="p-2 border rounded"
            />
            <div className="flex items-center mt-2">
              <input
                type="radio"
                {...register("preferredMode", {
                  required: "Please select a preferred mode",
                })}
                name="preferredMode"
                value="email"
                onChange={handleChange}
                checked={formData.personalInfo.preferredMode === "email"}
                className="appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-[#0D90C1] checked:border-[#0D90C1] checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full checked:after:content-[''] checked:after:block checked:after:m-0.5"
              />
              <label className="text-sm roboto-regular text-[#646464s] ml-2">
                Preferred Mode of Communication
              </label>
            </div>
            {/*  */}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Address Information */}
        <h3 className="text-base roboto-bold mb-4">Address Information</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {/*country  */}
          <div className="flex flex-col">
            <label className="required text-sm roboto-medium">Country</label>
            <select
              {...register("country", { required: "Country is required" })}
              name="country"
              onChange={handleChange}
              value={formData.personalInfo.country || ""}
              className="p-2 border rounded"
            >
              <option value="">Select Country</option>
              {dynamicData.countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
          {/* state */}
          <div className="flex flex-col">
            <label className="required text-sm roboto-medium">State</label>
            <select
              {...register("state", { required: "State is required" })}
              name="state"
              onChange={handleChange}
              value={formData.personalInfo.state || ""}
              className="p-2 border rounded"
            >
              <option value="">Select State</option>
              {dynamicData.states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.state.message}
              </p>
            )}
          </div>
          {/*  city*/}
          <div className="flex flex-col">
            <label className=" required text-sm roboto-medium">City</label>
            <select
              {...register("city", { required: "City is required" })}
              name="city"
              onChange={handleChange}
              value={formData.personalInfo.city || ""}
              className="p-2 border rounded"
            >
              <option value="">Select City</option>
              {dynamicData.cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>
          {/* postal code */}
          <div className="flex flex-col">
            <label className=" required text-sm roboto-medium">
              Postal Code
            </label>
            <input
              type="text"
              {...register("postalCode", {
                required: "Postal Code is required",
              })}
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
          {/* time */}

          <div className="flex flex-col mb-4">
            <label className="required text-sm roboto-medium">
              Time at this address
            </label>
            <select
              {...register("timeAtAddress", {
                required: "This field is required",
              })}
              name="timeAtAddress"
              onChange={handleChange}
              value={formData.personalInfo.timeAtAddress || ""}
              className="p-2 border rounded"
            >
              <option value="">Select Time</option>
              {dynamicData.timeAtAddressOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.timeAtAddress && (
              <p className="text-red-500 text-sm mt-1">
                {errors.timeAtAddress.message}
              </p>
            )}
          </div>
          {/*  */}
        </div>

        {/* Preferences and Referral Information */}
        <h3 className="text-base roboto-bold mb-4">
          Preferences and Referral Information
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="text-sm roboto-medium required">
              Shopping Preferences
            </label>
            <select
              {...register("shoppingPreference", {
                required: "Shopping preference is required",
              })}
              name="shoppingPreference"
              onChange={handleChange}
              value={formData.personalInfo.shoppingPreference || ""}
              className="p-2 border rounded"
            >
              <option value="">Select Shopping Preference</option>
              {dynamicData.shoppingPreferences.map((preference, index) => (
                <option key={index} value={preference}>
                  {preference}
                </option>
              ))}
            </select>
            {errors.shoppingPreference && (
              <p className="text-red-500 text-sm mt-1">
                {errors.shoppingPreference.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm roboto-medium">
              Influencer Referral ID
            </label>
            <input
              type="text"
              {...register("influencerReferralId")}
              name="influencerReferralId"
              onChange={handleChange}
              value={formData.personalInfo.influencerReferralId || ""}
              className="p-2 border rounded"
            />
          </div>
        </div>
      </form>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevStep}
          className="border border-[#0D90C1] px-8 p-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleCheck}
          className="btn text-white px-8 p-2 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step2;

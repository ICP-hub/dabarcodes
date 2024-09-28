import { useForm, useWatch } from "react-hook-form";
import { useEffect } from "react";

const Step4 = ({ formData, setFormData, handleNextStep, handlePrevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: formData.finalDetails || {},
  });
  const privacyPreferences = ["Public", "Friends Only", "Only Me", "Custom"];

  const formValues = useWatch({ control });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, finalDetails: formValues }));
  }, [formValues, setFormData]);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    setFormData((prevData) => ({ ...prevData, finalDetails: data }));
    handleNextStep();
  };

  const handleCheck = () => {
    handleSubmit(onSubmit)(); // Validate and call onSubmit if valid
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <h3 className="roboto-bold text-base mb-4">Privacy Settings</h3>

        {/* Privacy Preference Dropdown */}
        <div className="mb-4 w-[280px] pr-8">
          <label className="block required text-sm roboto-medium mb-1">
            Privacy Preference
          </label>
          <select
            {...register("privacyPreference", {
              required: "Please select a preference",
            })}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select</option>
            {privacyPreferences.map((preference, index) => (
              <option key={index} value={preference}>
                {preference}
              </option>
            ))}
          </select>
          {errors.privacyPreference && (
            <p className="text-red-500 text-sm mt-1">
              {errors.privacyPreference.message}
            </p>
          )}
        </div>

        {/* Privacy Checkboxes */}
        <div className="mb-4">
          <div className="space-y-2">
            <div>
              <input
                type="checkbox"
                {...register("permissions.nameRelatedLogons")}
                className="h-4 w-4 accent-[#0D90C1] rounded-md"
              />
              <label className="ml-2 text-balance text-base roboto-regular text-[#4B5565] ">
                Give Permission to name related logons
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                {...register("permissions.verifyLogonPermissions")}
                className="h-4 w-4 accent-[#0D90C1] rounded-md"
              />
              <label className="ml-2 text-balance text-base roboto-regular text-[#4B5565] ">
                Send confirmation email to verify logon permissions.
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                {...register("permissions.verifyAnonymity")}
                className="h-4 w-4 accent-[#0D90C1] rounded-md"
              />
              <label className="ml-2 text-balance text-base roboto-regular text-[#4B5565] ">
                Send confirmation email to verify degree of anonymity
              </label>
            </div>
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

export default Step4;

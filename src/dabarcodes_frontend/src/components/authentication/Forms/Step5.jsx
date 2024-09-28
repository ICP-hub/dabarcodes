import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Check, X } from "lucide-react";
const Step5 = ({ formData, setFormData, handleSubmit, handlePrevStep }) => {
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
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo, // Keep the other personalInfo fields intact
        password: password,
        confirmPassword: confirmPassword,
      },
    }));
  }, [password, confirmPassword, setFormData]);

  const handlePasswordChange = (e) => {
    setValue("password", e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setValue("confirmPassword", e.target.value);
  };

  return (
    <>
      <form className="px-8">
        <h3 className="roboto-bold text-base mb-4">Setup Your Password</h3>

        <div className="flex flex-col mb-4">
          <label className="text-sm roboto-medium required">Password</label>
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
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm roboto-medium required">
            Confirm Password
          </label>
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
          <label htmlFor="showPassword" className="text-base roboto-medium">
            Show Password
          </label>
        </div>

        <p className="roboto-regular text-base">Password Strength</p>

        <div className="mt-2 text-base font-regular">
          <p
            className={`flex items-center ${
              passwordCriteria.length ? "text-[#008C20]" : "text-[#B42700]"
            }`}
          >
            {passwordCriteria.length ? <Check size={20} /> : "•"} At least 12
            characters
          </p>
          <p
            className={`flex items-center ${
              passwordCriteria.uppercase ? "text-[#008C20]" : "text-[#B42700]"
            }`}
          >
            {passwordCriteria.uppercase ? <Check size={20} /> : "•"} Include
            both uppercase letters
          </p>
          <p
            className={`flex items-center ${
              passwordCriteria.lowercase ? "text-[#008C20]" : "text-[#B42700]"
            }`}
          >
            {passwordCriteria.lowercase ? <Check size={20} /> : "•"} Include
            both lowercase letters
          </p>
          <p
            className={`flex items-center ${
              passwordCriteria.number ? "text-[#008C20]" : "text-[#B42700]"
            }`}
          >
            {passwordCriteria.number ? <Check size={20} /> : "•"} Include at
            least one number (0-9)
          </p>
          <p
            className={`flex items-center ${
              passwordCriteria.specialChar ? "text-[#008C20]" : "text-[#B42700]"
            }`}
          >
            {passwordCriteria.specialChar ? <Check size={20} /> : "•"} Include
            at least one special character (@, #, $, etc.)
          </p>
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
          onClick={handleSubmit}
          className="btn text-white px-8 p-2 rounded"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Step5;

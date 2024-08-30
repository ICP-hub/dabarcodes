import { useForm } from "react-hook-form";

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

  const ethnicities = ["Asian", "Black", "Hispanic", "White", "Other"];
  const languages = ["English", "Spanish", "Chinese", "French", "Other"];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {/* Personal Information Section */}
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

      {/* Date of Birth Section */}
      <h3 className="font-bold text-xl mb-4">Date of Birth</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Month*</label>
          <input
            type="text"
            {...register("dobMonth", { required: "Month is required" })}
            name="dobMonth"
            onChange={handleChange}
            value={formData.personalInfo.dobMonth || ""}
            className="block w-full p-2 border rounded"
          />
          {errors.dobMonth && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dobMonth.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Day*</label>
          <input
            type="text"
            {...register("dobDay", { required: "Day is required" })}
            name="dobDay"
            onChange={handleChange}
            value={formData.personalInfo.dobDay || ""}
            className="block w-full p-2 border rounded"
          />
          {errors.dobDay && (
            <p className="text-red-500 text-sm mt-1">{errors.dobDay.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Year*</label>
          <input
            type="text"
            {...register("dobYear", { required: "Year is required" })}
            name="dobYear"
            onChange={handleChange}
            value={formData.personalInfo.dobYear || ""}
            className="block w-full p-2 border rounded"
          />
          {errors.dobYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.dobYear.message}
            </p>
          )}
        </div>
      </div>

      {/* Demographic Information Section */}
      <h3 className="font-bold text-xl mb-4">Demographic Information</h3>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Ethnicity*</label>
          <select
            {...register("ethnicity", { required: "Ethnicity is required" })}
            name="ethnicity"
            onChange={handleChange}
            value={formData.personalInfo.ethnicity || ""}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Ethnicity</option>
            {ethnicities.map((ethnicity, index) => (
              <option key={index} value={ethnicity}>
                {ethnicity}
              </option>
            ))}
          </select>
          {errors.ethnicity && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ethnicity.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Primary Language*
          </label>
          <select
            {...register("primaryLanguage", {
              required: "Primary language is required",
            })}
            name="primaryLanguage"
            onChange={handleChange}
            value={formData.personalInfo.primaryLanguage || ""}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Language</option>
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
          {errors.primaryLanguage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.primaryLanguage.message}
            </p>
          )}
        </div>
      </div>

      {/* <button type="submit">submit</button> */}
    </form>
  );
};

export default Step1;

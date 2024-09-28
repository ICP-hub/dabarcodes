import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleQuestion } from "react-icons/ci";
const dynamicData = {
  genders: ["Male", "Female", "Other"],
  genderIdentities: ["Cisgender", "Transgender", "Non-binary", "Other"],
  citizenships: ["United States", "Canada", "United Kingdom", "Other"],
  incomeRanges: [
    "Less than $25,000",
    "$25,000 - $50,000",
    "$50,000 - $75,000",
    "$75,000 and above",
  ],
  childrenAgeGroups: [
    "0-5 years",
    "6-12 years",
    "13-18 years",
    "19 years and above",
  ],
  totalHouseholdMembers: ["1", "2", "3", "4", "5+", "Other"],
};

const Step3 = ({ formData, setFormData, handleNextStep, handlePrevStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchMarried = watch(
    "married",
    formData.householdInfo?.married || "no"
  );
  const watchHasMaid = watch(
    "hasMaid",
    formData.householdInfo?.hasMaid || "no"
  );
  const watchHasChildren = watch(
    "hasChildren",
    formData.householdInfo?.hasChildren || "no"
  );

  useEffect(() => {
    if (!formData.additionalInfo) {
      setFormData({
        ...formData,
        additionalInfo: {
          gender: "",
          genderIdentity: "",
          citizenship: "",
          income: "",
        },
        householdInfo: {
          married: "no",
          spouseName: "",
          hasMaid: "no",
          maidName: "",
          hasChildren: "no",
          childrenAgeGroup: "",
          totalHouseholdMembers: "",
        },
      });
    }
  }, [formData, setFormData]);

  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    setFormData((prevData) => ({
      ...prevData,
      additionalInfo: {
        ...prevData.additionalInfo,
        ...data.additionalInfo,
      },
      householdInfo: {
        ...prevData.householdInfo,
        ...data.householdInfo,
      },
    }));
    handleNextStep();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = name.includes("householdInfo")
      ? "householdInfo"
      : "additionalInfo";
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name.split(".")[1]]: value,
      },
    }));
  };

  const handleCheck = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        {/* Additional Information */}
        <h3 className="roboto-bold text-base ">Additional Information</h3>
        <div className="flex gap-2 items-center mt-2 mb-4">
          <CiCircleQuestion />

          <p className="text-[#454545] text-xs roboto-regular">
            See why do we need this info?
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label for="gender" className="text-sm required roboto-medium">
              Gender Biological
            </label>
            <select
              {...register("additionalInfo.gender", {
                required: "Gender is required",
              })}
              required
              id="gender"
              name="additionalInfo.gender"
              onChange={handleChange}
              value={formData.additionalInfo?.gender || ""}
              className="p-2 border rounded"
            >
              <option value="">Select Gender</option>
              {dynamicData.genders.map((gender, index) => (
                <option key={index} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            {errors.additionalInfo?.gender && (
              <p className="text-red-500 text-sm mt-1">
                {errors.additionalInfo.gender.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm required roboto-medium">
              Gender Identity
            </label>
            <select
              {...register("additionalInfo.genderIdentity", {
                required: "Gender identity is required",
              })}
              name="additionalInfo.genderIdentity"
              onChange={handleChange}
              value={formData.additionalInfo?.genderIdentity || ""}
              className="p-2 border rounded"
            >
              <option value="">Select Gender Identity</option>
              {dynamicData.genderIdentities.map((identity, index) => (
                <option key={index} value={identity}>
                  {identity}
                </option>
              ))}
            </select>
            {errors.additionalInfo?.genderIdentity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.additionalInfo.genderIdentity.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm required roboto-medium">
              Citizenship
            </label>
            <select
              {...register("additionalInfo.citizenship", {
                required: "Citizenship is required",
              })}
              name="additionalInfo.citizenship"
              onChange={handleChange}
              value={formData.additionalInfo?.citizenship || ""}
              className="p-2 border rounded"
            >
              <option value="">Select Citizenship</option>
              {dynamicData.citizenships.map((citizenship, index) => (
                <option key={index} value={citizenship}>
                  {citizenship}
                </option>
              ))}
            </select>
            {errors.additionalInfo?.citizenship && (
              <p className="text-red-500 text-sm mt-1">
                {errors.additionalInfo.citizenship.message}
              </p>
            )}
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm required roboto-medium">Income</label>
            <div className="flex items-center border rounded">
              <span className="ml-2 my-2 w-16 ">USD $</span>
              <hr className="h-full border border-[#B4B1B4] "></hr>

              <input
                type="number"
                {...register("additionalInfo.income", {
                  required: "Income is required",
                })}
                name="additionalInfo.income"
                onChange={handleChange}
                value={formData.additionalInfo?.income || ""}
                className="p-2 border-0 rounded-r w-full"
                placeholder="Enter income"
              />
            </div>
            {errors.additionalInfo?.income && (
              <p className="text-red-500 text-sm mt-1">
                {errors.additionalInfo.income.message}
              </p>
            )}
          </div>
        </div>
        {/* Household Information */}
        <h3 className="roboto-bold text-base ">Household Information</h3>
        <div className="flex gap-2 items-center mt-2 mb-4">
          <CiCircleQuestion />

          <p className="text-[#454545] text-xs roboto-regular">
            See why do we need this info?
          </p>
        </div>
        {/*  */}
        <div className="md:grid-cols-12 w-full gap-4   grid">
          <div className="md:col-span-6  ">
            <div className="md:flex  flex-col mb-4">
              <label className="text-sm required roboto-medium mb-2">
                Married
              </label>

              <div className="">
                <input
                  type="checkbox"
                  {...register("householdInfo.married")}
                  name="householdInfo.married"
                  value="yes"
                  onChange={handleChange}
                  checked={watchMarried === "yes"}
                  className={` h-4 w-4 accent-[#0D90C1] rounded-md `}
                />
                <label className="text-base roboto-medium"> Yes</label>
                <input
                  type="checkbox"
                  {...register("householdInfo.married")}
                  name="householdInfo.married"
                  value="no"
                  onChange={handleChange}
                  checked={watchMarried === "no"}
                  className={`mx-4 h-4 w-4 accent-[#0D90C1] rounded-md `}
                />
                <label className="text-base roboto-medium">No</label>
              </div>
            </div>
            {watchMarried === "yes" && (
              <div className="mb-4 flex flex-col">
                <label className="mb-2 text-sm roboto-medium">
                  Spouse Name
                </label>
                <input
                  type="text"
                  {...register("householdInfo.spouseName", {
                    required: watchMarried === "yes",
                  })}
                  name="householdInfo.spouseName"
                  onChange={handleChange}
                  value={formData.householdInfo?.spouseName || ""}
                  className="p-2 border rounded"
                />
              </div>
            )}

            <div className="md:flex flex-col  mb-4">
              <label className="text-sm required roboto-medium mb-2">
                With Children
              </label>

              <div>
                <input
                  type="checkbox"
                  {...register("householdInfo.hasChildren")}
                  name="householdInfo.hasChildren"
                  value="yes"
                  onChange={handleChange}
                  checked={watchHasChildren === "yes"}
                  className={` h-4 w-4 accent-[#0D90C1] rounded-md `}
                />
                <label className="text-base roboto-medium ml-1">Yes</label>
                <input
                  type="checkbox"
                  {...register("householdInfo.hasChildren")}
                  name="householdInfo.hasChildren"
                  value="no"
                  onChange={handleChange}
                  checked={watchHasChildren === "no"}
                  className={`mx-4 h-4 w-4 accent-[#0D90C1] rounded-md `}
                />
                <label className="text-base roboto-medium ">No</label>
              </div>
            </div>

            <div className="mb-4">
              {watchHasChildren === "yes" && (
                <div className="flex flex-col mb-4">
                  <label className="text-sm roboto-medium mb-2 ">
                    Age Group
                  </label>
                  <div>
                    <select
                      {...register("householdInfo.childrenAgeGroup")}
                      name="householdInfo.childrenAgeGroup"
                      onChange={handleChange}
                      value={formData.householdInfo?.childrenAgeGroup || ""}
                      className="p-2 border rounded"
                    >
                      <option value="">Select </option>
                      {dynamicData.childrenAgeGroups.map((ageGroup, index) => (
                        <option key={index} value={ageGroup}>
                          {ageGroup}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-6 ">
            <div className="md:flex flex-col mb-4">
              <label className="text-sm roboto-medium mb-2 ">
                Include Maid’s Name
              </label>
              <div>
                <input
                  type="checkbox"
                  {...register("householdInfo.hasMaid")}
                  name="householdInfo.hasMaid"
                  value="yes"
                  onChange={handleChange}
                  checked={watchHasMaid === "yes"}
                  className=" h-4 w-4 accent-[#0D90C1] rounded-md"
                />

                <label className="text-base roboto-medium ml-2">Yes</label>
                <input
                  type="checkbox"
                  {...register("householdInfo.hasMaid")}
                  name="householdInfo.hasMaid"
                  value="no"
                  onChange={handleChange}
                  checked={watchHasMaid === "no"}
                  className="mx-2  h-4 w-4 accent-[#0D90C1] rounded-md"
                />
                <label className="text-base roboto-medium ">No</label>
              </div>
            </div>

            {watchHasMaid === "yes" && (
              <div className="mb-4 mt-7 flex flex-col">
                <label className="text-sm roboto-medium mb-1 ">Maid Name</label>
                <input
                  type="text"
                  {...register("householdInfo.maidName")}
                  name="householdInfo.maidName"
                  onChange={handleChange}
                  value={formData.householdInfo?.maidName || ""}
                  className="p-2 border rounded "
                />
              </div>
            )}

            <div className="mb-4 flex flex-col">
              <label className="text-sm roboto-medium mb-1 ">
                Total Number of Household Members
              </label>
              <select
                {...register("householdInfo.totalHouseholdMembers")}
                name="householdInfo.totalHouseholdMembers"
                onChange={handleChange}
                value={formData.householdInfo?.totalHouseholdMembers || ""}
                className="p-2 border rounded"
              >
                <option value="">Select Total Members</option>
                {dynamicData.totalHouseholdMembers.map(
                  (totalMembers, index) => (
                    <option key={index} value={totalMembers}>
                      {totalMembers}
                    </option>
                  )
                )}
              </select>
              <div className="flex gap-2 items-center mt-2">
                <CiCircleQuestion />

                <p className="text-[#454545] text-xs roboto-regular">
                  See Who to Include
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
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

export default Step3;

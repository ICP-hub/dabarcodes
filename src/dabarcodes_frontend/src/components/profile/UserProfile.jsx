import React, { Children, useState } from "react";
import { FaPen } from "react-icons/fa";
import EditableInput from "./extras/EditableInput";
import {
  childrenAgeGroupsOptions,
  citizenshipOptions,
  cityOptions,
  countryOptions,
  ethnicityOptions,
  genderIdentityOptions,
  genderOptions,
  incomeRangeOptions,
  languageOptions,
  monthOptions,
  privacyPreferences,
  pronounsOptions,
  requiredFields,
  stateOptions,
  timeAtAddressOptions,
  totalHouseholdMembersOptions,
} from "./extras/data";
const UserProfile = () => {
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    pronouns: "He/Him",
    name: "John Doe",
    ethnicity: "Asian - Chinese",
    primaryLanguage: "English",
    month: "January",
    date: "01",
    year: "1990",
    phoneNumber: "+31 25 847 6988",
    emailAddress: "johndoe@gmail.com",
    country: "Mexico",
    state: "North Devyn",
    city: "North Devyn",
    postalCode: "11197",
    timeAtAddress: "more than 5 years",
    RetailerPrefences: "2A Grocers Ltd",
    gender: "Male",
    identity: "Other",
    citizenship: "Canada",
    income: "$25,000 - $50,000",
    isMarried: false,
    isMaid: true,
    isChildren: true,
    spouseName: "Marie Doe",
    maidName: "Amanda",
    ageGroup: "13-18 years",
    totalHousehold: "4",
    privacyPreferences: "Only Me",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const calculateProfileCompletion = () => {
    const filledFields = requiredFields.filter((field) => {
      if (typeof formData[field] === "boolean") {
        return formData[field] !== null;
      }
      return formData[field] && formData[field].trim() !== "";
    });

    return Math.floor((filledFields.length / requiredFields.length) * 100);
  };

  const profileCompletion = calculateProfileCompletion();

  return (
    <>
      <div>
        <p className="text-base  roboto-bold my-4">Profile Completion</p>
        {/*  */}
        <div className="flex suf:flex-row suf:items-center suf:gap-16 md:flex-row flex-col    md:items-center md:gap-28 gap-4">
          <div className="relative suf:w-[280px] w-[180px]      md:w-[300px] bg-[#DBF4FD] rounded-full h-4">
            <div
              className="bg-[#0D90C1] h-4 rounded-full"
              style={{ width: `${profileCompletion}%` }}
            ></div>
            <p className="absolute top-[-6px]  right-[-42px]">
              {profileCompletion}%
            </p>
          </div>

          <div className="border w-fit   rounded-lg border-[#8A8A8A] text-[#8A8A8A]">
            <button
              onClick={() => setEditable(!editable)}
              className="py-1 flex items-center gap-2 px-2 text-xs font-semibold "
            >
              {!editable && <FaPen className="text-center" />}
              {editable ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="pt-4 bg-white ">
        <h1 className="text-xl md:text-2xl   roboto-bold">My Profile</h1>
        <H1 value={"Personal Information"} />
        <form onSubmit={handleSubmit}>
          <DIV>
            <EditableInput
              label="Pronouns"
              name="pronouns"
              value={formData.pronouns}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={pronounsOptions}
            />
            <EditableInput
              label="Name"
              name="name"
              value={formData.name}
              editable={editable}
              onChange={handleChange}
            />
          </DIV>
          {/*  */}
          <H1 value={"Demographic Information"} />
          <DIV>
            <EditableInput
              label="Ethnicity"
              name="ethnicity"
              value={formData.ethnicity}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={ethnicityOptions}
            />
            <EditableInput
              label="Primary Language"
              name="primaryLanguage"
              value={formData.primaryLanguage}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={languageOptions}
            />
          </DIV>
          {/*  */}
          <H1 value={"Date of Birth"} />
          <DIV>
            <EditableInput
              label="Month"
              name="month"
              value={formData.month}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={monthOptions}
            />
            <EditableInput
              label="Date"
              name="date"
              value={formData.date}
              editable={editable}
              onChange={handleChange}
            />
            <EditableInput
              label="Year"
              name="year"
              value={formData.year}
              editable={editable}
              onChange={handleChange}
            />
          </DIV>
          {/*  */}
          <hr className="bg-[#B4B1B4] h-0.5" />
          {/*  */}
          <H1 value={"Contact Information"} />
          <DIV>
            <EditableInput
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              editable={editable}
              onChange={handleChange}
            />
            <EditableInput
              label="Email address"
              name="emailAddress"
              value={formData.emailAddress}
              editable={editable}
              onChange={handleChange}
            />
          </DIV>
          {/*  */}
          <H1 value={"Address Information"} />
          <DIV>
            <EditableInput
              label="Country"
              name="country"
              value={formData.country}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={countryOptions}
            />
            <EditableInput
              label="State"
              name="state"
              value={formData.state}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={stateOptions}
            />
            <EditableInput
              label="City"
              name="city"
              value={formData.city}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={cityOptions}
            />
          </DIV>
          <DIV>
            <EditableInput
              label="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              editable={editable}
              onChange={handleChange}
            />
            <EditableInput
              label="Time at thid Address"
              name="timeAtAddress"
              value={formData.timeAtAddress}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={timeAtAddressOptions}
            />
          </DIV>
          {/*  */}
          <H1 value={"Preferences and Referral Information"} />
          <DIV>
            <EditableInput
              label="Retailer Preferences"
              name="RetailerPrefences"
              value={formData.RetailerPrefences}
              editable={editable}
              onChange={handleChange}
            />
          </DIV>
          <hr className="bg-[#B4B1B4] h-0.5" />
          {/*  */}
          <H1 value={"Additional Information"} />
          <DIV>
            <EditableInput
              label="Gender Biological"
              name="gender"
              value={formData.gender}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={genderOptions}
            />
            <EditableInput
              label="Gender Identity"
              name="identity"
              value={formData.identity}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={genderIdentityOptions}
            />
          </DIV>
          <DIV>
            <EditableInput
              label="Citizenship"
              name="citizenship"
              value={formData.citizenship}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={citizenshipOptions}
            />
            <EditableInput
              label="Income "
              name="income"
              value={formData.income}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={incomeRangeOptions}
            />
          </DIV>
          {/*  */}
          <H1 value={"Household Information"} />

          <div className="md:flex justify-between">
            <div className="">
              <div>
                <H1 value={"Married"} />
                <H1 value={"Yes"} />
              </div>
              <EditableInput
                label="Spouse Name"
                name="spouseName"
                value={formData.spouseName}
                editable={editable}
                onChange={handleChange}
              />
              <div>
                <H1 value={"With Children"} />
                <H1 value={"Yes"} />
              </div>
            </div>

            <div>
              <div>
                <H1 value={"Include Maids Name as a Shopper"} />
                <H1 value={"Yes"} />
              </div>
              <EditableInput
                label="Maid Name"
                name="maidName"
                value={formData.maidName}
                editable={editable}
                onChange={handleChange}
              />
              <EditableInput
                label="Total number in houseHold"
                name="totalHousehold"
                value={formData.totalHousehold}
                editable={editable}
                onChange={handleChange}
                type="select"
                options={totalHouseholdMembersOptions}
              />
            </div>
          </div>

          <DIV>
            <EditableInput
              label="Age Group"
              name="ageGroup"
              value={formData.ageGroup}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={childrenAgeGroupsOptions}
            />
          </DIV>

          <H1 value={"Privacy Settings"}></H1>
          <DIV>
            <EditableInput
              label="Privacy Preference"
              name="privacyPreferences"
              value={formData.privacyPreferences}
              editable={editable}
              onChange={handleChange}
              type="select"
              options={privacyPreferences}
            />
          </DIV>

          {/*  */}
          {editable && (
            <button
              type="submit"
              className="mt-6 px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md"
              disabled={!editable}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default UserProfile;

const H1 = ({ value }) => {
  return <h1 className="text-base my-4  roboto-bold">{value}</h1>;
};

const DIV = ({ children }) => {
  return <div className="md:flex   gap-4">{children}</div>;
};

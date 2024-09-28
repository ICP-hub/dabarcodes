import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
const Contact = ({ handleComponentSwitch }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
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
        <p className="text-2xl font-extrabold">Contact Support</p>
        {/*  */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="md:flex gap-4 ">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="text-sm font-medium">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="John"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="text-sm font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="example@example.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 resize-none block w-full p-2 border border-gray-300 rounded"
              placeholder="Your message here..."
              rows="2"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-[#0D90C1] text-white rounded "
          >
            Submit
          </button>
        </form>

        <p className="text-xl font-extrabold">Reach out to us</p>

        <div className="flex flex-wrap gap-4">
          {/* Email Information Section */}
          <div className="flex w-fit px-4 items-center  p-4 border border-gray-300 rounded ">
            <div className="flex-shrink-0 rounded-full bg-[#B5E8FB] p-2 mr-4">
              <CiMail className="text-[#171717] text-xl" />
            </div>
            <div>
              <p className="text-sm font-normal ">Email</p>

              <a
                href="mailto:support@example.com"
                className="text-[#646464] text-sm hover:underline"
              >
                support@example.com
              </a>
            </div>
          </div>
          {/* call */}
          <div className="flex w-fit px-4 items-center  p-4 border border-gray-300 rounded ">
            <div className="flex-shrink-0 rounded-full bg-[#B5E8FB] p-2 mr-4">
              <MdOutlineCall className="text-[#171717] text-xl" />
            </div>
            <div>
              <p className="text-sm font-normal ">Phone</p>

              <a className="text-[#646464] text-sm hover:underline">
                +91 {""} 91813 23 2309
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

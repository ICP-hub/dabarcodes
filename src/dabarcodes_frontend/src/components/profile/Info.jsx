import { useState } from "react";

function Info() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [principalId, setPrincipalId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { firstName, lastName, email, principalId });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 ">Profile</h1>
      <hr className=" mb-8 mt-2 border-t-[0.5px] border-[#6B696B]" />

      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:w-[400px]">
          <label
            htmlFor="firstName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4 md:w-[400px]">
          <label
            htmlFor="lastName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <p className="text-2xl font-bold text-gray-800 mb-6">Account Details</p>
        <div className="mb-4 md:w-[400px]">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="principalId"
            className="block text-2xl text-gray-700  font-bold mb-2"
          >
            ICP Principal Id
          </label>
          <p className="block text-gray-700 text-sm font-bold mb-2">
            Principal Id: <span className="text-md ">1234-1234-1234</span>
          </p>
          <hr class=" mb-8 mt-4 border-t-[0.5px] border-[#6B696B]" />
        </div>
      </form>

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
        Subscription Status
      </h2>

      <div
        className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <span className="mr-1">Status: </span>
        <strong className="font-bold text-red-500">Not Active</strong>
        <span className="block sm:inline">
          {" "}
          Click here to activate your subscription
        </span>
      </div>
      <hr class=" mb-8 mt-8 border-t-[0.5px] border-[#6B696B]" />
      <hr class=" mb-8 mt-2 border-t-[0.5px] border-[#6B696B]" />

      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
        Delete Account
      </h2>

      <p className="text-gray-600 mb-4">
        Deleting your account is a permanent action and cannot be undone. By
        proceeding, you will lose access to all your data, including your
        purchase history, saved coupons, subscription details, and personal
        information. This action will also unsubscribe you from any ongoing
        services and promotions. Are you sure you want to permanently delete
        your account?
      </p>

      <div className="flex items-center ">
        <button
          type="button"
          className="bg-[#FFEBE6] hover:bg-[#FE7954]  font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Info;

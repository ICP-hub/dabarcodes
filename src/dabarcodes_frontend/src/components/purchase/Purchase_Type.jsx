import React, { useState } from "react";

const subscriptionPlans = [
  {
    title: "Regular",
    description: "10",
    price: "$10.99/month",
  },
  {
    title: "Silver",
    description: "45",
    price: "$29.99/month",
  },
  {
    title: "Gold",
    description: "95",
    price: "$49.99/month",
  },
];

const offers = [
  "Exclusive Discounts on Partner Stores",
  "Priority Access to Limited-Time Promotions",
  "Bonus Tokens on Special Events",

  "Priority Access to Limited-Time Promotions",
  "Personalized Recommendations Based on Linked SKUs",
  "Bonus Tokens on Special Events",
];

const Purchase_Type = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleCardClick = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(true);
    setIsSuccessful(false);

    // Simulate a delay for the loading process
    setTimeout(() => {
      setIsSuccessful(true);
    }, 4000); // 4 seconds delay
  };

  return (
    <div className="m-4 sm:mt-12 grid grid-cols-12 mb-12">
      <main className="col-span-8 md:ml-8">
        <div>
          <span className="md:text-4xl text-xl font-bold leading-8">
            Choose your Subscription type
          </span>
          <p className="md:mt-12 mt-4 font-semibold text-lg">
            Choose Your Plan
          </p>
          <p>
            Select a plan that best fits your needs. Each plan gives you a
            different number of utility tokens to link with your favorite SKUs.
          </p>
        </div>
        <div className="grid lg:gap-[8px] gap-20 sm:pl-0 pl-4 mt-16 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1">
          {subscriptionPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#E7F8FE] h-80 w-64 rounded-xl flex flex-col justify-between active:border border-[#0D90C1] cursor-pointer"
              onClick={() => handleCardClick(plan)}
            >
              <div>
                <p className="px-6 pt-6 pb-2 font-bold">{plan.title}</p>
                <hr className="border-t-2 mr-4 ml-4 border-gray-400" />
              </div>
              <div className="flex flex-col justify-center items-center flex-grow">
                <p className="font-bold p-4 text-2xl ">
                  {plan.description} utility tokens monthly
                </p>
              </div>
              <div className="px-4 pb-4">
                <span className="font-bold text-lg">{plan.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Second main for large screens */}
      <main className="col-span-4 xl:pb-20 lg:pb-0 hidden lg:block shadow-2xl rounded-lg mr-4 h-fit mt-12">
        <div>
          <p className="md:text-2xl text-lg pt-8 px-8 font-bold leading-8">
            daBarcodes Subscription Offers
          </p>
        </div>
        <ul className="p-8 space-y-8">
          {offers.map((offer, index) => (
            <li key={index} className="flex items-center capitalize text-md">
              <p
                className="inline-block w-2.5 h-2.5 mr-4 rounded-full"
                style={{ backgroundColor: "#10B4F1" }}
              ></p>
              {offer}
            </li>
          ))}
        </ul>
      </main>
      {/* Second main for smaller screens */}
      <main className="col-span-12 w-fit lg:hidden mt-8">
        <div className="shadow-2xl rounded-lg p-8">
          <p className="md:text-2xl text-lg font-bold leading-8">
            daBarcodes Subscription Offers
          </p>
          <ul className="space-y-8 mt-4">
            {offers.map((offer, index) => (
              <li key={index} className="flex items-center capitalize text-md">
                <p
                  className="inline-block w-2.5 h-2.5 mr-4 rounded-full"
                  style={{ backgroundColor: "#10B4F1" }}
                ></p>
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Loading Modal */}
      {isOpen && (
        <LoadingModal
          isSuccessful={isSuccessful}
          tokens={selectedPlan ? selectedPlan.description : ""}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Purchase_Type;

const LoadingModal = ({ isSuccessful, tokens, setIsOpen }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      {isSuccessful ? (
        <div className="bg-white sm:w-[485px] w-[300px] sm:h-[502px] h-[400px] rounded-lg flex flex-col justify-center items-center p-8">
          <img src="/succesfull.png" alt="Success Icon" />
          <div className="text-center mt-4">
            <p className="font-bold text-xl">
              You have unlocked {tokens} utility tokens
            </p>
            <p className="text-[#646464] mt-4">Thank you for subscribing</p>
            <button className="py-2 mt-6 px-12 rounded-lg text-white bg-[#0D90C1]">
              Explore Now
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white sm:w-[485px] w-fit sm:h-[502px] h-[400px] rounded-lg flex flex-col justify-center items-center p-8">
          <div className="flex space-x-2 mb-4">
            {/* <div className="animate-bounce bg-gray-500 w-3 h-3 rounded-full"></div>
            <div className="animate-bounce bg-gray-500 w-3 h-3 rounded-full"></div>
            <div className="animate-bounce bg-gray-500 w-3 h-3 rounded-full"></div> */}
            <span class="loader"></span>
          </div>
          <p className="text-lg font-semibold">Payment is being Processed...</p>
        </div>
      )}
    </div>
  );
};

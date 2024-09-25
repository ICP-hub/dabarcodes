import React, { useState } from "react";
import PlanCard from "./extras/PlanCard";
import UtilityTokens from "./extras/UtilityTokens";
import { MdOutlineModeEditOutline } from "react-icons/md";
import SubscriptionHistory from "./extras/SubscriptionHistory";
const planDetails = {
  planType: "Monthly Subscription",
  status: "Active",
  renewalDate: "2024, Sept. 24",
  tokensAvailable: "03",
  memberSince: "2024, Aug. 18",
};

const MySubscription = () => {
  return (
    <>
      <h1 className="text-2xl Roboto font-bold ">My Subscription</h1>
      <div className="my-4">
        <PlanCard planData={planDetails} />
      </div>
      <UtilityTokens />
      <More />
      <div className="md:flex gap-4">
        <SubscriptionSelector />
        <PaymentDetails />
      </div>
      <SubscriptionHistory />
    </>
  );
};

export default MySubscription;

const More = () => {
  return (
    <div className="border flex gap-2 items-center shadow-lg rounded-md p-2 Roboto text-sm font-normal capitalize">
      <img className="w-6 h-6" src="/succesfull.png" alt="" />
      <p>needs more Utility Tokens?</p>
      <a className="underline text-[#0D90C1] " href="">
        purchase now
      </a>
    </div>
  );
};

const SubscriptionSelector = () => {
  const [activeSubscription, setActiveSubscription] = useState("monthly");

  const subscriptions = [
    { id: "monthly", label: "Monthly Subscription" },
    { id: "prepaid", label: "Prepaid Subscription" },
  ];

  return (
    <div className="border w-fit my-8 shadow-lg p-4 rounded-md">
      <div className="flex justify-between gap-4 items-center text-base mb-2 Roboto font-extrabold">
        <p>Update or Change Plan</p>
        <MdOutlineModeEditOutline size={18} className="text-[#8A8A8A]" />
      </div>
      <div className="gap-2 flex flex-col">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className={`text-sm Roboto font-normal border w-fit p-2 rounded-md ${
              activeSubscription === subscription.id
                ? "bg-[#E7F8FE] border-[#0D90C1]"
                : "bg-transparent border-[#CCCCCC]"
            }`}
            onClick={() => setActiveSubscription(subscription.id)}
          >
            <p>{subscription.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PaymentDetails = () => {
  return (
    <div className="border w-fit my-8 shadow-lg p-4 rounded-md">
      <div className="flex justify-between gap-4 items-center text-base mb-2 Roboto font-extrabold">
        <p>Payment Details</p>
        <MdOutlineModeEditOutline size={18} className="text-[#8A8A8A]" />
      </div>
      <div className="gap-2 text-sm flex flex-col">
        <p className="text-[#646464]">
          Wallet Provider: <span className="text-black">ICP</span>
        </p>
        <p className="text-[#646464]">
          Wallet address:: <span className="text-black">0x1A2b3C4D5e...</span>
        </p>
      </div>
    </div>
  );
};

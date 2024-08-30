import DoughnutChart from "../../reusable_components/DoughnutChart";

function SubscriptionManagement() {
  const data = [55, 45]; // Example data
  const labels = ["Used Tokens", "Unused Tokens"]; // Example labels
  const colors = [
    { background: "#0C87B5", border: "#0C87B5" }, // Color for "Used Tokens"
    { background: "#10B4F1", border: "#10B4F1" }, // Color for "Unused Tokens"
  ];
  const centerText = {
    label: "Total Tokens", // Text to show above the value
    value: "100", // Text to show below the label
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Subscription Management</h1>
      <HR />
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Subscription Details</h2>
        <p>Monthly Plan</p>
        <p>Next Payment: August 16, 2024</p>
        <p>VISA **** **** **** 1234</p>
      </div>
      <HR />
      <h2 className="text-xl font-bold mb-2">Utility Tokens</h2>

      <div className="mb-8 flex lg:flex-row flex-col justify-center items-center lg:items-start lg:justify-between">
        {/* Circle Visualization */}
        <div className="flex md:flex-row flex-col items-center mb-4">
          <DoughnutChart
            data={data}
            labels={labels}
            colors={colors}
            centerText={centerText}
          />

          <div className="ml-4">
            <ul>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#07516C] mr-2"></span>
                Total utility tokens: {data[0] + data[1]}
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#0C87B5] mr-2"></span>
                Used utility tokens: {data[0]}
              </li>
              <li className="flex items-center">
                <span className="inline-block w-3 h-3 rounded-full bg-[#10B4F1] mr-2"></span>
                Unused utility tokens: {data[1]}
              </li>
            </ul>
          </div>
        </div>
        <button className="bg-[#0D90C1] text-[#E7F8FE] font-bold py-2 px-4 rounded w-fit h-fit">
          Add Tokens
        </button>
      </div>
      <HR />

      <div>
        <h2 className="text-xl font-bold mb-2">Manage Subscription</h2>

        <button className="bg-[#0D90C1] text-white font-bold py-2 px-4 rounded mb-2">
          Change Subscription Plan
        </button>
        <HR />

        <button className=" text-[#0D90C1] hover:bg-[#E7F8FE] border-[#B5E8FB] border font-bold py-2 px-4 rounded">
          Cancel Subscription Plan
        </button>
      </div>
    </div>
  );
}

export default SubscriptionManagement;

import React from "react";

const HR = () => {
  return <hr className=" mb-8 mt-2 border-t-[0.5px] border-[#6B696B]" />;
};

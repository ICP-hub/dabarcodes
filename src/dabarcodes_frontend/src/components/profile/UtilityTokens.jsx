import React from "react";
import DoughnutChart from "../../reusable_components/DoughnutChart";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UtilityTokens = () => {
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
    <div className="m-8 mb-24">
      <h2 className="text-xl text-center md:text-start font-bold mb-2">
        Utility Tokens
      </h2>
      <hr className=" mb-8 mt-2 border-t-[0.5px] border-[#6B696B]" />;
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
      </div>
      <button className="bg-[#0D90C1] text-[#E7F8FE] font-bold py-2 px-4 rounded w-fit mb-8  h-fit">
        Add More Tokens
      </button>
      <Box />
    </div>
  );
};

export default UtilityTokens;

const Tooltip = ({ title, content, details, additionalContent }) => {
  return (
    <div className="relative flex justify-start items-start group bg-white md:w-[360px] px-4 py-6 border rounded-lg shadow-xl h-auto m-4">
      <Link to="../customers/subscription-management">
        <div className="flex justify-between items-start">
          <p className="text-[#0D90C1] font-semibold text-lg mb-2">{title}</p>
          {additionalContent && <div className="ml-4">{additionalContent}</div>}
        </div>
        {details.map((detail, index) => (
          <p key={index} className="text-[#646464] text-sm">
            {detail.label}: <span className="text-black">{detail.value}</span>
          </p>
        ))}
        <FaQuestionCircle
          size={16}
          className="text-[#989898] mt-4 cursor-pointer"
        />
      </Link>

      <div className="md:w-[336px] shadow-2xl border rounded-lg absolute h-fit bottom-32 p-7 bg-white text-[#646464] rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
        <div className="text-sm">{content}</div>
        <div className="absolute -top-3 left-3 w-6 h-6 transform rotate-45 bg-white shadow-2xl border-t border-l"></div>
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div>
      <Tooltip
        title="Check all Fixed Linked SKU"
        details={[
          { label: "Number of SKUs", value: 13 },
          { label: "SKUs with Active Promotions", value: 4 },
        ]}
        content="You have currently linked 13 out of your available 19 fixed SKUs this month. These products are set to receive promotional notifications based on your selections. If you wish to update your linked SKUs, you may select new products within your subscription limits. Please note that any changes will take effect immediately."
      />

      <Tooltip
        title="Floating SKU"
        details={[
          { label: "Linked to", value: "ABC" },
          { label: "Expiring on", value: "Sept 13, 2024" },
        ]}
        content="Floating Linked SKU option allows you to attach a utility token to any promotion of your choice. At the start of the next month, you can select a new SKU for your Floating Token. Remember, this feature is available for use once per month and will reset with your next billing cycle."
        additionalContent={
          <button className="bg-[#0C87B5] text-white text-sm py-2 px-4 rounded-lg">
            USED
          </button>
        }
      />
    </div>
  );
};

const promotionData = [
  {
    description1:
      "A seasonal promotion event is coming up. Consider creating a special promotion to attract more customers during this high-traffic period.",
    description2:
      "SKU #24680 from Supplier ABC Industries to attract more customers during this high-traffic period. Highlight this product to maximize visibility and drive sales. Coordinate with the supplier to ensure optimal stock levels and promotional support.",
  },
  {
    description1:
      "End-of-year sales are approaching. Prepare to create promotions to boost sales during this period.",
    description2:
      "SKU #12345 from Supplier XYZ. Coordinate with the supplier for marketing support and optimal inventory levels to maximize impact.",
  },
  {
    description1:
      "A new product launch is imminent. Consider special promotions to drive initial sales and customer engagement.",
    description2:
      "SKU #67890 from Supplier DEF. Highlight the product features and benefits in your promotional efforts to attract early adopters.",
  },
];
const Notifications = () => {
  return (
    <>
      {promotionData.map((promotion, index) => (
        <PromotionOpportunity key={index} promotion={promotion} />
      ))}
    </>
  );
};

export default Notifications;

import React, { useState } from "react";

const PromotionOpportunity = ({ promotion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleApprove = () => {
    console.log("Approved");
    setIsExpanded(false);
  };

  const handleReject = () => {
    console.log("Rejected");
    setIsExpanded(false);
  };

  return (
    <div
      className="border border-gray-300 p-4 rounded-lg mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <h3 className="text-lg font-semibold mb-2">
        Upcoming Promotion Opportunity
      </h3>
      <div className="flex gap-4">
        <div className="w-[4px] bg-[#0D90C1]"></div>
        <div className="flex flex-col gap-2 text-[#787774]">
          <p>{promotion.description1}</p>
          <p>{promotion.description2}</p>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-4 flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleApprove();
            }}
            className="bg-[#0D90C1] text-white px-4 py-2 rounded-md"
          >
            Approve
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleReject();
            }}
            className="border-[#0D90C1] text-[#0D90C1] border px-4 py-2 rounded-md"
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

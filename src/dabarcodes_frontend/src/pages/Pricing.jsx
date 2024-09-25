import React, { useState } from "react";

// SubscriptionCard component
const SubscriptionCard = ({ type, price, description, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  // Combine hover and click states for border styles
  const borderClass = isSelected
    ? "border-[#00C0F566]"
    : isHovered
    ? "border-[#00C0F566]"
    : "border-gray-200";

  return (
    <>
      <div
        className={`w-[300px] Roboto p-6 border-2 shadow-lg transition-all rounded-lg ${borderClass} cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsSelected(!isSelected)}
      >
        <h3 className="text-base font-extrabold">{type}</h3>
        <p className="text-3xl font-extrabold my-2">
          ${price}
          <span className="text-sm">/month</span>
        </p>
        <p className="text-[#949494] text-sm mb-4">{description}</p>
        <hr className="mb-4" />
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex   items-center">
              <span
                className="text-white text-sm font-thin flex justify-center items-center bg-[#0D90C1] rounded-full 
            w-4 h-4 mr-2"
              >
                ✔
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-[#0D90C1] text-white rounded w-full ">
          Subscribe
        </button>
      </div>
    </>
  );
};

const App = () => {
  const pricingData = [
    {
      type: "Prepaid Subscription",
      price: 40,
      description:
        "This is the best plan for the people who want the best experience of daBarcodes.",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      type: "Monthly Subscription",
      price: 30,
      description:
        "A flexible monthly plan for the people who need short-term access to daBarcodes.",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
    },
  ];

  return (
    <>
      <div className="flex flex-col flex-wrap text-balance justify-center items-center my-8 gap-2">
        <p className="font-extrabold text-2xl">Plans and Pricing</p>
        <p className="text-[#949494] text-sm font-normal text-center">
          Get access to all the features and SKUs with our plans
        </p>
      </div>
      <div className="flex flex-wrap gap-4  justify-center items-center my-8">
        {pricingData.map((plan, index) => (
          <SubscriptionCard
            key={index}
            type={plan.type}
            price={plan.price}
            description={plan.description}
            features={plan.features}
          />
        ))}
      </div>
    </>
  );
};

export default App;

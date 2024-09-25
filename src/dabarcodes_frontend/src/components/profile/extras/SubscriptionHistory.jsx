import React from "react";

const subscriptionHistory = [
  {
    date: "2024, Sept 15",
    description: "Monthly (Renewal)",
    amount: "0.007 ETH",
    transactionId: "TX123456789ABC",
    status: "Completed",
  },
  {
    date: "2024, Sept 10",
    description: "added utility tokens",
    amount: "0.007 ETH",
    transactionId: "TX123456789ABC",
    status: "Completed",
  },
  {
    date: "2024, Sept 8",
    description: "Monthly (Renewal)",
    amount: "0.007 ETH",
    transactionId: "TX123456789ABC",
    status: "Failed",
  },
];

const StatusBadge = ({ status }) => {
  const statusStyles = {
    Completed: "bg-green-100 text-green-600",
    Failed: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs ${
        statusStyles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

const SubscriptionHistory = () => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white w-full max-w-md md:max-w-lg lg:max-w-2xl">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Subscription History</h3>
        <button className="text-blue-500 text-sm">view all</button>
      </div>
      <ul className="divide-y divide-gray-200">
        {subscriptionHistory.map((item, index) => (
          <li
            key={index}
            className="py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold">{item.date}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
            <div className="flex-1 flex justify-start sm:justify-center">
              <p className="text-sm">{item.amount}</p>
            </div>
            <div className="flex-1 flex justify-start sm:justify-center">
              <p className="text-sm">{item.transactionId}</p>
            </div>
            <div className="flex-1 mt-2 md:mt-0 flex justify-end">
              <StatusBadge status={item.status} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionHistory;

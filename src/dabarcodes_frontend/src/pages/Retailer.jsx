import React, { useState } from "react";
import Sidebar from "../components/Retailers/Sidebar";
import Dashboard from "../components/Retailers/dashboard/Dashboard";
import PromotionManagement from "../components/Retailers/dashboard/PromotionManagement";
import SKUManagement from "../components/Retailers/dashboard/SKUManagement";
import Notifications from "../components/Retailers/dashboard/Notifications";

const TokenManagement = () => <div>Token Management Content</div>;
const AnalyticsReport = () => <div>Analytics and Report Content</div>;
const CustomerEngagement = () => <div>Customer Engagement Content</div>;
const Settings = () => <div>Customer Engagement Content</div>;

const Retailer = () => {
  const [selectedLabel, setSelectedLabel] = useState("Dashboard");
  const renderContent = () => {
    switch (selectedLabel) {
      case "Dashboard":
        return <Dashboard />;
      case "Promotion Management":
        return <PromotionManagement />;
      case "SKU Management":
        return <SKUManagement />;
      case "Token Management":
        return <TokenManagement />;
      case "Analytics and Report":
        return <AnalyticsReport />;
      case "Customer Engagement":
        return <CustomerEngagement />;
      case "Notifications":
        return <Notifications />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className=" ">
        {/* Sidebar */}
        <Sidebar
          selectedLabel={selectedLabel}
          onSelectLabel={setSelectedLabel}
        />

        {/* Main Content Area */}
        <div className=" p-4">
          {renderContent()} {/* Render the selected component */}
        </div>
      </div>
    </>
  );
};

export default Retailer;

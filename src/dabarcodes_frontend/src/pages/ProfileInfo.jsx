import React, { useEffect, useState } from "react";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import UserProfile from "../components/profile/UserProfile";
import MySubscription from "../components/profile/MySubscription";
import MyUtilityTokens from "../components/profile/MyUtilityTokens";
import MySKUs from "../components/profile/MySKUs";
import Settings from "../components/profile/Settings";
import { useParams } from "react-router-dom";

const ProfileInfo = () => {
  const { id } = useParams();
  const [selectedLabel, setSelectedLabel] = useState(id || "Profile");

  useEffect(() => {
    if (id) {
      setSelectedLabel(id);
    }
  }, [id]);

  const renderContent = () => {
    switch (selectedLabel) {
      case "profile":
        return <UserProfile />;
      case "subscription":
        return <MySubscription />;
      case "my-skus":
        return <MySKUs />;
      case "my-utility-tokens":
        return <MyUtilityTokens />;
      case "settings":
        return <Settings />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <>
      <div className="md:flex sm_md:flex">
        <ProfileSidebar
          selectedLabel={selectedLabel}
          onSelectLabel={setSelectedLabel}
        />
        <div className=" p-4">{renderContent()}</div>
      </div>
    </>
  );
};

export default ProfileInfo;

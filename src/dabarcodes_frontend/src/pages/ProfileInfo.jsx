import React, { lazy, Suspense, useEffect, useState } from "react";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import { useParams } from "react-router-dom";
import Spinner from "../reusable_components/Spinner";

//

const UserProfile = lazy(() => import("../components/profile/UserProfile"));
const MySubscription = lazy(() =>
  import("../components/profile/MySubscription")
);
const MyUtilityTokens = lazy(() =>
  import("../components/profile/MyUtilityTokens")
);
const MySKUs = lazy(() => import("../components/profile/MySKUs"));
const Settings = lazy(() => import("../components/profile/Settings"));

//
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
        <div className="p-4">
          <Suspense fallback={<Spinner />}>{renderContent()}</Suspense>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;

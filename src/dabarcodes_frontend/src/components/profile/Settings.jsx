import React, { useState } from "react";
import GeneralSeetings from "./settings/GeneralSeetings";
import Feedback from "./settings/Feedback";

const Settings = () => {
  const [selectedComponent, setSelectedComponent] = useState("settings");

  const handleComponentSwitch = (component) => {
    setSelectedComponent(component);
  };

  return (
    <>
      {selectedComponent === "settings" && (
        <GeneralSeetings handleComponentSwitch={handleComponentSwitch} />
      )}

      {selectedComponent === "feedback" && (
        <Feedback handleComponentSwitch={handleComponentSwitch} />
      )}
    </>
  );
};

export default Settings;

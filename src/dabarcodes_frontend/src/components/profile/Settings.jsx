import React, { useState } from "react";
import GeneralSeetings from "./settings/GeneralSeetings";
import Contact from "./settings/Contact";
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
      {selectedComponent === "contact" && (
        <Contact handleComponentSwitch={handleComponentSwitch} />
      )}
      {selectedComponent === "feedback" && (
        <Feedback handleComponentSwitch={handleComponentSwitch} />
      )}
    </>
  );
};

export default Settings;

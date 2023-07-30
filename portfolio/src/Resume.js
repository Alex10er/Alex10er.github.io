import React from "react";
import ExperienceGraph from "./ExperienceGraph";

const Resume = () => {
  const experience = [
    { company: "Company 1", position: "Position 1", timeRange: "March 2021 – Present", message: "This is my Message", branch: "Master" },
    { company: "Company 2", position: "Position 2", timeRange: "March 2021 – Present", message: "This is my Message", branch: "Feature/Change1" },
    { company: "Company 3", position: "Position 3", timeRange: "March 2021 – Present", message: "This is my Message", branch: "Feature/Change" },
    { company: "Company 4", position: "Position 4", timeRange: "March 2021 – Present", message: "This is my Message", branch: "Master" },
    // Add merge events as separate objects in the experience array
    
  ];

  return (
    <div className="container">
      <ExperienceGraph experience={experience} />
    </div>
  );
};

export default Resume;

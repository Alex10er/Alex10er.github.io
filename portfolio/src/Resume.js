import React from "react";
import ExperienceGraph from "./ExperienceGraph";

const Resume = () => {
  const experience = [
    { company: "Company 1", position: "Position 1", from: "2010", to: "2015", year: "5 years" },
    { company: "Company 2", position: "Position 2", from: "2016", to: "2018", year: "2 years" },
    { company: "Company 3", position: "Position 3", from: "2019", to: "Present", year: "4 years" },
    // Add as many experiences as needed...
  ];

  return (
    <div className="container">
      <ExperienceGraph experience={experience} />
    </div>
  );
}

export default Resume;

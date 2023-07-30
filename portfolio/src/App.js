import React from 'react';
import Resume from './Resume';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const personalInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
  };

  const education = [
    { institution: "XYZ University", degree: "B.S. in Computer Science", year: "2023" }
    // add more as needed
  ];

  const experience = [
    { company: "ABC Company", position: "Software Engineer", year: "2024" }
    // add more as needed
  ];

  return (
    <div className="App">
      <Resume personalInfo={personalInfo} education={education} experience={experience} />
    </div>
  );
}

export default App;
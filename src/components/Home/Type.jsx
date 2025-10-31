import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Data Analyst",
          "Power BI Developer",
          "EXCEL Developer",
          "Python Developer",
          "SQL Specialist",
          "Software Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

import React from "react";
import CollegeItem from "../collegeItem/CollegeItem";

import "./colleges.css";

import { collegesData } from "../../collegesData";

function Colleges() {
  return (
    <div className="college-container">
      {collegesData.map((college) => (
        <CollegeItem key={college.college_name} college={college} />
      ))}
    </div>
  );
}

export default Colleges;

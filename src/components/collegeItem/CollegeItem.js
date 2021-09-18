import React from "react";
import CollegeBanner from "./collegeBanner/CollegeBanner";
import CollegeInfo from "./collegeInfo/CollegeInfo";
import "./collegeItem.css";

function CollegeItem({ college, innerRef }) {
  // console.log(college.college_name.at(-2), college.college_name.at(-1));

  return (
    <div className="college-item" ref={innerRef}>
      <CollegeBanner college={college} />
      <CollegeInfo college={college} />
    </div>
  );
}

export default CollegeItem;

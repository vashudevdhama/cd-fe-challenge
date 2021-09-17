import React from "react";
import CollegeBanner from "./collegeBanner/CollegeBanner";
import CollegeInfo from "./collegeInfo/CollegeInfo";
import "./collegeItem.css";

function CollegeItem({ college }) {
  console.log(college);
  return (
    <div className="college-item">
      <CollegeBanner />
      <CollegeInfo />
    </div>
  );
}

export default CollegeItem;

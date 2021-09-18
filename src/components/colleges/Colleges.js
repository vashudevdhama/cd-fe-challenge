import React, { useState, useRef, useCallback } from "react";
import CollegeItem from "../collegeItem/CollegeItem";
import useCollege from "../../utils/useCollege";

import "./colleges.css";

function Colleges() {
  const [pageNumber, setPageNumber] = useState(1);
  const { colleges, hasMore, loading } = useCollege(pageNumber);

  const observer = useRef();
  const lastCollegeElementRef = useCallback(
    (node) => {
      if (loading) return; // avoid constantly fetching the data
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="college-container">
      {colleges.map((college, index) => {
        if (colleges.length === index + 1) {
          return (
            <CollegeItem
              innerRef={lastCollegeElementRef}
              key={college.college_name}
              college={college}
            />
          );
        } else {
          return <CollegeItem key={college.college_name} college={college} />;
        }
      })}

      <div>{loading && "Loading..."}</div>
    </div>
  );
}

export default Colleges;

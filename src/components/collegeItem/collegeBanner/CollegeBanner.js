import React from "react";
import "./collegeBanner.css";

function CollegeBanner() {
  return (
    <div className="banner">
      <div className="overlay-info">
        <div className="promoted">
          <span>PROMOTED</span>
          <div className="cut">
            <div className="arrow-up"></div>
            <div className="arrow-down"></div>
          </div>
        </div>

        <div className="Rectangle-3">
          <span className="rating-score">4</span>
          /5
          <div className="rating-remark">Very Good</div>
        </div>
        <div className="tags">
          <div className="tags-left">
            <div className="Rectangle-2">Best Colleges in 2018</div>
            <div className="Rectangle-2">2kms away</div>
          </div>
          <div className="tags-right">
            <div className="rank">#7 in 260 colleges in north campus</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeBanner;

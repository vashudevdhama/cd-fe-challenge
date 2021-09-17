import React from "react";
import "./collegeInfo.css";

function CollegeInfo() {
  return (
    <div className="info">
      <div className="row-1">
        <div className="row-1-left">
          <span className="title">Hansraj College Delhi University - 1</span>
          <span className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </span>
        </div>
        <div className="row-1-right">
          <span className="original-price">₹ 6,000</span>
          <span className="discount-tag">
            <div id="content">
              <div className="discount-label red">
                <span>20</span>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="row-1">
        <div className="row-1-left">
          <span className="nearest-place-primary text-bold">
            Near Vishwavidyalya Metro Station
          </span>
          <span
            className="
                    nearest-place-secondary
                    text-bold text-grey
                "
          >
            | 2 Kms away from bus stand
          </span>
        </div>
        <div className="row-1-right">
          <span className="discounted-price">
            <span className="rupee">₹ </span>5,200
          </span>
        </div>
      </div>
      <div className="text-myriad">Per Semester (3months)</div>
      <div className="famous-nearest-place text-green">
        <span className="text-bold text-green">93% Match:</span>
        <span className="text-bold text-dark-grey">2.5kms</span>
        <span className="text-bold text-grey">from GTB Nagar</span>,
        <span className="text-bold text-dark-grey">7 Kms </span>
        <span className="text-bold text-grey">from Rajiv Chowk</span>
      </div>
      <div className="row-1">
        <div className="row-1-left blue-ribbon">
          <span className="text-bold">Flat </span>
          <span className="text-bold text-green">Rs2,000</span>
          <span className="text-bold">off + upto </span>
          <span className="text-bold text-green">Rs 500</span>
          <span className="text-bold">wallet! to avail...</span>
          <span className="text-bold text-blue">LOGIN</span>
        </div>
        <div className="row-1-right">
          <span className="amenity text-bold text-green">Fee cancellation</span>
          <span className="dot"></span>
          <span className="amenity text-bold text-green">Free Wifi</span>
        </div>
      </div>
    </div>
  );
}

export default CollegeInfo;

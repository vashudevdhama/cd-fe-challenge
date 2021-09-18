import React from "react";
import StarRatings from "react-star-ratings";
import BlueBottomRibbon from "../blueBottomRibbon.js/BlueBottomRIbbon";
import FamousNearestPlace from "../famousNearestPlace/FamousNearestPlace";

import "./collegeInfo.css";

function CollegeInfo({ college }) {
  let {
    college_name,
    rating,
    original_fees,
    discounted_fees,
    discount,
    nearest_place,
    fees_cycle,
    amenties,
    famous_nearest_places,
    offertext,
  } = college;

  return (
    <div className="info">
      <div className="row-1">
        <div className="row-1-left">
          <span className="title">{college_name}</span>
          <span className="rating">
            <StarRatings
              rating={rating}
              starDimension="0.75rem"
              starSpacing="0.125rem"
            />
          </span>
        </div>
        <div className="row-1-right">
          <span className="original-price">₹{original_fees}</span>
          <span className="discount-tag">
            <div id="content">
              <div className="discount-label red">
                <span>{discount}</span>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="row-1">
        <div className="row-1-left">
          <span className="nearest-place-primary text-bold">
            {nearest_place[0]}
          </span>
          <span className="nearest-place-secondary text-bold text-grey">
            | {nearest_place[1]}
          </span>
        </div>
        <div className="row-1-right">
          <span className="discounted-price">
            <span className="rupee">₹ </span>
            {discounted_fees}
          </span>
        </div>
      </div>
      <div className="text-myriad">{fees_cycle}</div>
      <FamousNearestPlace famous_nearest_places={famous_nearest_places} />
      <div className="row-1">
        <BlueBottomRibbon offertext={offertext} />
        <div className="row-1-right">
          <span className="amenity text-bold text-green">{amenties[0]}</span>
          <span className="dot"></span>
          <span className="amenity text-bold text-green">{amenties[1]}</span>
        </div>
      </div>
    </div>
  );
}

export default CollegeInfo;

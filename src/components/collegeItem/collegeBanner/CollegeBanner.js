import React from "react";
import "./collegeBanner.css";

function CollegeBanner({ college }) {
  const { promoted, rating, rating_remarks, tags, ranking } = college;

  return (
    <div className="banner">
      <div className="overlay-info">
        {promoted && (
          <div className="promoted">
            <span>PROMOTED</span>
            <div className="cut">
              <div className="arrow-up"></div>
              <div className="arrow-down"></div>
            </div>
          </div>
        )}

        <div className="Rectangle-3">
          <span className="rating-score">{rating}</span>
          /5
          <div className="rating-remark">{rating_remarks}</div>
        </div>
        <div className="tags">
          <div className="tags-left">
            {tags.map((tag) => (
              <div key={tag} className="Rectangle-2">
                {tag}
              </div>
            ))}
          </div>
          <div className="tags-right">
            <div className="rank">#{ranking}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeBanner;

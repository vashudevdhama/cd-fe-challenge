import React from "react";

function FamousNearestPlace({ famous_nearest_places }) {
  famous_nearest_places = famous_nearest_places.split(",");
  return (
    <div className="famous-nearest-place text-green">
      <span className="text-bold text-green">93% Match:</span>{" "}
      {famous_nearest_places.map((place) => {
        return (
          <React.Fragment key={place}>
            <span className="text-bold text-dark-grey">
              {place.substring(0, place.indexOf("from"))}
            </span>
            <span className="text-bold text-grey">
              {place.substring(place.indexOf("from"))}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default FamousNearestPlace;

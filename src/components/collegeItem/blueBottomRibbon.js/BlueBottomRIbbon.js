import React from "react";

function BlueBottomRibbon({ offertext }) {
  offertext = offertext.replace(",", "");
  const match = offertext.match(/\d+/g);
  offertext = offertext.split(/([0-9]\w*)\w*/);
  offertext = offertext.map((offer) => offer.replace("Rs", ""));

  return (
    <div className="row-1-left blue-ribbon">
      {offertext.map((offer) => {
        let loginText = null;
        if (offer.includes("LOGIN")) {
          offer = offer.replace("LOGIN", "");
          loginText = (
            <span key={offer} className="text-bold text-blue">
              LOGIN
            </span>
          );
        }

        if (match.includes(offer)) {
          offer = " Rs " + offer;
          return (
            <React.Fragment key={offer}>
              <span className="text-bold text-green">{offer}</span>
              {loginText}
            </React.Fragment>
          );
        } else if (offer === "LOGIN") {
          <React.Fragment key={offer}>
            <span className="text-bold text-blue">{offer}</span>
            {loginText}
          </React.Fragment>;
        } else {
          return (
            <React.Fragment key={offer}>
              <span className="text-bold">{offer}</span>
              {loginText}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
}

export default BlueBottomRibbon;

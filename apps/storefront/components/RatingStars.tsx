import React from 'react';

export default function RatingStars({ numberOfRatings }) {
  return (
    <div className="flex flex-row mt-10 items-center">
      <img className="starIconBlack" src="/star1.png"></img>
      <img className="starIconBlack" src="/star1.png"></img>
      <img className="starIconBlack" src="/star1.png"></img>
      <img className="starIconBlack" src="/star1.png"></img>
      <img className="starIconWhite" src="/star1.png"></img>
      <p className="textGrayColor text-sm ml-2">{numberOfRatings}</p>
    </div>
  );
}

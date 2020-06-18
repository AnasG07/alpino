import React from 'react';
import style from './RatingStars.module.css';
import classNames from 'classnames';

export default function RatingStars({ numberOfRatings, smallSize, solidStars }) {
  return solidStars ? (
    <div
      className={
        smallSize
          ? classNames(style.reviewStarsSize, 'flex flex-row mt-10 items-center')
          : 'flex flex-row mt-10 items-center'
      }>
      <img src="/products/fullStar.png"></img>
      <img src="/products/fullStar.png"></img>
      <img src="/products/fullStar.png"></img>
      <img src="/products/fullStar.png"></img>
      <img src="/products/fullStar.png"></img>
    </div>
  ) : (
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

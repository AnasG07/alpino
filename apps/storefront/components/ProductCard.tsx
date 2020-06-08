import React from 'react';

export default function ProductCard({ data: { image, name, price, description, launch, type, buttonText } }) {
  return (
    <span className="flex flex-col p-8 min-height-560 mr-8 rounded-large bg-greyCard hover-main">
      <img src={image} alt="Rock bluetooth" />
      <div className="flex flex-row items-center pt-8 justify-between">
        <div>
          <h3 className="max-w-14">{name}</h3>
          <h3 className="max-w-14">{type}</h3>
        </div>
        <span className="text-white text-base">
          <img className="inline-block h-6" src="indian.png" />
          {price}
        </span>
      </div>
      <div className="flex flex-row justify-between items-center pt-10 hover-show">
        <button className="rounded-full py-4 text-base px-10 outline-none border-none bg-black max-w-8 w-full flex justify-center">
          Details
        </button>
        <button className="rounded-full text-base py-4 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center">
          {buttonText}
        </button>
      </div>
      <span className="leading-tight item-description-color pt-8 text-sm max-w-16 hover-hide">{description}</span>

      <span className="text-xs item-description-color pt-8 leading-loose">{launch}</span>
    </span>
  );
}

import React from 'react';

export default function ProductCard({
  data: { image, name, price, description, launch, type, buttonText },
  comingSoon,
}) {
  return (
    <div className="relative h-full">
      <span className="flex flex-col p-8 min-height-35 mr-8 rounded-large bg-grey-card lg:bg-black bg-greyCard hover-main">
        <img src={image} alt="Rock bluetooth" />
        <div className="flex flex-row items-center  justify-between">
          <div>
            <h3 className="max-w-14 leading-5 text-left text-white font-normal text-xl">{name}</h3>
            <h3 className="max-w-14 leading-5 text-left text-white font-normal text-xl">{type}</h3>
          </div>
          <span className="text-white text-base">
            <img className="inline-block h-6" src="indian.png" />
            {price}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center pt-10 hover-show">
          <button className=" leading-5 rounded-full py-3 text-base px-8 outline-none border-none bg-black max-w-8 w-full flex justify-center">
            Details
          </button>
          <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center">
            {buttonText}
          </button>
        </div>
        <span className="leading-5 item-description-color pt-8 text-sm max-w-16 hover-hide">{description}</span>

        {comingSoon && <span className="text-xs item-description-color pt-8 leading-5">{launch}</span>}
      </span>
    </div>
  );
}

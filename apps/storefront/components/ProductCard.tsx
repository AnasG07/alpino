import React, { useState } from 'react';

export default function ProductCard({ data: { image, name, price, description, launch, type, buttonText } }) {
  const [hoverValue, updateValue] = useState(false);
  return (
    <span
      onMouseEnter={() => updateValue(true)}
      onMouseLeave={() => updateValue(false)}
      className={`flex flex-col p-8 min-height-560 mr-8 rounded-large ${hoverValue ? 'bg-greyCard' : ''} `}>
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
      {hoverValue ? (
        <div className="flex flex-row justify-between items-center pt-10">
          <button className="rounded-full py-4 text-base px-10 outline-none border-none bg-black">Details</button>
          <button className="rounded-full text-base py-4 px-8 outline-none border-none bg-white text-black">
            {buttonText}
          </button>
        </div>
      ) : (
        <span className="leading-tight item-description-color pt-8 text-sm max-w-16">{description}</span>
      )}
      <span className="text-xs item-description-color pt-8 leading-loose">{launch}</span>
    </span>
  );
}

import React from 'react';

export default function ProductFeature({ data: { description, buttonText, image }, index }) {
  return (
    <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="flex-grow flex flex-col justify-center pl-30">
        <h1 className="max-w-30 text-left">{description}</h1>
        <div className="pt-16">
          <button className="button-transparent py-2 px-4 outline-none">{buttonText}</button>
        </div>
      </div>
      <div className="flex-grow">
        <img src={image} />
      </div>
    </div>
  );
}

import React from 'react';

export default function ProductFeature({ data: { description, buttonText, image } }) {
  return (
    <div className="flex product-alignment">
      <div className="flex-grow flex flex-col justify-center pl-30 leading-12">
        <h1 className="max-w-30 text-left text-white font-medium text-5xl leading-12">{description}</h1>
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

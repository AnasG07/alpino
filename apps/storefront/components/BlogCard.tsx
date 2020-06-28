import React from 'react';

export default function BlogCard({ data: { image, heading } }) {
  return (
    <>
      <div className="rounded-large flex flex-col bg-black md:min-h-25">
        <img src={image} alt={image} className="rounded-large-top min-height-20" />
        <h3 className="bg-black leading-9  text-sm md:text-2xl text-white text-center px-12 py-5 md:py-2 rounded-large-bottom font-medium">
          {heading}
        </h3>
      </div>
    </>
  );
}

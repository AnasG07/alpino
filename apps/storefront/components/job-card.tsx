import React from 'react';

export default function JobCard({ data: { title, role }, scrollOpening }) {
  return (
    <div className="w-full lg:w-44 lg:rounded-super lg:mx-30px p-6 md:p-10 lg:p-15 job-main bg-black">
      <div className="lg:min-h-300">
        <h1 className="lg:max-w-30 text-white-light text-2xl md:text-5xl leading-loose md:leading-12">{title}</h1>
        <p className="text-base md:text-lg leading-6 text-white-light pt-10 lg:min-h-225 lg:max-w-30">{role}</p>
      </div>
      <button onClick={() => scrollOpening('#apply')} className="mt-10 button-transparent py-2 px-8 job-button">
        Apply
      </button>
    </div>
  );
}

import React from 'react';

export default function JobCard({ data: { title, role }, scrollOpening }) {
  return (
    <div className="md:min-h-30 w-full lg:w-2/4 lg:rounded-super p-6 md:p-10 lg:p-15 job-main bg-black">
      <h1 className="text-white-light text-5xl leading-12">{title}</h1>
      <p className="text-lg leading-6 text-white-light pt-10 pb-10">{role}</p>
      <button onClick={() => scrollOpening('#apply')} className="button-transparent py-2 px-8 job-button">
        Apply
      </button>
    </div>
  );
}

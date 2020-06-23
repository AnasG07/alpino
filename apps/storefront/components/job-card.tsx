import React from 'react';

export default function JobCard({ data: { title, role } }) {
  return (
    <div className="min-height-30 w-2/4 rounded-large p-15 job-main bg-black">
      <h1 className="text-white-light text-5xl leading-12">{title}</h1>
      <p className="text-lg leading-6 text-white-light pt-10 pb-10">{role}</p>
      <button className="button-transparent py-2 px-8 job-button">Apply</button>
    </div>
  );
}

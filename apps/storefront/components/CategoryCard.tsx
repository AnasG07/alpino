import React from 'react';
import classNames from 'classnames';
import style from './CategoryCard.module.css';
import Link from 'next/link';

export default function CategoryCard({ data, index }) {
  return (
    <div key={index}>
      <Link href="/collections/[tag]" as={`/collections/${data.slug}`}>
        <div className={classNames(style.container, 'border-none cursor-pointer flex items-center justify-center')}>
          <img src={data.image} />
        </div>
      </Link>
      <h2 className="text-2xl md:text-4xl text-white text-center mt-4 font-medium">
        <Link href="/collections/[tag]" as={`/collections/${data.slug}`}>
          {data.title}
        </Link>
      </h2>
      <h3 className="text-sm md:text-base text-white text-center mt-6 mb-32">{data.description}</h3>
    </div>
  );
}

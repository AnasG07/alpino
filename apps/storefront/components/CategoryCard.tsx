import React from 'react';
import classNames from 'classnames';
import style from './CategoryCard.module.css';
import Link from 'next/link';

export default function CategoryCard({ data, index }) {
  return (
    <div key={index}>
      <Link href="/[tag]" as="/[tag]">
        <div className={classNames(style.container, 'border-none cursor-pointer flex items-center justify-center')}>
          <img src={data.image}></img>
        </div>
      </Link>
      <h2 className="text-4xl text-white text-center mt-4">{data.title}</h2>
      <h3 className="text-base text-white text-center mt-6 mb-32">{data.description}</h3>
    </div>
  );
}
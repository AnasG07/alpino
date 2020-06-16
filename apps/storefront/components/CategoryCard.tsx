import React from 'react';
import classNames from 'classnames';
import style from './CategoryCard.module.css';

export default function CategoryCard({ data, index }) {
  return (
    <div key={index}>
      <button className={classNames(style.container, 'border-none flex items-center justify-center')}>
        <img src={data.image}></img>
      </button>
      <h2 className="text-4xl text-white text-center mt-4">{data.title}</h2>
      <h3 className="text-base text-white text-center mt-6 mb-32">{data.description}</h3>
    </div>
  );
}

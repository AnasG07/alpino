import React from 'react';
import style from './CardItemCard.module.css';
import classNames from 'classnames';

export default function CartItemCard({ i, index }) {
  return (
    <div key={index} className={classNames(style.itemCards, 'flex flex-row h-32 mb-8')}>
      <div className={classNames(style.imagesBorderRadius, 'bg-black h-42 w-56 flex')}>
        <img className="mx-auto my-auto" src={i.image}></img>
      </div>
      <div className="flex flex-col w-full justify-around items-start">
        <div className="flex justify-between px-4 w-full">
          <div>
            <h1 className={classNames(style.titleFontColor, 'text-2xl font-medium')}>{i.title}</h1>
            <div className="flex justify-start items-center">
              <div className={classNames(style.coloredBalls, 'rounded-full bg-black mr-1 ml-1')}></div>
              <span className={classNames(style.titleFontColor, 'text-xs font-light')}>{i.color}</span>
            </div>
          </div>
          <p className={classNames(style.titleFontColor, 'text-xs font-light mt-3')}>{i.cost}</p>
        </div>
        <div className="flex flex-row w-full items-center justify-between px-5">
          <button className="flex flex-col border-none outline-none">
            <img className={classNames(style.marginBottom)} src="/cart/deletetop.png"></img>
            <img src="/cart/deletebottom.png"></img>
          </button>
          <div className="flex flex-row">
            <div className={classNames(style.leftBorderRadius, 'bg-black h-6 w-8 flex justify-center items-center')}>
              <img className={classNames(style.Icon, 'w-4 h-5')} src="/cart/minus.png"></img>
            </div>
            <div className={classNames(style.headingColor, 'h-6 w-8 flex justify-center items-center')}>
              <p className={classNames(style.titleFontColor, 'text-xs font-light')}>{i.quantity}</p>
            </div>
            <div className={classNames(style.rightBorderRadius, 'bg-black h-6 w-8 flex justify-center items-center')}>
              <img className={classNames(style.Icon, 'w-4 h-5')} src="/cart/plus.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

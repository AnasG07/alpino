import React from 'react';
import style from './CardItemCard.module.css';
import classNames from 'classnames';
import Link from 'next/link';

export default function CartItemCard({ data, index, handleRemoveItem, handleItemQuantityChange }) {
  const quantityAdd = () => {
    const quantityIncrease = data.quantity + 1;
    handleItemQuantityChange(quantityIncrease, data?._id);
  };
  const quantitySub = () => {
    const quantityDecrease = data.quantity - 1;
    handleItemQuantityChange(quantityDecrease, data?._id);
  };
  return (
    <div key={index} className={classNames(style.itemCards, 'flex flex-row h-32 mb-8')}>
      <div className={classNames(style.imagesBorderRadius, 'bg-black h-42 w-56 flex')}>
        <Link href={`products/${data?.productSlug}`}>
          <a>
            <img className="mx-auto my-auto" src={data.imageURLs}></img>
          </a>
        </Link>
      </div>
      <div className="flex flex-col w-full justify-around items-start">
        <div className="flex justify-between px-4 w-full">
          <div>
            <Link href={`products/${data?.productSlug}`}>
              <a>
                <h1 className={classNames(style.titleFontColor, 'text-2xl font-medium')}>{data.title}</h1>
              </a>
            </Link>
            <div className="flex justify-start items-center">
              <div className={classNames(style.coloredBalls, 'rounded-full bg-black mr-1 ml-1')}></div>
              <span className={classNames(style.titleFontColor, 'text-xs font-light')}>{data.variantTitle}</span>
            </div>
          </div>
          <p className={classNames(style.titleFontColor, 'text-xs font-light mt-3')}>{data?.price?.displayAmount}</p>
        </div>
        <div className="flex flex-row w-full items-center justify-between px-5">
          <button onClick={() => handleRemoveItem(data._id)} className="flex flex-col border-none outline-none">
            <img className={classNames(style.marginBottom)} src="/cart/deletetop.png"></img>
            <img src="/cart/deletebottom.png"></img>
          </button>
          <div className="flex flex-row">
            <div className={classNames(style.leftBorderRadius, 'bg-black h-6 w-8 flex justify-center items-center')}>
              <button onClick={quantitySub} className="outline-none border-none">
                <img className={classNames(style.Icon, 'w-4 h-5')} src="/cart/minus.png"></img>
              </button>
            </div>
            <div className={classNames(style.headingColor, 'h-6 w-8 flex justify-center items-center')}>
              <p className={classNames(style.titleFontColor, 'text-xs font-light')}>{data.quantity}</p>
            </div>
            <div className={classNames(style.rightBorderRadius, 'bg-black h-6 w-8 flex justify-center items-center')}>
              <button onClick={quantityAdd} className="outline-none border-none">
                <img className={classNames(style.Icon, 'w-4 h-5')} src="/cart/plus.png"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

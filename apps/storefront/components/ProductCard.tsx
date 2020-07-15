import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface ProductCardProps {
  data: any;
  comingSoon?: boolean;
  noround?: boolean;
  className?: string;
}

export default function ProductCard({
  data: { slug, image, name, price, description, launch, type, buttonText },
  comingSoon,
  noround,
  className,
}: ProductCardProps) {
  const imageBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    imageBox.current.setAttribute('style', `height: ${imageBox.current.offsetWidth}px`);
  }, [imageBox]);
  return (
    <div className={classNames('relative h-full mx-auto mb-8', className)} style={{ maxWidth: '25rem' }}>
      <Link href="/products/[slug]" as={`/products/${slug}`}>
        <span
          className={`flex flex-col p-8 min-height-35 lg:mr-8  ${
            noround ? 'rounded-none' : 'rounded-super'
          } md:rounded-super bg-grey-card lg:bg-black bg-greyCard hover-main`}>
          <div className={classNames('flex items-center justify-center')} ref={imageBox}>
            <img src={image} alt={name} className="w-full" />
          </div>
          <div className="flex flex-row items-center  justify-between">
            <div>
              <h3 className="max-w-14 leading-5 text-left text-white font-semibold text-sm md:text-xl">{name}</h3>
              <h3 className="max-w-14 leading-5 text-left text-white font-semibold text-sm md:text-xl">{type}</h3>
            </div>
            <span className="text-white text-xs md:text-base">₹ {price}</span>
          </div>
          <div className="flex flex-row justify-between items-center pt-10 hover-show">
            <Link href="/products/[slug]" as={`/products/${slug}`}>
              <a className="leading-5 rounded-full py-3 text-xs md:text-base px-8 outline-none border-none bg-black max-w-8 w-full flex justify-center text-white font-semibold">
                Details
              </a>
            </Link>
            <button
              className={`${
                comingSoon ? 'px-4' : 'px-8 '
              }leading-5 rounded-full text-xs md:text-base py-3 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center font-semibold`}>
              {comingSoon ? 'Pre Order' : buttonText}
            </button>
          </div>
          <span className="leading-5 item-description-color pt-8 text-sm max-w-16 hover-hide">{description}</span>

          {comingSoon && <span className="text-xs item-description-color pt-8 leading-5">{launch}</span>}
        </span>
      </Link>
    </div>
  );
}

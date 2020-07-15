import React, { useState } from 'react';
import Head from 'next/head';
import { startCase } from 'lodash';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classNames from 'classnames';
import styles from './tag.module.css';
import ProductCard from '../../components/ProductCard';
import { getProductsByTag } from '../../data/functions';
import fetchTag from '../../staticUtils/tag/fetchTag';
import fetchTagProduct from '../../staticUtils/tag-products/fetchTagProduct';

export async function getServerSideProps({ params }) {
  const { tag } = await fetchTag(params.tag, 'en');
  const {
    data: {
      catalogItems: { nodes },
    },
  } = await fetchTagProduct(tag._id);

  return {
    props: {
      tag: tag,
      data: nodes,
      productCard: getProductsByTag(params.tag),
    },
  };
}

export default function Tag({ productCard, tag, data }) {
  const listData = data.map((i) => {
    return {
      image: i?.product?.primaryImage?.URLs?.medium,
      slug: i?.product?.slug,
      type: i?.product?.pageTitle,
      name: i?.product?.title,
      price: i?.product?.pricing[0]?.displayPrice,
      buttonText: 'Buy',
      description: i?.product?.description,
    };
  });
  const filterArray = ['Popularity', 'Price - High to Low', 'Price - Low to High'];
  const [imgHover, updateImgHover] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black w-full">
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header />
          <div
            className="flex flex-col items-center justify-center mt-20 md:mt-30 bg-cover bg-center"
            style={{ backgroundImage: `url("${tag.heroMediaUrl}")`, height: '50vh' }}>
            <h1 className="text-center text-2xl leading-loose md:leading-12 md:text-5xl text-white font-medium md:font-semibold">
              {tag.displayTitle}
            </h1>
            <p className="text-center mt-4 text-white font-normal md:font-medium leading-tight md:leading-loose text-sm md:text-2xl">
              Tune in and you’d never want to pull the plug
            </p>
          </div>
          <div className="flex flex-row justify-end items-center py-16 px-4 md:px-16 lg:py-24 lg:mb-12">
            <button className="leading-5 hidden rounded-full text-base py-3 px-8 outline border bg-transparent max-w-8 w-full flex justify-center button-hover">
              <h1 className="text-sm md:text-lg">Filter</h1>
            </button>
            <div className="flex flex-col">
              <div className="flex flex-row justify-center items-center">
                <h1 className={classNames(styles.sortColor, 'hidden  md:block font-semibold w-full text-lg mr-5')}>
                  Sort By
                </h1>
                <button
                  onMouseOver={() => updateImgHover(true)}
                  onMouseOut={() => updateImgHover(false)}
                  className="flex flex-row justify-center items-center relative leading-5 rounded-full text-base py-3 px-8 outline border bg-transparent w-full button-hover">
                  <select className="bg-transparent mr-2 ">
                    {filterArray.map((i) => (
                      <option value={i}>{i} </option>
                    ))}
                  </select>
                  <div className="flex justify-center items-center rounded-full p-2 border-solid border-white border-2 tag-hover">
                    <img className={`absolute h-2 ${imgHover && 'filter-invert'}`} src="/down-arrow.png" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-between px-0 pb-24 items-center  gap-8 lg:grid-cols-2 xl:grid-cols-3 md:pl-40 md:pr-40 lg:pl-31 lg:pr-10">
            {listData.map((i, index) => (
              <ProductCard key={index} className={styles.card} data={i} noround />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

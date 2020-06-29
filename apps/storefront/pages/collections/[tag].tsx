import React from 'react';
import Head from 'next/head';
import { startCase } from 'lodash';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classNames from 'classnames';
import styles from './tag.module.css';
import ProductCard from '../../components/ProductCard';
import { getProductsByTag } from '../../data/functions';

export async function getServerSideProps({ params }) {
  return {
    props: {
      tag: params.tag,
      productCard: getProductsByTag(params.tag),
    },
  };
}

export default function Tag({ tag, productCard }) {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black w-full">
        <Header />
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="flex flex-col items-center justify-center md:mt-30 mt-20">
            <img className="bg-no-repeat w-full" src="/earphones.png" />
            <div className="absolute">
              <h1 className="text-center text-2xl leading-loose md:leading-12 md:text-5xl text-white mt-16 font-medium md:font-semibold">
                {startCase(tag)}
              </h1>
              <p className="text-center mt-6 text-white font-normal md:font-medium leading-tight md:leading-loose text-sm md:text-2xl">
                Tune in and you’d never want to pull the plug
              </p>
            </div>
          </div>
          <div className="mt-24">
            <div className="flex flex-row justify-between items-center px-30">
              <button className="leading-5 rounded-full text-base py-3 px-8 outline border bg-transparent max-w-8 w-full flex justify-center">
                <h1 className="text-sm md:text-lg">Filter</h1>
              </button>
              <div className="flex flex-row justify-center items-center">
                <h1 className={classNames(styles.sortColor, 'hidden md:block font-semibold w-full text-lg mr-5')}>
                  Sort By
                </h1>
                <button className="flex flex-row justify-center items-center relative leading-5 rounded-full text-base py-3 px-8 outline border bg-transparent w-full">
                  <h1 className="test-sm md:text-lg mr-2">Popularity</h1>
                  <div className="flex justify-center items-center rounded-full p-2 border-solid border-white border-2">
                    <img className="absolute h-2" src="/down-arrow.png" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pt-32 justify-between pl-0 pr-0 md:pl-40 md:pr-40 lg:pl-31 lg:pr-10 pb-24 items-center">
            {productCard.map((i) => (
              <ProductCard className={styles.card} data={i} showStars noround />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

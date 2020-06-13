import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './category.module.css';
import classNames from 'classnames';

export async function getStaticProps() {
  return {
    props: {
      productFeature: [
        {
          title: 'Headphones',
          description: 'OVER THE EAR',
          image: '/Thar01.png',
        },
        {
          title: 'Neckbands',
          description: 'LOREM IPSUM',
          image: '/Thar02.png',
        },
        {
          title: 'Earphones',
          description: 'IN YEAR',
          image: '/Thar03.png',
        },
        {
          title: 'Headsets',
          description: 'LOREM IPSUM',
          image: '/Thar04.png',
        },
      ],
    },
  };
}

export default function Category({ productFeature }) {
  return (
    <>
      <div className="min-h-screen bg-black w-full">
        <Header invert={false} />
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className={classNames(style.imageContainer, 'flex flex-col items-center justify-center bg-no-repeat')}>
            <p className="text-center text-5xl text-white mt-32">Explore our wearables</p>
            <p className="text-center mt-6 text-white text-2xl">
              Renowed performance and superior comfort from <br /> designed to bring you closer to your music <br /> —
              and the world around you
            </p>
          </div>
          <div className={classNames(style.padding, 'flex justify-center ')}>
            <div className="flex flex-wrap justify-between -mx-4 overflow-hidden sm:-mx-1 md:-mx-4 lg:-mx-4 xl:-mx-6">
              {productFeature.map((data, index) => (
                <div>
                  <button className={classNames(style.container, 'border-none flex items-center justify-center')}>
                    <img src={data.image}></img>
                  </button>
                  <p className="text-4xl text-white text-center mt-4">{data.title}</p>
                  <p className="text-base text-white text-center mt-6 mb-32">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import style from './category.module.css';
import classNames from 'classnames';
import CategoryCard from '../components/CategoryCard';

export async function getServerSideProps({ params }) {
  return {
    props: {
      subCategories: [
        {
          title: 'Headphones',
          description: 'OVER THE EAR',
          image: '/Thar01.png',
          link: '/collections/headphones',
        },
        {
          title: 'Neckbands',
          description: 'AROUND THE NECK',
          image: '/Thar02.png',
          link: '/collections/neckbands',
        },
        {
          title: 'Earphones',
          description: 'IN EAR',
          image: '/Thar03.png',
          link: '/collections/earphones',
        },
        {
          title: 'Headsets',
          description: 'WITH MIC',
          image: '/Thar04.png',
          link: '/collections/headsets',
        },
      ],
    },
  };
}

export default function Category({ subCategories }) {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black w-full">
        <Header invert={false} />
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div
            className={classNames(
              style.imageContainer,
              'mt-20 flex flex-col items-center justify-center bg-no-repeat',
            )}>
            <h1 className="text-center text-2xl md:text-5xl text-white mt-32 font-medium md:font-semibold">
              Explore our wearables
            </h1>
            <p className="text-center mt-2  md:mt-6 text-white text-sm md:text-2xl">
              Renowed performance and superior comfort from <br /> designed to bring you closer to your music <br /> —
              and the world around you
            </p>
          </div>
          <div className={classNames(style.padding, 'flex justify-center')}>
            <div className="flex flex-wrap justify-center xl:justify-between mx-1 overflow-hidden sm:-mx-1 md:-mx-4 lg:-mx-4 xl:-mx-6">
              {subCategories.map((data, index) => (
                <CategoryCard data={data} index={index} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

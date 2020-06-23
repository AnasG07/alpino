import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import classNames from 'classnames';
import style from './tag.module.css';
import ProductCard from '../components/ProductCard';

export async function getServerSideProps(context) {
  return {
    props: {
      productCard: [
        {
          image: '/Thar05.png',
          name: 'Rock',
          type: 'Bluetooth Speaker',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo. Playback time: 6 hours',
          buttonText: 'Buy',
        },
        {
          image: '/Thar031.png',
          name: 'Thar GT',
          type: 'Bluetooth Headphone',
          price: '1299',
          description: 'Comfortable and secure fit, magnetic design with pure stereo sound. Playback time: 4.5 hours',
          buttonText: 'Buy',
        },
        {
          image: '/Thar041.png',
          name: 'Town Flex',
          type: 'Wireless Neckband',
          price: '799',
          description: 'Comfortable and secure fit, magnetic design with pure stereo sound. Playback time: 4.5 hours',
          buttonText: 'Buy',
        },
        {
          image: '/rock-bluetooth.svg',
          name: 'Rock',
          type: 'Blutetooth Speaker',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          buttonText: 'Buy',
        },
        {
          image: '/thar-bluetooth.svg',
          name: 'Thar GT',
          type: 'Bluetooth Headphone',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          buttonText: 'Buy',
        },
        {
          image: '/trip-flex.svg',
          name: 'Town Flex',
          type: ' Wireless Neckband',
          price: '799',
          description: 'Comfortable and secure fit, magnetic design with pure stereo sound. Playback time: 4.5 hours',
          buttonText: 'Buy',
        },
      ],
    },
  };
}

export default function Tag({ productCard }) {
  return (
    <>
      <div className="min-h-screen bg-black w-full">
        <Header invert={false}></Header>
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="flex flex-col items-center justify-center md:mt-30 mt-20">
            <img className="bg-no-repeat w-full" src="/earphones.png"></img>
            <div className="absolute">
              <h1 className="text-center text-5xl text-white mt-16">Earphones</h1>
              <p className="text-center mt-6 text-white text-2xl">Tune in and you’d never want to pull the plug</p>
            </div>
          </div>
          <div className="mt-24">
            <div className="flex flex-row justify-between items-center px-30">
              <button className="leading-5 rounded-full text-base py-3 px-8 outline border bg-transparent max-w-8 w-full flex justify-center">
                <h1 className="text-lg">Filter</h1>
              </button>
              <div className="flex flex-row justify-center items-center">
                <h1 className={classNames(style.sortColor, 'font-semibold w-full text-lg mr-5')}>Sort By</h1>
                <button className="flex flex-row justify-center items-center relative leading-5 rounded-full text-base py-3 px-8 outline border bg-transparent w-full">
                  <h1 className="text-lg mr-2">Popularity</h1>
                  <div className="flex justify-center items-center rounded-full p-2 border-solid border-white border-2">
                    <img className="absolute h-2" src="/down-arrow.png"></img>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-32 pt-32 justify-between pl-30 pr-10 pb-24 items-center">
            {productCard.map((i) => (
              <ProductCard data={i} showStars />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
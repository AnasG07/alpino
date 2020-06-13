import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import style from './category.module.css';

export default function Category() {
  return (
    <>
      <div className="min-h-screen bg-black w-full">
        <Header invert={false} />
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div
            className={`${style['image-container']} flex flex-col items-center justify-center bg-no-repeat bg-cover`}>
            <p className="text-center text-5xl text-white mt-32">Explore our wearables</p>
            <div className="text-center mt-6 ">
              <p className="text-2xl text-white">Renowed performance and superior comfort from</p>
              <p className="mt-1 text-2xl text-white">headphones designed to bring you closer to your music</p>
              <p className="mt-1 text-2xl text-white">— and the world around you</p>
            </div>
          </div>
          <div className={`${style['padding']} flex justify-center `}>
            <div className="flex flex-wrap justify-between -mx-4 overflow-hidden sm:-mx-1 md:-mx-4 lg:-mx-4 xl:-mx-6">
              <div>
                <button
                  className={`${style['headphones-container']} border-none flex items-center justify-center my-4 px-4 w-1/2 overflow-hidden  sm:my-2 sm:px-2 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2`}>
                  <img src="/Thar01.png"></img>
                </button>
                <p className="text-4xl text-white text-center">Headphones</p>
                <p className="text-base text-white text-center mt-6 mb-32">OVER THE EAR</p>
              </div>
              <div>
                <button
                  className={`${style['headphones-container']} border-none flex items-center justify-center my-4 px-4 w-1/2 overflow-hidden  sm:my-2 sm:px-2 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2`}>
                  <img src="/Thar02.png"></img>
                </button>
                <p className="text-4xl text-white text-center">Neckbands</p>
                <p className="text-base text-white text-center mt-6 mb-32">LOREM IPSUM</p>
              </div>
              <div>
                <button
                  className={`${style['headphones-container']} border-none flex items-center justify-center my-4 px-4 w-1/2 overflow-hidden  sm:my-2 sm:px-2 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2`}>
                  <img src="/Thar03.png"></img>
                </button>
                <p className="text-4xl text-white text-center">Earphones</p>
                <p className="text-base text-white text-center mt-6 mb-8">IN YEAR</p>
              </div>
              <div>
                <button
                  className={`${style['headphones-container']} border-none flex items-center justify-center my-4 px-4 w-1/2 overflow-hidden  sm:my-2 sm:px-2 sm:w-full md:my-3 md:px-3 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2`}>
                  <img src="/Thar04.png"></img>
                </button>
                <p className="text-4xl text-white text-center">Headsets</p>
                <p className="text-base text-white text-center mt-6 mb-8">LOREM IPSUM</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

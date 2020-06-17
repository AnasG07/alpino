import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AliceCarousel from 'react-alice-carousel';

export default function Product() {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <>
      <div className="min-h-screen bg-black w-full">
        <Header invert={false}></Header>
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="grid grid-cols-2 pt-40">
            <AliceCarousel buttonsDisabled>
              <img src="/products/Thar01.png" onDragStart={handleOnDragStart} />
              <img src="/products/Thar01.png" onDragStart={handleOnDragStart} />
              <img src="/products/Thar01.png" onDragStart={handleOnDragStart} />
              <img src="/products/Thar01.png" onDragStart={handleOnDragStart} />
            </AliceCarousel>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import styles from './static.module.css';
import classNames from 'classnames';
import { getProductsByTag } from '../data/functions';

export async function getServerSideProps(context) {
  return {
    props: {
      bestSellers: getProductsByTag('best-seller'),
    },
  };
}

export default function Neev({ bestSellers }) {
  console.log();
  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-neev'], 'bg-center min-h-25 md:min-h-60 ')}>
          <Header transparent />
          <h1 className={classNames(styles['text-heading'], 'pt-40 md:pt-370 text-center')}>Neev</h1>
          <h3 className="pt-4 pb-31 md:pb-0 md:pt-8 text-sm md:text-base leading-tight md:leading-8 text-center text-white-light">
            {' '}
            FOR A BETTER WORLD
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row bg-black py-20 lg:py-0 px-5 md:px-12 lg:px-31 lg:justify-between items-center lg:min-h-60">
          <img src="/seven.svg" />

          <h1 className="max-w-30 text-base md:text-5xl leading-tight md:leading-16  text-white pt-20 lg:pt-0 font-medium">
            Most people consider in the world seven to be their lucky number. And why shouldn’t they? It’s associated
            with the likes of James Bond and MS Dhoni. Alpino just made the luckiest number in the world even luckier!
          </h1>
        </div>
        <div
          className={classNames(
            styles['background-hands'],
            'bg-center lg:min-h-60 px-5 md:px-12 lg:px-31 flex flex-col lg:flex-row items-center  py-20 lg:py-0 justify-between',
          )}>
          <h1 className="max-w-30 text-base md:text-5xl leading-tight md:leading-16  text-white font-medium">
            Neev, our brainchild will lay the foundation for community service in our organization.
          </h1>
          <h3 className="max-w-30 font-medium md:font-semibold leading-tight text-base md:text-lg text-white-light pt-10  lg:pt-0 ">
            We aim to empower the society through extending support to social enterprises. We plan to partner with a
            social enterprise and donate 7% of our sales from a particular set of SKUs to that organization. With the
            help of this partnership we will be able to leverage funds for social enterprises that are in dire need of
            the same, and thus act as a bridge between social enterprises and society and at large. We plan to tie up
            with a different organization every quarter, and thus extending our support to as many causes and
            organisations as possible.
          </h3>
        </div>
        <div className="py-20 lg:py-44 md:px-12 px-5 lg:px-31 justify-between flex flex-col lg:flex-row items-center">
          <h3 className="leading-tight md:leading-6 text-base md:text-lg text-white-light max-w-30 font-medium">
            We have always maintained that our customers are a part of the Alpino family, and with Neev we aim to give
            back to our extended family. This way our sound resonates into the lives of millions and gives them a voice!
          </h3>
          <h3 className="leading-tight md:leading-6 text-base md:text-lg text-white-light max-w-30 font-medium pt-20 lg:pt-0 ">
            Through Neev, we wish to create a common platform to discuss these issues and amplify the voices of those
            working tirelessly to eradicate them from around us. We’re ready to go all in and help with the operations
            and logistics of these organisations, if need be.
          </h3>
        </div>
        <div className="bg-maximum-red md:min-h-60">
          <h1 className="text-base md:text-5xl leading-tight md:leading-16  text-white  px-5 px-12 lg:px-31 pt-20 lg:pt-31 font-medium">
            At Alpino, we take mental health and anxiety seriously. It is our persistent effort to ensure our work
            environment is diverse and welcoming and our employees feel heard. We recognise that globally mental health
            and related disorders affect over 450 million people and this makes mental health related problems the
            leading cause of ill-health and disability across the world. We’re ready to start combating these issues and
            strive for the mental well-being of the community at large.
          </h1>
          <div className="flex flex-col md:flex-row justify-between  items-start md:items-center px-16 md:px-31 pt-20  lg:pt-60">
            <h1 className="leading-loose md:leading-12 text-white font-medium text-2xl md:text-5xl">Best Sellers</h1>
            <h3 className="text-left text-xs md:text-xl text-white font-normal leading-tight">
              Best always deserves better
            </h3>
          </div>
          <div className="flex flex-row pt-16 lg:pt-32 justify-center lg:justify-between pl-4 lg:pl-31 pr-4 lg:pr-10 items-center">
            <div className="flex flex-row flex-grow justify-center lg:justify-between">
              {bestSellers.map((i, index) => (
                <div className={`${index !== 0 && 'hidden'} lg:block`}>
                  <ProductCard data={i} key={index} neev />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import styles from './incubate-with-alpino.module.css';
import classNames from 'classnames';

export default function IncubateALpino() {
  return (
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={classNames(styles.backgroundImage, 'min-height-60')}>
          <Header />
          <div className="flex px-30 py-100 justify-end items-center">
            <div>
              <h1 className="text-7xl">Incubate</h1>
              <h3 className="pt-5">WITH ALPINO</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="bg-black min-height-60 max-width-50">
            <div className="p-30 flex flex-col min-height-60 justify-between">
              <h1>Incubating Ideas</h1>
              <h3>
                At Alpino, we recognize that ideas represent the gap between idle and ideal. At the same time, we also
                recognize that without the right platform and support, ideas may never be realized
              </h3>
            </div>
          </div>
          <div className="min-height-60 max-width-50 bg-grey-darker"></div>
        </div>
      </main>
    </>
  );
}

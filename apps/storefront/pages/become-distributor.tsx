import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function becomeDistributor() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={classNames(styles['background-distributor'], 'md:min-h-60')}>
          <Header opacity />
          <div className="md:min-height-55 md:hidden py-20">
            <h1 className="pt-16 text-white leading-8 text-2xl text-center md:hidden">Become a Distributor</h1>
            <h3 className="text-white pt-4 text-sm leading-5 text-center md:hidden">
              We’re here for you, even when you don’t know you need us
            </h3>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="bg-black md:bg-white md:min-h-60 w-full md:w-2/4">
            <div className="px-16 md:px-28  pt-20 flex flex-col md:min-h-60">
              <p className="leading-12 text-white md:text-black text-2xl">
                As a brand built for the masses, that focuses on essentials, we recognize offline retail as an equally
                important part of our business as online retail.
              </p>
              <p className="leading-12 text-white md:text-black text-2xl pt-20 md:pb-0 pb-8">
                We’re already present in 10 states with over 100 retailers in just a matter of one year, and we’ll be
                more than happy to have you as an addition to the Alpino Family.
              </p>
            </div>
          </div>
          <img src="/blue-chair.jpeg" alt="blue-chair" className={classNames('w-full md:w-2/4')} />
        </div>
        <div className="flex flex-col md:flex-row">
          <img src="/two-people.jpeg" alt="blue-chair" className={classNames('w-full md:w-2/4')} />
          <div className="bg-black md:bg-black-distributor md:min-h-60 w-full md:w-2/4">
            <div className="px-16 md:px-28  pt-20 pb-48 flex flex-col md:min-h-60 justify-between">
              <p className="leading-12 text-white text-2xl text-left md:text-right">
                With exclusive products for our offline market at a dealer’s price, you don’t have to worry about price
                wars and margins. As a company that adds at least 4 SKUs every 25 days, we recognize the need to keep
                bringing new offerings to the market.
              </p>
              <p className="leading-12 text-white text-2xl text-left md:text-right pt-12 md:pt-0">
                We value you and are ecstatic to welcome you as a part of the Alpino Family. It is fundamental to us to
                ensure your growth for our growth.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <h1 className="py-12 text-black leading-14 text-4.5xl text-center">Become a Distributor</h1>
          <div className={classNames(styles['px-35'], 'pb-16')}>
            <div className={classNames(styles['p-15'], 'form-card')}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" />
                  <p className={classNames(styles['text-2xl-semibold'], 'text-content pl-2')}>Distributor</p>
                </div>
                <p className="text-content">Registration Form</p>
              </div>
              <form className={styles['pt-35']}>
                <div>
                  <input placeholder="Name" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Company Name" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20">
                  <input placeholder="Contact Number" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Email ID" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input
                    placeholder="What districts would you want to launch Alpino in?"
                    className={classNames(styles['input-style'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    placeholder="Are you already working with existing consumer tech companies?If yes, please name them."
                    className={classNames(styles['input-style'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    placeholder="What are the monthly sales projections that you would want to achieve with Alpino?"
                    className={classNames(styles['input-style'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    placeholder="How do you want us to support you?"
                    className={classNames(styles['input-style'], 'text-content')}
                  />
                </div>
                <div className="pt-12 flex justify-start md:justify-end">
                  <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-end">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

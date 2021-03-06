import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';
import { set } from 'lodash';
import submit from '../staticUtils/formSubmit.js';

export default function becomeDistributor() {
  const [distributor, updateDistributor] = useState({
    companyName: '',
    email: '',
    name: '',
    contactNumber: '',
    district: '',
    existingConsumer: '',
    saleProjection: '',
    support: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputHandler = (value, name) => {
    const newData = { ...distributor };
    set(newData, name, value);
    updateDistributor(newData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await submit(distributor, 'Distributor');
    setSubmitted(true);
    setLoading(false);
  };
  console.log(distributor);
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={classNames(styles['background-distributor'], 'md:min-h-60')}>
          <Header opacity />
          <div className="md:min-height-55 md:hidden py-20 px-6 md:px-0">
            <h1 className="font-medium pt-16 text-white leading-8 text-2xl text-center md:hidden">
              Become a Distributor
            </h1>
            <h3 className="text-white pt-4 text-sm leading-5 text-center md:hidden">
              We’re here for you, even when you don’t know you need us
            </h3>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="bg-black lg:bg-white lg:min-h-60 w-full lg:w-2/4">
            <div className="px-8 md:px-28  pt-12 md:pt-20 flex flex-col lg:min-h-60">
              <p className="leading-relaxed md:leading-12 text-white lg:text-black text-sm md:text-2xl  font-normal md:font-medium">
                As a brand built for the masses, that focuses on essentials, we recognize offline retail as an equally
                important part of our business as online retail.
              </p>
              <p className="leading-relaxed md:leading-12 text-white lg:text-black text-sm md:text-2xl pt-12 md:pt-20 lg:pb-0 pb-16 font-normal md:font-medium">
                We’re already present in 10 states with over 100 retailers in just a matter of one year, and we’ll be
                more than happy to have you as an addition to the Alpino Family.
              </p>
            </div>
          </div>
          <img src="/blue-chair.jpeg" alt="blue-chair" className={classNames('w-full lg:w-2/4')} />
        </div>
        <div className="flex flex-col lg:flex-row">
          <img src="/two-people.jpeg" alt="blue-chair" className={classNames('w-full lg:w-2/4')} />
          <div className="bg-black lg:bg-black-distributor lg:min-h-60 w-full lg:w-2/4">
            <div className="px-8 md:px-28 pt-12  md:pt-20 pb-16 md:pb-48 flex flex-col md:min-h-60 justify-between">
              <p className="leading-relaxed md:leading-12 text-white text-sm md:text-2xl text-left lg:text-right font-normal md:font-medium">
                With exclusive products for our offline market at a dealer’s price, you don’t have to worry about price
                wars and margins. As a company that adds at least 4 SKUs every 25 days, we recognize the need to keep
                bringing new offerings to the market.
              </p>
              <p className="leading-relaxed md:leading-12 text-white text-sm md:text-2xl text-left lg:text-right pt-12 md:pt-0 font-normal md:font-medium">
                We value you and are ecstatic to welcome you as a part of the Alpino Family. It is fundamental to us to
                ensure your growth for our growth.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <h1 className="py-12 text-black leading-loose md:leading-14 text-2xl md:text-4.5xl text-center font-semibold">
            Become a Distributor
          </h1>
          <div className={classNames('px-6 md:px-20 lg:px-35 pb-16')}>
            <div className={classNames(' p-6 md:p-17 form-card')}>
              <div className="flex flex-row justify-between items-start sm:items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" />
                  <p className={classNames(styles['text-2xl-semibold'], 'text-content pl-2')}>Distributor</p>
                </div>
                <p className="text-content">Registration Form</p>
              </div>
              <form className={styles['pt-35']} onSubmit={onSubmit}>
                <div>
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'name')}
                    required
                    pattern="^[a-zA-Z\s\.]+$"
                    placeholder="Name"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'companyName')}
                    required
                    placeholder="Company Name"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'contactNumber')}
                    required
                    type="tel"
                    placeholder="Contact Number"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'email')}
                    required
                    type="email"
                    placeholder="Email ID"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'district')}
                    required
                    placeholder="What districts would you want to launch Alpino in?"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'existingConsumer')}
                    required
                    placeholder="Are you already working with existing consumer tech companies?If yes, please name them."
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'saleProjection')}
                    required
                    placeholder="What are the monthly sales projections that you would want to achieve with Alpino?"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'support')}
                    required
                    placeholder="How do you want us to support you?"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-12 flex justify-start md:justify-end">
                  <button
                    disabled={loading || submitted}
                    className="leading-5 rounded-full text-base py-3 px-8 outline-none  bg-white text-black  max-w-8 w-full flex justify-end font-semibold hover-transparent border-2 border-white border-solid">
                    {loading ? 'Submitting' : submitted ? 'Submitted' : 'Submit'}
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

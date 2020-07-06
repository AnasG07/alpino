import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function Contact() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-contact'], 'md:min-h-60')}>
          <Header transparent />
          <div className="flex p-30 flex-col justify-center items-center md:items-end md:justify-end md:min-h-55">
            <h1 className="leading-12 text-white font-medium md:font-semibold text-right md:text-4.5xl text-2xl">
              Contact
            </h1>
            <h3
              className={classNames(
                styles['max-width-25'],
                'pt-4 md:pt-0 text-sm md:text-2xl text-white leading-normal text-center md:text-right font-medium',
              )}>
              We’re here for you, even when you don’t know you need us
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="lg:min-h-60 w-full lg:w-2/4">
            <div className="px-16 lg:pl-28 lg:pr-20 pt-12 lg:pt-24 pb-8 lg:pb-16 flex flex-col lg:min-h-60 justify-between">
              <h1 className={classNames(styles['text-color-black-h1'], 'md:text-4.5xl text-2xl font-semi-imp')}>
                Contact Us
              </h1>
              <p className="text-sm md:text-2xl text-black leading-10 pt-4 lg:pt-0 font-normal  md:font-medium">
                It’s always a delight to hear from you! It not only gives us a chance to hear from a valued customer,
                but also helps us improve our services. Reach out to us at{' '}
                <span>
                  <a href="https://connect@alpino.tech" className="text-link-color">
                    connect@alpino.tech{' '}
                  </a>
                </span>
                or on our Toll Free Number +91-9870-456-457 If you’re in Delhi NCR, and want to hang, we’ll be more than
                happy to host you in our office.
              </p>
            </div>
          </div>
          <div className={classNames('lg:min-h-60 w-full lg:w-2/4 ', styles['p-15'])}>
            <div className={classNames(styles['p-15'], 'form-card ')}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" className="width-30" />
                  <p className=" text-xs text-white leading-loose md:text-lg pl-2 font-medium md:font-semibold">
                    Contact
                  </p>
                </div>
                <p className="text-xs text-white leading-loose md:text-lg font-light md:font-medium">
                  {' '}
                  Registration Form
                </p>
              </div>
              <form className={styles['pt-35']}>
                <div>
                  <input placeholder="Name" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Email ID" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-20">
                  <input placeholder="Message" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Contact Number" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-12 md:pt-30 flex justify-start md:justify-end">
                  <button className="leading-5 rounded-full text-sm md:text-base py-3 px-8 outline-none  bg-white text-black  max-w-8 w-full flex justify-center text-right hover-transparent border-2 border-white border-solid">
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

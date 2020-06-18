import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-contact'], 'min-height-60')}>
          <Header />
          <div className={classNames(styles['min-height-55'], 'flex p-30 flex-col items-end justify-end')}>
            <h1 className={classNames(styles['font-size-14'], 'leading-12 text-white font-medium text-right')}>
              Contact
            </h1>
            <h3 className={classNames(styles['max-width-25'], 'text-2xl text-white leading-normal text-right ')}>
              We’re here for you, even when you don’t know you need us
            </h3>
          </div>
        </div>
        <div className="flex flex-row bg-white">
          <div className="min-height-60 max-width-50">
            <div className="pl-30 pr-20 pt-24 pb-16 flex flex-col min-height-60 justify-between">
              <h1 className={(styles['text-color-black-h1'], styles['font-size-14'])}>Contact Us</h1>
              <p className="text-2xl texxt-black leading-10">
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
          <div className={classNames('min-height-60 max-width-50 w-full', styles['p-15'])}>
            <div className={classNames(styles['p-15'], 'form-card ')}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" />
                  <p className={classNames(styles['text-2xl-semibold'], 'text-content pl-2')}>Contact</p>
                </div>
                <p className="text-content"> Registration Form</p>
              </div>
              <form className={styles['pt-35']}>
                <div>
                  <input placeholder="Name" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Email ID" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20">
                  <input placeholder="Message" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Contact Number" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-30 flex justify-end">
                  <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center text-right">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

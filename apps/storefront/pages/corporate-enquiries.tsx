import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function Careers() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-glass'], 'min-h-25 md:min-h-60')}>
          <Header invert unfixed black />
          <div className={classNames(styles['pt-86'], 'flex justify-center flex-col items-center ')}>
            <h1 className="text-center leading-loose text-2xl  md:leading-12 md:text-black font-medium md:text-7xl">
              Corporate Enquiries
            </h1>
            <h3 className="pt-4 md:pt-10 max-w-30 text-center text-sm md:text-lg text-black font-normal leading-tight">
              After successfully serving individual customers across India, we’re now ready to open our services and our
              hearts to Corporates.
            </h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="bg-black lg:min-h-60 w-full  lg:w-2/4  p-30 justify-between items-center flex flex-col">
            <h1 className="leading-loose md:leading-12 text-white font-medium text-xl md:text-5xl pb-12 lg:pb-0">
              We value the individuality of each of our customers and hence offer customization in our products
              according to your organisation’s needs. The option of co-branding is also available.
            </h1>
            <h3 className={styles['text-h3']}>
              Keeping in with our policy of inclusivity, as far as we’re concerned, size doesn’t matter. We offer bulk
              orders irrespective of your organisation’s size and are ready to deliver orders of any quantity.{' '}
            </h3>
          </div>
          <img className="w-full lg:w-2/4 lg:min-h-60" src="./visa.jpg" alt="visa" />
        </div>
        <div className="bg-black flex flex-col-reverse md:flex-col">
          <h3 className="leading-tight md:leading-normal text-sm md:text-2xl text-white pb-8 md:pb-0 pt-8 md:pt-16  max-width-58 m-auto text-center">
            We also offer the advantage of limitless choice. With over 300SKUs to choose from , you have the liberty to
            select the product that suits your organiszation best
          </h3>
          <img src="enquiry.png" alt="enquiry" className="mt-0 md:-mt-20" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row bg-grey-medium">
          <div className={classNames('lg:min-h-60 w-full lg:w-2/4', styles['p-15'])}>
            <div className={classNames(styles['p-15'], 'form-card-darker')}>
              <form className={styles['pt-15']}>
                <div>
                  <input placeholder="Name" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20 ">
                  <input placeholder="Email ID" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20">
                  <input placeholder="Phone Number" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20">
                  <input placeholder="Company & City" className={classNames(styles['input-style'], 'text-content')} />
                </div>
                <div className="pt-20">
                  <input
                    placeholder="Details of Requirements"
                    className={classNames(styles['input-style'], 'text-content')}
                  />
                </div>
                <div className="pt-30">
                  <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="min-h-25 lg:min-h-60 w-full lg:w-2/4">
            <div className="p-12 md:p-31 flex flex-col lg:min-h-60 justify-between">
              <h1 className="leading-loose md:leading-12 text-white font-medium text-2xl pb-12 lg:pb-0 md:text-5xl">
                Get the answers to your bulk shopping woes! Fill in the form and we'll get right back to you.
              </h1>
              <div>
                <h3 className={styles['text-h3']}>
                  {' '}
                  Our highest priority has always been customer satisfaction. As the cherry on top of the cherry, we
                  don’t just stop at providing products of the highest quality, we ensure our products add value to your
                  life. A testament of this belief is our excellent after sales service.
                </h3>
                <h3 className={classNames(styles['text-h3'], 'pt-4')}>
                  You can also reach us at{' '}
                  <span>
                    <a href="https://connect@alpino.tech" className="underline">
                      connect@alpino.tech
                    </a>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function Refund() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-warranty'], styles['min-height-80'])}>
          <Header invert />
          <div className="pt-48 flex justify-center flex-col items-center">
            <h1 className={classNames(styles['text-heading-black-new'], 'text-center')}>Refund</h1>
            <h3
              className={classNames(
                styles['text-color-warranty'],
                'max-w-30 text-center leading-normal text-center pt-0 md:pt-4',
              )}>
              Getting in touch with us is as easy as can be
            </h3>
          </div>
          <div
            className={classNames(
              'bg-black flex flex-col justify-center items-start md:items-center px-8 md:px-0',
              styles['mt-188'],
            )}>
            <h1
              className={classNames(
                'leading-loose text-white text-xl font-medium md:font-semibold md:text-4.5xl  pt-8 md:pt-16',
              )}>
              Refund and Replacement Policy
            </h1>
            <h3 className="text-sm leading-7 md:leading-12 md:text-2xl text-white max-width-686 font-normal md:font-medium text-left md:text-center">
              Refund/Replacement is only applicable under the following circumstances -
            </h3>
          </div>
        </div>
        <div className="bg-black flex flex-col-reverse lg:flex-row pt-16 justify-between">
          <div className="px-8 lg:pl-31 md:border-none">
            <h3 className="font-medium md:font-semibold leading-loose md:leading-12 text-base md:text-2xl text-white max-width-686 pt-8 lg:pt-0">
              Delayed Delivery
            </h3>
            <p className="leading-7 md:leading-12 text-sm md:text-lg font-normal md:font-medium text-white max-width-686 border-b md:border-none border-border-respon ">
              If the product delivery takes more time than promised (reasons like natural calamities, delay due to the
              logistics partner(s), unavailability of the customer, etc. are covered under exceptions and a refund will
              not be entertained under such circumstances), then the customer can cancel the order and the full amount
              will be refunded back to the customer within 14 working days. We do not take any responsibility for a
              delay in refund because of the delays made by the bank, calamities or national holidays.
            </p>
          </div>
          <div className="px-10 flex justify-center">
            <img src="/clock.jpeg" alt="clock" className={styles['img-clock']} />
          </div>
        </div>
        <div className="bg-black flex flex-col lg:flex-row pt-16 justify-between">
          <div className="px-10 flex justify-center">
            <img src="/yellow.jpeg" alt="clock" className={styles['img-clock']} />
          </div>
          <div className="px-8 lg:pr-31 pt-4 lg:pt-0">
            <h3 className="font-medium md:font-semibold leading-loose md:leading-12 text-base md:text-2xl text-white max-width-686  text-left lg:text-right">
              Wrong Product received
            </h3>
            <p className="leading-7 md:leading-12 text-sm md:text-lg font-normal md:font-medium text-white max-width-686 text-left lg:text-right border-b md:border-none border-border-respon">
              A customer can ask for a refund if the specifications of the product received are not as per the
              specifications mentioned in the website or if the product replacement takes more than 14 working days. A
              refund will, however, not be initiated, if the customer is unhappy with the look/sound quality of a defect
              free product.
            </p>
          </div>
        </div>
        <div className="bg-black flex flex-col-reverse lg:flex-row pt-16 justify-between">
          <div className="px-8 lg:pl-31 pb-8 lg:pb-0">
            <h3 className="font-medium md:font-semibold leading-loose md:leading-12 text-base md:text-2xl text-white max-width-686 pt-4 lg:pt-0">
              Damaged Product received
            </h3>
            <p className="leading-7 md:leading-12 text-sm md:text-lg font-normal md:font-medium text-white max-width-686">
              We reserve the right to inspect the Product and verify fault. You are required to return the faulty
              Product to us for assessment and the Product must be returned in a reasonable condition with documentation
              and original accessories intact, along with proof of purchase, the original packaging materials, shipping
              label and packaging slip. You do not need to return the Product in the original packaging but you should
              ensure that the Product is properly packaged to prevent damage or water seepage. We will notify you of our
              assessment within a reasonable period of time. If a Product is found to be faulty, the customer is
              entitled to have the Product repaired, replaced or a refund in accordance to your rights under law. If we
              reasonably determine after inspection that the Product is not faulty, or if the fault is caused by the
              customer, or is a fault that is not covered under the Product warranty, we reserve the right to refuse a
              refund, replacement or repair and to charge you the cost of collecting the Product from and returning it
              to you plus any costs of inspecting the Product.
            </p>
          </div>
          <div className="px-10 flex justify-center">
            <img src="/broken.jpeg" alt="clock" className={styles['img-clock']} />
          </div>
        </div>
        <div className="bg-black-privacy lg:bg-black flex flex-row justify-center py-20 px-8 lg:px-0 ">
          <div className={styles['max-width-49']}>
            <p className="leading-7 md:leading-12 text-sm md:text-lg font-normal md:font-medium text-white lg:text-center">
              The refund/replacement will only be processed upon the receipt and verification of complete product with
              accessories. The cost of any missing items will be debited from the advance payment done and the balance
              amount will be refunded.
            </p>
            <p className="leading-7 md:leading-12 text-sm md:text-lg font-normal md:font-medium text-white pt-6 lg:text-center">
              Please note that depending on the situation, the amount may be refunded after deducting the bank and
              delivery charges.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function Refund() {
  return (
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-warranty'], styles['min-height-80'])}>
          <Header invert />
          <div className="pt-48 flex justify-center flex-col items-center">
            <h1 className={classNames(styles['text-heading-black'], 'text-center', styles['font-size-14'])}>Refund</h1>
            <h3
              className={classNames(
                styles['text-color-warranty'],
                'max-w-30 text-center leading-normal text-center pt-4',
              )}>
              Getting in touch with us is as easy as can be
            </h3>
          </div>
          <div className={classNames('bg-black flex flex-col justify-center items-center', styles['mt-188'])}>
            <h1 className={classNames(styles['font-size-14'], 'leading-loose text-white pt-16')}>
              Refund and Replacement Policy
            </h1>
            <h3 className="leading-12 text-2xl text-white max-width-686 text-center">
              Refund/Replacement is only applicable under the following circumstances -
            </h3>
          </div>
        </div>
        <div className="bg-black flex flex-row pt-16 justify-between">
          <div className="pl-30">
            <h3 className="leading-12 text-2xl text-white max-width-686">Delayed Delivery</h3>
            <p className="leading-12 text-lg text-white max-width-686 ">
              If the product delivery takes more time than promised (reasons like natural calamities, delay due to the
              logistics partner(s), unavailability of the customer, etc. are covered under exceptions and a refund will
              not be entertained under such circumstances), then the customer can cancel the order and the full amount
              will be refunded back to the customer within 14 working days. We do not take any responsibility for a
              delay in refund because of the delays made by the bank, calamities or national holidays.
            </p>
          </div>
          <div className="px-10">
            <img src="/clock.jpeg" alt="clock" className={styles['img-clock']} />
          </div>
        </div>
        <div className="bg-black flex flex-row pt-16 justify-between">
          <div className="px-10">
            <img src="/yellow.jpeg" alt="clock" className={styles['img-clock']} />
          </div>
          <div className="pr-30">
            <h3 className="leading-12 text-2xl text-white max-width-686 text-right">Wrong Product received</h3>
            <p className="leading-12 text-lg text-white max-width-686 text-right">
              A customer can ask for a refund if the specifications of the product received are not as per the
              specifications mentioned in the website or if the product replacement takes more than 14 working days. A
              refund will, however, not be initiated, if the customer is unhappy with the look/sound quality of a defect
              free product.
            </p>
          </div>
        </div>
        <div className="bg-black flex flex-row pt-16 justify-between">
          <div className="pl-30">
            <h3 className="leading-12 text-2xl text-white max-width-686">Damaged Product received</h3>
            <p className="leading-12 text-lg text-white max-width-686">
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
          <div className="px-10">
            <img src="/broken.jpeg" alt="clock" className={styles['img-clock']} />
          </div>
        </div>
        <div className="bg-black flex flex-row justify-center py-20">
          <div className={styles['max-width-49']}>
            <p className="leading-12 text-lg text-white text-center">
              The refund/replacement will only be processed upon the receipt and verification of complete product with
              accessories. The cost of any missing items will be debited from the advance payment done and the balance
              amount will be refunded.
            </p>
            <p className="leading-12 text-lg text-white pt-6 text-center">
              Please note that depending on the situation, the amount may be refunded after deducting the bank and
              delivery charges.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

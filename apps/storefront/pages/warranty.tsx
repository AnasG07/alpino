import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';
import QuestionCard from '../components/QuestionCard';

export async function getStaticProps() {
  return {
    props: {
      faq: [
        {
          question: 'WHAT DOES THE ALPINO WARRANTY COVER',
          answer:
            ' At Alpino, we cover all claims that are considered a manufacturer defect. To put it simply, if you had a problem because of workmanship, then we would cover it. However, if you broke your headphones because they were mistreated or subjected to hostile environments then your issue would not be covered under warranty.',
        },
        {
          question: 'HOW DO I SHIP MY ITEM TO ALPINO?',
          answer:
            'As a company that values its customers, we assure getting back to all service requests within two working days after the call/e-mail has reached us.',
        },
        {
          question: 'HOW LONG DOES THE WHOLE PROCESS TAKE?',
          answer:
            'In keeping with our company policy, customers can only get their product(s) exchanged within 10 days of making the purchase. However, for the same process, the cost of one side logistics must be paid by the customer.',
        },
        {
          question: 'WHAT IS A PROOF OF PURCHASE?',
          answer:
            'Neither us nor any of our affiliate(s) sell specific parts as a separate item of purchase, yet. However, the customer may refer to our website if a certain product they are looking for, is sold as an accessory.',
        },
      ],
    },
  };
}

export default function Warranty({ faq }) {
  const year = [
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];

  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-warranty'], styles['min-height-64'])}>
          <Header invert />
          <div className="pt-24 pb-8 md:pb-0 md:pt-40 flex justify-center flex-col items-center ">
            <h1 className={classNames(styles['text-heading-black-new'], 'text-center')}>Warranty</h1>
            <h3
              className={classNames(
                styles['text-color-warranty'],
                'pt-2 max-w-30 text-center leading-normal text-center',
              )}>
              A warranty might seem useless for products that exceed their life.
            </h3>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="bg-black md:min-h-60 w-full lg:w-2/4 p-8 md:p-31  items-baseline md:items-center flex flex-col">
            <p className="text-sm md:text-3xl leading-7 md:leading-12 font-normal md:font-medium text-white">
              All warranty claims are subject to Alpino Tech’s authorization and occur at our sole discretion only.
            </p>
            <p className="text-sm md:text-3xl leading-7 md:leading-12 font-normal md:font-medium  text-white pt-6">
              Along with excellent products and a choice of over 300 SKUs, we provide our customers with a warranty
              period of 1 year/ 6 months/ 3 months depending on the product category.
            </p>
            <p className="text-sm md:text-3xl leading-7 md:leading-12 font-normal md:font-medium  text-white pt-6">
              {' '}
              To claim the warranty on our products, filling the product registration form through our website is
              mandatory, especially if the order has been placed through amazon/flipkart.
            </p>
          </div>
          <img className="w-full lg:w-2/4" src="./visa.jpg" alt="visa" />
        </div>
        <div className="flex flex-col lg:flex-row bg-white">
          <div className="w-full lg:w-2/4">
            <div
              className={classNames(
                styles['min-height-53'],
                'pl-8 lg:pl-31 pr-8 lg:pr-20 pt-8 lg:pt-24 pb-8 lg:pb-16 flex flex-col justify-between',
              )}>
              <h1
                className={classNames(
                  'leading-8 md:leading-12 text-black text-2xl md:text-5xl text-center md:text-left  font-semibold',
                )}>
                Product Registration Form
              </h1>
              <p className="text-sm md:text-3xl text-black leading-loose md:leading-12 pt-6 lg:pt-0">
                To claim the warranty on our products, filling the product registration form through our website is
                mandatory
              </p>
            </div>
          </div>
          <div className={classNames('w-full lg:w-2/4', styles['p-15'], styles['min-height-53'])}>
            <div className={classNames(styles['p-15'], 'form-card ')}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" />
                  <p
                    className={classNames(
                      'text-xs md:text-2xl md:font-semibold text-white-light leading-tight md:leading-normal pl-2',
                    )}>
                    Warranty
                  </p>
                </div>
                <p className="text-content"> Registration Form</p>
              </div>
              <form className="pt-24">
                <div>
                  <input
                    pattern="^[a-zA-Z\s\.]+$"
                    placeholder="Name"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-16">
                  <input placeholder="Email ID" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-16">
                  <input placeholder="Order ID" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-16">
                  <input placeholder="Marketplace" className={classNames(styles['input-styles'], 'text-content')} />
                </div>
                <div className="pt-16 flex flex-row ">
                  <p className="text-content">Order Date</p>
                  <div className="flex flex-row pl-24">
                    <select className={classNames(styles['input-styles'], 'text-content-select pb-2 mx-4 px-2 ')}>
                      <option value="">DD</option>
                      {[...Array(31).keys()].map((i) => (
                        <option value={i + 1}>{i + 1} </option>
                      ))}
                    </select>
                    <select className={classNames(styles['input-styles'], 'text-content-select pb-2 mx-4 px-2 ')}>
                      <option value="">MM</option>
                      {[...Array(12).keys()].map((i) => (
                        <option value={i + 1}>{i + 1} </option>
                      ))}
                    </select>
                    <select className={classNames(styles['input-styles'], 'text-content-select pb-2 mx-4 px-2 ')}>
                      <option value="">YY</option>
                      {year.map((i) => (
                        <option value={i}>{i} </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="pt-30 flex justify-end">
                  <button className="font-semibold leading-5 rounded-full text-base py-3 px-8 outline-none  bg-white text-black  max-w-8 w-full flex justify-center text-right hover-transparent border-2 border-white border-solid">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-16 px-8 md:px-32 bg-black">
          <h1 className="text-white text-left md:leading-16  text-2xl md:text-5xl  font-semibold leading-8">
            Frequently Asked Questions
          </h1>
          <div className="py-20">
            {faq.map((data, index) => (
              <QuestionCard invert data={data} index={index} key={index} />
            ))}
          </div>
        </div>
        <div
          className={classNames(
            styles['background-gradient'],
            'min-height-38 flex flex-col pt-4 pb-4 md:pt-20 md:pb-20 px-8 md:px-0',
          )}>
          <h1 className="leading-8 md:leading-12 text-2xl md:text-4xl text-white text-center font-semibold">
            Cancellation Policy
          </h1>
          <p
            className={classNames(
              'leading-7 md:leading-loose text-sm md:text-xl text-white text-left md:text-center pt-8 md:mx-auto',
              styles['max-width-42'],
            )}>
            In keeping with our longstanding belief of customer satisfaction, it is important to us to ensure each of
            our customers have a fulfilling experience. We, therefore, follow a liberal cancellation policy.
          </p>
          <p
            className={classNames(
              'leading-7 md:leading-loose text-sm md:text-xl text-white text-left md:text-center pt-4 md:pt-0 md:mx-auto',
              styles['max-width-42'],
            )}>
            Under this policy:
          </p>
          <p
            className={classNames(
              'leading-7 md:leading-loose text-sm  md:text-xl text-white text-left md:text-center md:mx-auto',
              styles['max-width-42'],
            )}>
            1. Cancellation requests will not be entertained if the order has been dispatched from the warehouse.
          </p>
          <p
            className={classNames(
              'leading-7 md:leading-loose text-sm md:text-xl text-white text-left md:text-center md:mx-auto',
              styles['max-width-42'],
            )}>
            2. To cancel your order, send us an e-mail on support@alpino.tech with your ORDER id within 6 hours of
            placing the order.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import styles from './static.module.css';
import classNames from 'classnames';

export async function getStaticProps() {
  return {
    props: {
      faq: [
        {
          question: 'Till when are the points and referral discounts valid? ',
          answer: 'The points and referral discounts are valid till March 2021.',
        },
        {
          question: 'In what time period must the purchases be made to take me to enter the GB programme?',
          answer:
            'As soon as you make a purchase of Rs 1999 and above, you automatically enroll into our MB programme. If within 3 months of enrollment into the MB programme, you make purchases worth Rs 6,999, you get enrolled into the GB programme.',
        },
        {
          question: 'In what time period must the purchases be made to take me to enter the TB programme?',
          answer:
            'If within 6 months of enrollment into our GB programme, you make purchases of Rs 9,999, you become eligible for our TB programme.',
        },
        {
          question: 'Is there a limit to how many points can be earned?',
          answer:
            'There is NO limit to how many points can be earned. We’d love to have you shop as much and as frequently as you can with us!',
        },
        {
          question: 'How to leave the Alpino Points of Victory programme?',
          answer:
            ' If you no longer wish to earn points and are against your best interest, contact us and we’ll un-enroll you. However, you will lose all your points.',
        },
        {
          question: 'Can I rejoin the RSWP or Alpino POV programme after leaving?',
          answer:
            ' As long as the offer is still valid, we’ll be more than happy to accommodate you. However, your points will be zero on restarting. ',
        },
        {
          question: 'Can I refer the same person more than once? ',
          answer: 'We’re sorry but you cannot refer the same person more than once.',
        },
        {
          question: 'Is my reward contingent on my referees making a purchase?',
          answer:
            ' While your reward is contingent on making unique authentic individuals register in the RSWP programme, it is not contingent to the purchase by those you refer. However, we’d request you to encourage them to purchase from us, if you’re satisfied with our services! ',
        },
        {
          question: 'What is the monetary value of each point?',
          answer:
            'Each point is earned based on a rate dependent on what level of the Alpino POV programme you’re indulged in. However, each point is redeemed at a flat rate of 1 point being worth Rs 1.00/-',
        },
      ],
    },
  };
}

export default function Loyalty({ faq }) {
  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-baloon'], 'bg-center min-h-25 md:min-h-60 ')}>
          <Header transparent />
          <h1 className=" md:text-7xl text-black font-medium leading-8 md:leading-20 text-center pt-32 md:pt-370">
            Alpino Benefaction Code <br />
            (ABC)
          </h1>
        </div>
        <div className="px-6 md:px-31 py-6 md:pt-40 flex flex-col lg:flex-row justify-between bg-grey-loyalty md:bg-black">
          <h3 className="text-white-light font-medium text-base md:text-lg  leading-5 md:leading-normal lg:max-w-550">
            As your favourite tech brand, at Alpino we’ve taken it upon ourselves to express our gratitude to you, in a
            form as simple as ABC, for all the love you show us.
          </h3>
          <h3 className="text-white-light font-medium text-base md:text-lg  leading-5 md:leading-normal lg:max-w-550 pt-4 md:pt-0">
            We want to serve more and more people around you and give you the chance to earn huge discounts not just by
            redeeming points from your purchases but also win exciting products by referring friends and family.
          </h3>
        </div>
        <div className="px-6 md:px-31 pt-16 md:pt-48">
          <h1 className="text-2xl md:text-5xl leading-6  md:leading-12 text-white-light lg:max-w-480">
            Alpino Points of Victory (POV)
          </h1>
        </div>
        <div className="px-6 md:px-31 pt-8 md:pt-16 flex flex-col lg:flex-row justify-between">
          <h3 className="text-white-light  text-base md:text-lg leading-5 md:leading-normal lg:max-w-550">
            While the trust you’ve put in us can’t be quantified, we can still do our best to honour it.
          </h3>
          <h3 className="text-white-light text-base md:text-lg leading-5  md:leading-normal lg:max-w-550 pt-4 md:pt-0">
            The Alpino POV has been made to celebrate your commitment to us, and thank you in the right proportion for
            the time you’ve invested in us. We bring three tiers – The MB, GB, and TB, each with their own points of
            victory.
          </h3>
        </div>
        <div className="pt-32 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="text-80 md:text-144 font-thin leading-20 md:leading-12 text-white-light pb-12 md:pb-24 ml-6 mr-6  md:ml-31 md:mr-12 lg:mr-0">
              MB
            </h1>
            <p className="text-base md:text-lg leading-5 md:leading-normal text-white-light lg:max-w-360 mx-6 md:ml-31 md:mr-12 lg:mr-0">
              With every purchase of Rs 1,999 and above, you automatically enter our MB programme where each 50 rupee
              spent by you constitutes a redeemable point.
            </p>
            <div className="flex flex-col lg:flex-row flex-grow pt-6 md:pt-16 lg:pt-31  mx-6 md:ml-31 lg:ml-0">
              <span className="text-sm leading-tight text-white-light pr-16 mt-2">POINT</span>
              <div className="flex pt-4 lg:pt-0">
                <img src="indian.png" className="h-6 w-6 md:w-12 md:h-12 mr-2" />
                <p className="leading-8 md:leading-12 font-light text-white-light text-base md:text-4xl">
                  {' '}
                  50 = 1 point
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-grow w-336 pt-31 hidden lg:flex">
              <span className=" text-sm leading-tight text-white-light pr-4">SPEND</span>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full pt-32 lg:pt-0">
            <h1 className="text-80 md:text-144 font-thin leading-20 md:leading-12 text-white-light pb-12 md:pb-24 ml-6 mr-6  md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              GB
            </h1>
            <p className="text-base md:text-lg leading-5 md:leading-normal text-white-light lg:max-w-360 ml-6 mr-6   md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              With a quarterly spend of Rs 6,999, you upgrade to the faster GB programme where each 40 rupee spent by
              you constitutes a redeemable point.
            </p>
            <div className="flex flex-col lg:flex-row flex-grow pt-6 md:pt-16 lg:pt-31 ml-6 mr-6  md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              <span className="lg:hidden text-sm leading-tight text-white-light pr-4">POINT</span>
              <div className="flex pt-4 lg:pt-0">
                <img src="indian.png" className="h-6 w-6 md:w-12 md:h-12 mr-2" />
                <p className="leading-8 md:leading-12 font-light text-white-light text-base md:text-4xl">
                  40 = 1 point
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-grow w-336 pt-6 md:pt-16 lg:pt-31 ml-6 mr-6   md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              <span className="lg:hidden text-sm leading-tight text-white-light pr-4">SPEND</span>
              <div className="flex pt-4 lg:pt-0">
                <img src="indian.png" className="h-6 w-6 md:w-12 md:h-12 mr-2" />
                <p className="leading-8 md:leading-12 font-light text-white-light text-base md:text-4xl">
                  6999 in the first 3 months
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full pt-32 lg:pt-0">
            <h1 className="text-80 md:text-144 font-thin leading-20 md:leading-12 text-white-light pb-12 md:pb-24  ml-6 mr-6  md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              TB
            </h1>
            <p className="text-base md:text-lg leading-5 md:leading-normal text-white-light lg:max-w-360  ml-6 mr-6  md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              After your enrollment into the GB programme, you reach the top tier TB programme with a subsequent
              purchase of Rs 9,999 in the next six months.
            </p>
            <div className="flex flex-col lg:flex-row flex-grow pt-6 md:pt-16 lg:pt-31 ml-6 mr-6  md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              <span className="lg:hidden text-sm leading-tight text-white-light pr-4">POINT</span>
              <div className="flex pt-4 lg:pt-0">
                <img src="indian.png" className="h-6 w-6 md:w-12 md:h-12 mr-2" />
                <p className="leading-8 md:leading-12 font-light text-white-light text-base md:text-4xl">
                  30 = 1 point
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-grow w-336 pt-6 md:pt-16 lg:pt-31 ml-6 mr-6  md:ml-31 md:mr-12 lg:ml-0 lg:mr-0">
              <span className="lg:hidden text-sm leading-tight text-white-light pr-4">SPEND</span>
              <div className="flex pt-4 lg:pt-0">
                <img src="indian.png" className="h-6 w-6 md:w-12 md:h-12 mr-2" />
                <p className="leading-8 md:leading-12 font-light text-white-light text-base md:text-4xl">
                  9999 in the next 6 months
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 pt-16 md:p-31">
          <p className="font-semibold text-sm md:text-lg leading-5 md:leading-normal text-white-light pb-4">
            Terms and Conditions
          </p>
          <p className="text-sm md:text-lg leading-5 md:leading-normal text-white-light">
            The points must be redeemed by March 2021.
          </p>
          <p className="text-sm md:text-lg leading-5 md:leading-normal text-white-light">
            There is no minimum order value for redemption of points.
          </p>
          <p className=" text-sm md:text-lg leading-5 md:leading-normal text-white-light">
            The points can only be redeemed without using any additional discount/promo code from Alpino or its
            affiliates.
          </p>
        </div>
        <div className="p-6 md:p-31 bg-grey-loyalty">
          <h1 className="leading-8 md:leading-12 text-2xl md:text-5xl text-white-light font-medium">
            RSWP – Refer Someone Win Plenty{' '}
          </h1>
          <div className="pt-12 md:pt-31 flex flex-col lg:flex-row justify-between">
            <p className="text-sm md:text-lg text-white-light lg:max-w-480 leading-5 md:leading-normal">
              As a way to thank you for your loyalty, we wish to give you the chance to win our products FOR FREE!
            </p>
            <p className="text-sm md:text-lg text-white-light lg:max-w-480 leading-5 md:leading-normal">
              Refer your friends and family and get our products delivered to you for free, while the people you
              register earn a 5% discount on their first order.
            </p>
          </div>
          <div className="pt-12 md:pt-48 flex flex-col lg:flex-row justify-between">
            <div className=" w-full lg:w-1/3">
              <img src="/allProducts/trip1.png" alt="earphone" className="h-300 mx-auto" />
              <p className="text-base md:text-lg text-white-light lg:max-w-360 leading-5 md:leading-normal pt-10 mx-auto">
                {' '}
                Refer 5 people and win a FREE Alpino Trip escape with a minimum order of Rs 999
              </p>
            </div>
            <div className="w-full lg:w-1/3 lg:mx-12">
              <img src="/allProducts/townSquare1.png" alt="earphone" className="h-300 mx-auto" />
              <p className="text-base md:text-lg text-white-light lg:max-w-360 leading-5 md:leading-normal pt-10 mx-auto">
                Refer 10 people and win a FREE Town Square Speaker with a minimum order of Rs 1799.
              </p>
            </div>
            <div className="w-full lg:w-1/3">
              <img src="/allProducts/rock1.png" alt="earphone" className="h-300 mx-auto" />
              <p className="text-base md:text-lg text-white-light lg:max-w-360 leading-5 md:leading-normal pt-10 mx-auto">
                Refer 25 people and win a FREE Rock Speaker with a minimum order of Rs 3199.
              </p>
            </div>
          </div>
          <div className="pt-31">
            <p className="text-xs md:text-base text-white-light leading-3 md:leading-8 text-left md:text-center">
              ALL YOU HAVE TO DO IS MAKE YOUR FIRENDS AND FAMILY REGISTER ON OUR WEBSITE WITH UNIQUE PHONE NUMBRES AND
              EMAIL ADDRESSES.
            </p>
            <p className="text-xs md:text-base text-white-light leading-3 md:leading-8 text-left md:text-center pt-2">
              AND{' '}
            </p>
            <p className="text-xs md:text-base text-white-light leading-3 md:leading-8 text-left md:text-center pt-2">
              YOUR FRIENDS AND FAMILY MUST REGISTER WITH YOUR UNIQUE REFERRAL CODE TO BE eligible FOR redemption OF
              ODDER ON BOTH SIDES.
            </p>
          </div>
          <div className="pt-12 md:pt-32">
            {' '}
            <p className="font-semibold text-sm md:text-lg leading-5 md:leading-normal text-white-light pb-4">
              Terms and Conditions
            </p>
            <p className="text-sm md:text-lg leading-5 md:leading-normal text-white-light">
              The offer is only valid till March 2021.
            </p>
            <p className="text-sm md:text-lg leading-5 md:leading-normal text-white-light">
              Terms and Conditions Sign up must be completed along with mobile verification for referee to earn the
              discount.
            </p>
            <p className="text-sm md:text-lg leading-5 md:leading-normal text-white-light">
              The discount is only valid on first order and can’t be coupled with any other discount/promo code from
              Alpino or its affiliates.
            </p>
          </div>
        </div>
        <div className="px-6 pt-6 md:p-31">
          <h1 className="text-2xl md:text-5xl text-white-light leading-8 md:leading-12 pb-6  md:pb-31">FAQs</h1>
          {faq.map((i, index) => (
            <div className="flex flex-row pb-6">
              <p className="font-semibold text-sm md:text-lg leading-5 md:leading-normal text-white-light">
                {index + 1}.
              </p>
              <div className="pl-8 ">
                <p className="font-semibold md:text-lg leading-5 text-white-light ">{i.question}</p>
                <p className="md:text-lg leading-5 text-white-light ">{i.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

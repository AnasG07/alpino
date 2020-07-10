import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionCard from '../components/QuestionCard';

export async function getStaticProps() {
  return {
    props: {
      faq: [
        {
          question: 'What all documents must be preserved to redeem the warranty period benefits?',
          answer:
            'In order to avail the benefits of the warranty period, the customer must preserve and present a copy of the original invoice. Along with this a simple form, available on our website must be filled which has details about their purchase date, order-id and e-commerce marketplace the customer purchased the product from.',
        },
        {
          question: 'How can I track my service request?',
          answer:
            'As a company that values its customers, we assure getting back to all service requests within two working days after the call/e-mail has reached us.',
        },
        {
          question: 'How do I repair or return my device?',
          answer:
            'In keeping with our company policy, customers can only get their product(s) exchanged within 10 days of making the purchase. However, for the same process, the cost of one side logistics must be paid by the customer.',
        },
        {
          question: 'Is there a process with which I can buy specific parts for my device?',
          answer:
            'Neither us nor any of our affiliate(s) sell specific parts as a separate item of purchase, yet. However, the customer may refer to our website if a certain product they are looking for, is sold as an accessory.',
        },
        {
          question: 'What are the advantages of subscribing to the Alpino Newsletter?',
          answer:
            'The Alpino Newsletter offers our customers several advantages including receiving authentic information about our products and services before anyone else. They would also receive a 15% pre-launch discount on our products.',
        },
        {
          question: 'How can I redeem my discount after subscribing to the Alpino Newsletter?',
          answer:
            'After subscribing to the Alpino Newsletter, the customers will instantly receive a coupon code in their registered email which they can use on checkout.',
        },
        {
          question: 'How do I unsubscribe to the Newsletter?',
          answer:
            'You may unsubscribe from our newsletter at any time by clicking on the "Unsubscribe" link at the bottom of any Alpino Newsletter received in your email.',
        },
      ],
    },
  };
}

export default function Support({ faq }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="background-image-support md:min-h-60">
          <Header invert />
          <div className="flex justify-center flex-col items-center pt-40">
            <h1 className="text-white md:text-black leading-8 font-medium md:font-semibold text-2xl md:text-5xl text-left leading-loose md:leading-12">
              Support
            </h1>
            <h3 className="text-white md:text-black font-normal md:font-medium text-sm  md:text-2xl max-w-lg text-center pt-2 leading-tight md:leading-8">
              For power that never runsout, support that’s always by your side
            </h3>
          </div>
        </div>
        <div className="bg-black flex flex-col-reverse md:flex-row py-20">
          <div className="flex flex-col p-8 md:p-24">
            <span className="text-sm md:text-xl leading-7 md:leading-8 text-white">
              At Alpino, we’re committed to providing our customers the best of products, to help make their life
              better. In keeping with our long-standing belief of superior quality, we leave no stone unturned in
              ensuring our products power up your life and add bass to more than just your music.
            </span>
            <span className="text-sm md:text-xl leading-7 md:leading-8 text-white pt-16">
              All our products go through a Three-Level Quality Check and we go the extra mile by taking down all the
              SKUs that get a rating lower than 3-stars on amazon.
            </span>
            <span className="text-sm md:text-xl leading-7 md:leading-8 text-white pt-16">
              All our products come with a guarantee of excellence and if there persists any problem during the warranty
              usage of any product, feel free to reach out to us at +91-9870-456-457 or write to us at &nbsp;
              <a
                href="https://support@alpino.tech"
                className="text-link-color underline"
                target="_blank"
                rel="noreferrer">
                support@alpino.tech
              </a>
            </span>
          </div>
          <img src="./window.jpg" alt="window" className="md:w-2/4 w-full" />
        </div>
        <div className="bg-white pt-8 md:pt-16 px-8 md:px-32">
          <h1 className="text-black text-left leading-8 md:leading-16 font-semibold text-2xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <div className="py-12 md:py-20">
            {faq.map((data, index) => (
              <QuestionCard data={data} index={index} key={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

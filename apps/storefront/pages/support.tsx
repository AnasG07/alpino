import React from 'react';
import Head from 'next/head';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import QuestionCard from '../components/QuestionCard.tsx';
// import styles from './support.css';

export async function getServerSideProps(context) {
  return {
    props: {
      faq: [
        {
          question: 'What all documents must be preserved to redeem the warranty period benefits?',
          answer:
            ' In order to avail the benefits of the warranty period, the customer must preserve and present a copy of the original invoice. Along with this a simple form, available on our website must be filled which has details about their purchase date, order-id and e-commerce marketplace the customer purchased the product from.',
        },
        {
          question: 'How can I track my service request?',
          answer: 'lorem ipsum',
        },
        {
          question: 'How do I repair or return my device?',
          answer: 'lorem ipsum dipsuem',
        },
        {
          question: 'Is there a process with which I can buy specific parts for my device?',
          answer: 'lorem ipsum dipsuem',
        },
        {
          question: 'What are the advantages of subscribing to the Alpino Newsletter?',
          answer: 'lorem ipsum dipsuem',
        },
        {
          question: 'How can I redeem my discount after subscribing to the Alpino Newsletter?',
          answer: 'lorem ipsum dipsuem',
        },
        {
          question: 'How do I unsubscribe to the Newsletter?',
          answer: 'lorem ipsum dipsuem',
        },
      ],
    },
  };
}

export default function Support({ faq }) {
  return (
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="background-image-support min-height-60">
          <Header invert />
          <div className="flex justify-center flex-col items-center pt-24">
            <h1 className="text-black leading-8">Support</h1>
            <h3 className="text-black text-2xl max-w-lg text-center pt-2 leading-8">
              For power that never runsout, support that’s always by your side
            </h3>
          </div>
        </div>
        <div className="bg-black flex flex-row py-20">
          <div className="flex flex-col p-24">
            <span className="text-xl leading-8 text-white">
              At Alpino, we’re committed to providing our customers the best of products, to help make their life
              better. In keeping with our long-standing belief of superior quality, we leave no stone unturned in
              ensuring our products power up your life and add bass to more than just your music.
            </span>
            <span className="text-xl leading-8 text-white pt-16">
              All our products go through a Three-Level Quality Check and we go the extra mile by taking down all the
              SKUs that get a rating lower than 3-stars on amazon.
            </span>
            <span className="text-xl leading-8 text-white pt-16">
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
          <img src="./window.jpg" alt="window" className="max-w-45" />
        </div>
        <div className="pt-16 px-32">
          <h1 className="text-black text-left leading-16">Frequently Asked Questions</h1>
          <div className="py-20">
            {faq.map((i, index) => (
              <QuestionCard data={i} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

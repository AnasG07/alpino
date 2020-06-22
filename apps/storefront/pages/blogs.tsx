import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import styles from './static.module.css';
// import classNames from 'classnames';
import BlogCard from '../components/BlogCard';

export async function getStaticProps() {
  return {
    props: {
      blogs: [
        {
          image: '/laptop.jpeg',
          heading: `We don't Stress Anymore - Technology`,
        },
        {
          image: '/headphone.jpeg',
          heading: `Your Highness - Wired or Wireless`,
        },
        {
          image: '/phone.jpeg',
          heading: `May the Best Speaker Win `,
        },
        {
          image: '/headphone.jpeg',
          heading: `Your Highness - Wired or Wireless`,
        },
        {
          image: '/phone.jpeg',
          heading: `May the Best Speaker Win `,
        },
        {
          image: '/laptop.jpeg',
          heading: `We don't Stress Anymore - Technology`,
        },
      ],
    },
  };
}

export default function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-black min-height-25">
          <Header />
          <div>
            <h1 className="text-white text-4.5xl leading-loose pt-32 text-center">Blogs</h1>
            <h3 className="text-white text-center text-2xl leading-loose">It rains cats and blogs here</h3>
          </div>
        </div>
        <div className="bg-white min-height-60">
          <div className="p-30 flex flex-row flex-wrap">
            {blogs.map((i, index) => (
              <BlogCard data={i} key={index} className="max-width-50 w-full" />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-black min-height-25">
          <Header />
          <div>
            <h1 className="text-white text-2xl md:text-4.5xl leading-loose pt-32 text-center font-medium font-semibold">
              Blogs
            </h1>
            <h3 className="text-white text-center text-sm md:text-2xl leading-snug md:leading-loose font-semibold md:font-medium">
              It rains cats and blogs here
            </h3>
          </div>
        </div>
        <div className="bg-white min-height-60">
          <div className="py-30 px-16 flex flex-row flex-wrap">
            {blogs.map((i, index) => (
              <div className="w-full md:w-2/4 lg:w-2/6 px-4 pt-12" key={index}>
                <BlogCard data={i} />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

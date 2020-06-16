import React from 'react';
import Head from 'next/head';
import ProductFeature from '../components/ProductFeature';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getServerSideProps(context) {
  return {
    props: {
      productFeature: [
        {
          description: 'Sound that stirs beyond sense.',
          image: '/rock-large.svg',
          buttonText: 'Shop Speakers',
        },
        {
          description: 'If ignorance is bliss, these will give youecstasy',
          image: '/thar-large.svg',
          buttonText: 'Shop Headphones',
        },
        {
          description: 'Your closest workout partner.',
          image: '/trip-large.svg',
          buttonText: 'Shop Neckbands',
        },
        {
          description: 'All ears, all year.',
          image: '/earphone.svg',
          buttonText: 'Shop Earphones',
        },
      ],
      productCard: [
        {
          image: '/rock-bluetooth.svg',
          name: 'Rock',
          type: 'Blutetooth Speaker',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          launch: 'Estimated launch: 2 Months',
          buttonText: 'Buy',
        },
        {
          image: '/thar-bluetooth.svg',
          name: 'Thar GT',
          type: 'Bluetooth Headphone',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          launch: 'Estimated launch: 2 Months',
          buttonText: 'Buy',
        },
        {
          image: '/trip-flex.svg',
          name: 'Town Flex',
          type: ' Wireless Neckband',
          price: '799',
          description: 'Comfortable and secure fit, magnetic design with pure stereo sound. Playback time: 4.5 hours',
          launch: 'Estimated launch: 2 Months',
          buttonText: 'Buy',
        },
      ],
    },
  };
}

export default function Home({ productFeature, productCard }) {
  return (
    <>
      <div className="min-h-screen bg-black ">
        <Header />
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="pb-56">
            {productFeature.map((i, index) => (
              <ProductFeature data={i} key={index} />
            ))}
          </div>
          <div className="background-red-dark p-32">
            <div className="flex flex-row">
              <div className="flex-grow text-center">
                <span className="card">animation</span>
              </div>
              <div className="flex-grow flex flex-col justify-center max-width-50">
                <h1 className="text-black leading-10 font-medium text-5xl text-left max-w-30 leading-12">
                  Your ideas are worthy of so much more than the kudos in your imagination.
                </h1>
                <div className="pt-64 leading-10">
                  <button className="button-transparent py-4 px-8 border-none bg-black outline-none">
                    Incubate with Alpino
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-32">
            <div className="flex flex-row justify-between items-center px-30">
              <h1 className="leading-12 text-white font-medium text-5xl">Best Sellers</h1>
              <h3 className="text-left text-xl text-white font-normal leading-tight">Best always deserves better</h3>
            </div>
            <div className="flex flex-row pt-32 justify-between pl-30 pr-10 items-center">
              {productCard.map((i, index) => (
                <ProductCard data={i} key={index} />
              ))}
              <span>
                <button className="border-none outline-none">
                  <img className="inline-block" src="arrow-right.svg" />
                </button>
              </span>
            </div>
          </div>
          <div className="background-image-people p-32 bg-no-repeat mt-32 bg-cover">
            <div className="flex flex-row">
              <div className="flex-grow">
                <h1 className="text-left text-white font-medium text-5xl leading-12">About us </h1>
              </div>
              <div className="flex-grow flex flex-col justify-center max-width-50">
                <h3 className="text-left text-xl text-white font-normal leading-tight max-w-45">
                  We refuse to conform to the idea of being just a consumer electronics brand, and instead believe we’re
                  a lifestyle brand. As a fast-paced company, we make sure our products help you listen to the voice of
                  righteousness and block out the noise of negativity.
                </h3>
                <div className="pt-32">
                  <button className="button-transparent py-2 px-8 outline-none">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-32 pb-32">
            <div className="flex flex-row justify-between items-center px-30">
              <h1 className="text-left text-white font-medium text-5xl leading-12">Sneak Peak</h1>
              <h3 className="text-left text-white font-normal leading-tight text-xl">The future before it happens</h3>
            </div>
            <div className="flex flex-row pt-32 justify-between pl-30 pr-10 items-center">
              {productCard.map((i, index) => (
                <ProductCard data={i} key={index * 2} />
              ))}
              <span>
                <button className="border-none outline-none">
                  <img className="inline-block" src="arrow-right.svg" />
                </button>
              </span>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

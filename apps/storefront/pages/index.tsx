import React from 'react';
import Head from 'next/head';
import ProductFeature from '../components/ProductFeature';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { getProductsByTag } from '../data/functions';

export async function getServerSideProps(context) {
  return {
    props: {
      productFeature: [
        {
          description: 'Sound that stirs beyond sense.',
          image: '/animation/Speaker01_0001.png',
          buttonText: 'Shop Speakers',
          link: '/collections/speakers',
          animation: true,
        },
        {
          description: 'If ignorance is bliss, these will give you ecstasy',
          image: '/thar-large.svg',
          buttonText: 'Shop Headphones',
          link: '/collections/headphones',
        },
        {
          description: 'Your closest workout partner.',
          image: '/trip-large.svg',
          buttonText: 'Shop Neckbands',
          link: '/collections/neckbands',
        },
        {
          description: 'All ears, all year.',
          image: '/earphone.svg',
          buttonText: 'Shop Earphones',
          link: '/collections/earphones',
        },
      ],
      bestSellers: getProductsByTag('best-seller'),
      sneakPeek: getProductsByTag('sneak-peek'),
    },
  };
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
    const { productFeature, bestSellers, sneakPeek } = this.props;
    return (
      <div className="overflow-x-hidden">
        <div className="min-h-screen bg-black pt-20">
          <Head>
            <title>Alpino</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Header />
            <div className="pb-56 lg:px-31">
              {productFeature.map((i, index) => (
                <ProductFeature data={i} key={index} />
              ))}
            </div>
            <div className="bg-home p-4 md:p-31 flex flex-col lg:flex-row items-center lg:items-start">
              <img src="/home-incubate.png" alt="head" className=" w-full lg:w-2/4 object-cover lg:min-h-50" />

              <div className="w-full lg:w-2/4 flex-grow flex flex-col pt-4 lg:pt-0 pl-0  lg:pl-31 items-center lg:items-start">
                <h1 className="text-maximum-red font-medium text-2xl md:text-5xl lg:text-left lg:pt-31 text-center lg:max-w-30 leading-7 md:leading-12">
                  Your ideas are worthy of so much more than the kudos in your imagination.
                </h1>
                <div className="lg:pt-56 pt-4 ">
                  <Link href="/incubate-with-alpino">
                    <a className="button-transparent  py-4 px-8 border-none bg-black  outline-none text-maximum-red button-home-incubate">
                      Incubate with Alpino
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-16 md:pt-32">
              <div className="flex flex-col md:flex-row justify-between  items-start md:items-center px-16 md:px-31">
                <h1 className="leading-loose md:leading-12 text-white font-medium text-2xl md:text-5xl">
                  Best Sellers
                </h1>
                <h3 className="text-left text-xs md:text-xl text-white font-normal leading-tight">
                  Best always deserves better
                </h3>
              </div>
              <div className="flex flex-row pt-16 lg:pt-32 justify-center lg:justify-between pl-4 lg:pl-31 pr-4 lg:pr-10 items-center">
                <div className="flex flex-row flex-grow justify-center lg:justify-between">
                  {bestSellers.map((i, index) => (
                    <div className={`${index !== 0 && 'hidden'} lg:block`}>
                      <ProductCard data={i} key={index} />
                    </div>
                  ))}
                </div>
                <span>
                  <button className="border-none outline-none hidden lg:block">
                    <img className="inline-block" src="arrow-right.svg" />
                  </button>
                </span>
              </div>
            </div>
            <div className="background-image-people p-5 md:p-32 bg-no-repeat mt-16  md:mt-32 bg-cover">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h1 className="text-left text-white font-medium text-2xl md:text-5xl leading-loose md:leading-12">
                    About us
                  </h1>
                </div>
                <div className="flex-grow flex flex-col justify-center md:w-2/4 w-full pt-4 md:pt-0 ">
                  <h3 className="text-left text-xs md:text-xl text-white font-normal leading-3 md:leading-tight max-w-45 pb-6 md:pb-32 ">
                    We refuse to conform to the idea of being just a consumer electronics brand, and instead believe
                    we’re a lifestyle brand. As a fast-paced company, we make sure our products help you listen to the
                    voice of righteousness and block out the noise of negativity.
                  </h3>
                  <div className="flex md:justify-start justify-center ">
                    <Link href="/our-story">
                      <a className="button button-transparent py-2 px-8 outline-none button-hover">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-16 md:pt-32 pb-8 md:pb-32">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-16 md:px-31">
                <h1 className="text-left text-white font-medium text-2xl md:text-5xl leading-loose md:leading-12">
                  Sneak Peak
                </h1>
                <h3 className="text-left text-white font-normal leading-tight text-xs md:text-xl">
                  The future before it happens
                </h3>
              </div>
              <div className="flex flex-row pt-16 lg:pt-32 justify-center lg:justify-between pl-4 lg:pl-31 pr-4 lg:pr-10 items-center">
                <div className="flex flex-row flex-grow justify-center lg:justify-between">
                  {sneakPeek.map((i, index) => (
                    <div className={`${index !== 0 && 'hidden'} lg:block`}>
                      <ProductCard data={i} key={index} comingSoon />
                    </div>
                  ))}
                </div>
                <span>
                  <button className="border-none outline-none hidden lg:block">
                    <img className="inline-block" src="arrow-right.svg" />
                  </button>
                </span>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

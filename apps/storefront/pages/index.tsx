import React from 'react';
import Head from 'next/head';
import ProductFeature from '../components/ProductFeature';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from './cart';
import Link from 'next/link';

export async function getServerSideProps(context) {
  return {
    props: {
      productFeature: [
        {
          description: 'Sound that stirs beyond sense.',
          image: '/animation/Speaker01_0001.png',
          buttonText: 'Shop Speakers',
          link: '/collections/speakers',
          animation: 'yes',
        },
        {
          description: 'If ignorance is bliss, these will give you ecstasy',
          image: '/thar-large.svg',
          buttonText: 'Shop Headphones',
          link: '/collections/headphones',
          animation: 'no',
        },
        {
          description: 'Your closest workout partner.',
          image: '/trip-large.svg',
          buttonText: 'Shop Neckbands',
          link: '/collections/neckbands',
          animation: 'no',
        },
        {
          description: 'All ears, all year.',
          image: '/earphone.svg',
          buttonText: 'Shop Earphones',
          link: '/collections/earphones',
          animation: 'no',
        },
      ],
      productCard: [
        {
          slug: 'bluetooth Speaker',
          image: '/rock-bluetooth.svg',
          name: 'Rock',
          type: 'Blutetooth Speaker',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          launch: 'Estimated launch: 2 Months',
          buttonText: 'Buy',
        },
        {
          slug: 'thar-gt',
          image: '/thar-bluetooth.svg',
          name: 'Thar GT',
          type: 'Bluetooth Headphone',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          launch: 'Estimated launch: 2 Months',
          buttonText: 'Buy',
        },
        {
          slug: 'town-flex',
          image: '/trip-flex.svg',
          name: 'Town Flex',
          type: ' Wireless Neckband',
          price: '799',
          description: 'Comfortable and secure fit, magnetic design with pure stereo sound. Playback time: 4.5 hours',
          launch: 'Estimated launch: 2 Months',
          buttonText: 'Buy',
        },
      ],
      items: [
        {
          image: '/cart/cart1.png',
          title: 'Thar GT',
          cost: '₹ 2999',
          color: 'Black',
          quantity: '1',
        },
        {
          image: '/cart/cart2.png',
          title: 'Flex Pro',
          cost: '₹ 2499',
          color: 'Black',
          quantity: '2',
        },
        {
          image: '/cart/cart3.png',
          title: 'Thar Blaze',
          cost: '₹ 1999',
          color: 'Black',
          quantity: '1',
        },
      ],
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

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { productFeature, items, productCard } = this.props;
    return (
      <div className="overflow-x-hidden">
        <div className="min-h-screen bg-black pt-20">
          <Header openModal={this.openModal} />
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
            <div className="background-red-dark p-16 md:p-32">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow text-center w-2/4">
                  {/* <div id="imagesequence">
                    <img src="/animation/Speaker01_0000.png"></img>
                  </div> */}
                </div>
                <div className="flex-grow flex flex-col justify-center items-center md:items-start md:w-2/4 w-full">
                  <h1 className="text-black leading-10 font-medium text-5xl md:text-left  text-center max-w-30 leading-12">
                    Your ideas are worthy of so much more than the kudos in your imagination.
                  </h1>
                  <div className="md:pt-64 pt-24 leading-10">
                    <Link href="/incubate-with-alpino">
                      <a className="button-transparent py-4 px-8 border-none bg-black outline-none text-white">
                        Incubate with Alpino
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-16 md:pt-32">
              <div className="flex flex-col md:flex-row justify-between  items-start md:items-center px-16 md:px-31">
                <h1 className="leading-12 text-white font-medium text-5xl">Best Sellers</h1>
                <h3 className="text-left text-xl text-white font-normal leading-tight">Best always deserves better</h3>
              </div>
              <div className="flex flex-row pt-16 md:pt-32 justify-center lg:justify-between pl-16 md:pl-31 pr-4 md:pr-10 items-center">
                <div className="flex flex-row ">
                  {productCard.map((i, index) => (
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
            <div className="background-image-people p-16 md:p-32 bg-no-repeat mt-16  md:mt-32 bg-cover">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h1 className="text-left text-white font-medium text-5xl leading-12">About us </h1>
                </div>
                <div className="flex-grow flex flex-col justify-center md:w-2/4 w-full md:pt-0 pt-8">
                  <h3 className="text-left text-xl text-white font-normal leading-tight max-w-45">
                    We refuse to conform to the idea of being just a consumer electronics brand, and instead believe
                    we’re a lifestyle brand. As a fast-paced company, we make sure our products help you listen to the
                    voice of righteousness and block out the noise of negativity.
                  </h3>
                  <div className="pt-12 md:pt-32 flex md:justify-start justify-center">
                    <Link href="/incubate-with-alpino">
                      <a className="button button-transparent py-2 px-8 outline-none">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-16 md:pt-32 pb-8 md:pb-32">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-16 md:px-31">
                <h1 className="text-left text-white font-medium text-5xl leading-12">Sneak Peak</h1>
                <h3 className="text-left text-white font-normal leading-tight text-xl">The future before it happens</h3>
              </div>
              <div className="flex flex-row pt-16 md:pt-32 justify-center lg:justify-between pl-16 md:pl-31 pr-4 md:pr-10 items-center">
                <div className="flex flex-row ">
                  {productCard.map((i, index) => (
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
        <Cart items={items} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
        <Footer />
      </div>
    );
  }
}

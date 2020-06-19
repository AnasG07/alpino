import React from 'react';
import Head from 'next/head';
import ProductFeature from '../components/ProductFeature';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from './cart';

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

const images = [
  '/animation/Speaker01_0001.png',
  '/animation/Speaker01_0002.png',
  '/animation/Speaker01_0003.png',
  '/animation/Speaker01_0004.png',
  '/animation/Speaker01_0005.png',
  '/animation/Speaker01_0006.png',
  '/animation/Speaker01_0007.png',
  '/animation/Speaker01_0008.png',
  '/animation/Speaker01_0009.png',
  '/animation/Speaker01_0010.png',
  '/animation/Speaker01_0011.png',
  '/animation/Speaker01_0012.png',
  '/animation/Speaker01_0013.png',
  '/animation/Speaker01_0014.png',
  '/animation/Speaker01_0015.png',
  '/animation/Speaker01_0016.png',
  '/animation/Speaker01_0017.png',
  '/animation/Speaker01_0018.png',
  '/animation/Speaker01_0019.png',
  '/animation/Speaker01_0020.png',
  '/animation/Speaker01_0021.png',
  '/animation/Speaker01_0022.png',
  '/animation/Speaker01_0023.png',
  '/animation/Speaker01_0024.png',
  '/animation/Speaker01_0025.png',
  '/animation/Speaker01_0026.png',
  '/animation/Speaker01_0027.png',
  '/animation/Speaker01_0028.png',
  '/animation/Speaker01_0029.png',
  '/animation/Speaker01_0030.png',
  '/animation/Speaker01_0031.png',
  '/animation/Speaker01_0032.png',
  '/animation/Speaker01_0033.png',
  '/animation/Speaker01_0034.png',
  '/animation/Speaker01_0035.png',
  '/animation/Speaker01_0036.png',
  '/animation/Speaker01_0037.png',
  '/animation/Speaker01_0038.png',
  '/animation/Speaker01_0039.png',
  '/animation/Speaker01_0040.png',
  '/animation/Speaker01_0041.png',
  '/animation/Speaker01_0042.png',
  '/animation/Speaker01_0043.png',
  '/animation/Speaker01_0044.png',
  '/animation/Speaker01_0045.png',
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  componentDidMount() {
    const { TweenMax, TimelineMax } = require('gsap');
    const ScrollMagic = require('scrollmagic');
    const { ScrollMagicPluginGsap } = require('scrollmagic-plugin-gsap');
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
    const obj = { curImg: 0 };
    const tween = TweenMax.to(obj, 0.5, {
      curImg: images.length - 1,
      roundProps: 'curImg',
      repeat: 1,
      immediateRender: true,
      onUpdate: function () {
        const img = document.getElementById('myImg');
        img.setAttribute('src', images[obj.curImg]);
      },
    });

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '#trigger',
      duration: 1800,
    })
      .setTween(tween)
      .addIndicators()
      .addTo(controller);
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
      <>
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
            <div className="background-red-dark p-32" id="trigger">
              <div className="flex flex-row">
                <div className="flex-grow text-center">
                  <div id="imagesequence">
                    <img id="myImg" src="/animation/Speaker01_0000.png"></img>
                  </div>
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
              <div className="customGrid pt-32 justify-between pl-30 pr-10 items-center">
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
                    We refuse to conform to the idea of being just a consumer electronics brand, and instead believe
                    we’re a lifestyle brand. As a fast-paced company, we make sure our products help you listen to the
                    voice of righteousness and block out the noise of negativity.
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
              <div className="customGrid pt-32 justify-between pl-30 pr-10 items-center">
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
        <Cart items={items} modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal} />
        <Footer />
      </>
    );
  }
}

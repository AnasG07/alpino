import React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import AliceCarousel from 'react-alice-carousel';
import { startCase } from 'lodash';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import RatingStars from '../../components/RatingStars';
import style from './product.module.css';

export async function getServerSideProps({ params: { slug } }) {
  return {
    props: {
      productToDisplay: [
        {
          slug,
          title: startCase(slug),
          image1: '/products/Thar01.png',
          image2: '/products/thargt5.png',
          image3: '/products/thargt1.png',
          image4: '/products/thargt2.png',
          image5: '/products/thargt3.png',
          image6: '/products/thargt4.png',
          description:
            'Headphones take you even deeper into silence with further improvements to our industry-leading nose cancellation, and smart listening that adjusts to your situation. ',
          Mrp: '1099',
          specs: {
            dimensions: {
              title: 'DIMENSIONS',
              image: '/products/specs1.png',
              style: 'Over-ear Headphones',
              size: '7 cm x 18 cm',
              weight: '249 g',
              material: 'Plastic',
            },
            Battery: {
              image: '/products/specs2.png',
              title: 'BATTERY',
              Battery: 'Rechargeable lithium-ion\nBattery(included)',
              charging: 'Charging time: 2 hours',
              batterLife: 'Battery life: 6 hours per full\ncharge',
            },
            features: {
              image: '/products/specs3.png',
              title: 'FEATURES',

              bluetooth:
                'Bluetooth 3.1\ncompatible with Mobile\nDevices, Laptops, Tabs,\nPCs, Other devices\nconnecting to bluetooth',

              stereo: 'Super Bass Stereo',

              quality: 'High Quality',
              microphone: 'Built-in microphone',
              comfortable: 'Super Comfortable',
              colors: 'Matte Colors',
            },
            Box: {
              image: '/products/specs4.png',
              title: "WHAT'S IN THE BOX",
              headphones: 'Alpino Thar GT\nheadphones',
              cable: 'USB charging cable',
              case: 'Carrying case',
              guide: 'Quick setup guide',
              card: 'Warranty card',
            },
          },
        },
      ],
      productCard: [
        {
          image: '/rock-bluetooth.svg',
          name: 'Rock',
          type: 'Blutetooth Speaker',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          buttonText: 'Buy',
        },
        {
          image: '/thar-bluetooth.svg',
          name: 'Thar GT',
          type: 'Bluetooth Headphone',
          price: '1299',
          description: 'Compact, smart headphone with noise CANCELLING and super bass stereo.Playback time: 6 hours',
          buttonText: 'Buy',
        },
        {
          image: '/trip-flex.svg',
          name: 'Town Flex',
          type: ' Wireless Neckband',
          price: '799',
          description: 'Comfortable and secure fit, magnetic design with pure stereo sound. Playback time: 4.5 hours',
          buttonText: 'Buy',
        },
      ],
    },
  };
}

export default function Slug({ productToDisplay, productCard }) {
  const handleOnDragStart = (e) => e.preventDefault();
  const { specs } = productToDisplay[0];
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black w-full">
        <Header invert={false} />
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <div className="h-screen pb-1400 md:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-40">
              <AliceCarousel buttonsDisabled>
                <img src={productToDisplay[0].image1} onDragStart={handleOnDragStart} />
                <img src={productToDisplay[0].image3} onDragStart={handleOnDragStart} />
                <img src={productToDisplay[0].image3} onDragStart={handleOnDragStart} />
                <img src={productToDisplay[0].image4} onDragStart={handleOnDragStart} />
              </AliceCarousel>
              <div className="flex flex-col justify-center px-12 md:pr-4 md:px-0 lg:pr-0">
                <h1 className="text-white text-5xl">{productToDisplay[0].title}</h1>
                {/*<RatingStars numberOfRatings={71} />*/}

                <p className="text-white text-lg max-w-md leading-normal textGrayColor mt-8">
                  {productToDisplay[0].description}
                </p>
                <div className="flex flex-row mt-6">
                  <div className="h-5 bg-transparent border-2 border-white w-5 rounded-full mr-5" />
                  <div className={classNames(style.grayBgColor, 'h-5 w-5 rounded-full mr-5')} />
                  <div className={classNames(style.pinkBgColor, 'h-5 w-5 rounded-full mr-5')} />
                  <div className={classNames(style.greenBgColor, 'h-5 w-5 rounded-full mr-5')} />
                </div>
                <p className="text-white text-lg font-medium leading-normal textGrayColor mt-8">
                  MRP Rs. {productToDisplay[0].Mrp}
                </p>
                <div className="flex flex-row max-w-sm justify-between items-center pt-10">
                  <button className="rounded-full py-3 px-10 outline-none border-none bg-white flex justify-center">
                    <p className="font-semibold text-black text-lg leading-6">Buy now</p>
                  </button>
                  <button className="rounded-full py-3 px-10 border-2 bg-transparent flex justify-center">
                    <p className="font-semibold text-white text-lg leading-5">View Details</p>
                  </button>
                </div>
              </div>
            </div>
            <button className="mx-auto border-none outline-none mt-10">
              <img src="/products/downArrow.png" />
            </button>
          </div>
          <div className={classNames(style.lightBlackBgColor)}>
            <h1 className="text-white text-5xl text-center pt-20 textGrayColor font-medium px-4 md:px-0">
              Crossing all bass-lines
            </h1>
            <p className="px-4 md:px-0 text-white text-lg text-center mt-4 weight-normal leading-normal textGrayColor ">
              With dual powerful 40mm sound stage drivers,
              <br /> experience bass that makes the world move.
            </p>
            <img className="mx-auto mt-20" src={productToDisplay[0].image3} />
            <div className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-56 md:px-4 lg:px-0">
              <div className="mr-0 md:mr-40">
                <h1 className="text-white text-5xl text-center md:text-left pt-20 textGrayColor font-medium px-4 md:px-0">
                  Cushion earcups that
                  <br /> never spill
                </h1>
                <p className="text-white text-lg text-center md:text-left mt-4 weight-normal leading-normal textGrayColor px-4 md:px-0">
                  With dual powerful 40mm sound stage drivers,
                  <br /> experience bass that makes the world move.
                </p>
              </div>
              <div>
                <img src={productToDisplay[0].image2} />
              </div>
            </div>
            <h1 className="text-white text-5xl text-center mt-20 md:mt-56 textGrayColor font-medium px-4 md:px-0">
              Noise isolation for that zen energy{' '}
            </h1>
            <p className="text-white text-lg text-center mt-4 weight-normal leading-normal textGrayColor px-4 md:px-0">
              Passive noise cancelling headphones make for truly
              <br /> living in the moment with other sounds blocked up.
            </p>
            <img className="mx-auto mt-4" src={productToDisplay[0].image4} />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-20 md:mt-64 pb-12 md:pb-24">
              <div className="mr-0 md:mr-64">
                <img src={productToDisplay[0].image5} />
              </div>
              <div>
                <h1 className="text-white text-5xl text-center md:text-left pt-20 textGrayColor font-medium px-4 md:px-0">
                  Microphone monsieur
                </h1>
                <p className="text-white text-lg text-center md:text-left mt-4 weight-normal leading-normal textGrayColor px-4 md:px-0">
                  Bluetooth headphones come with built-in
                  <br /> microphone for hands-free calling.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black">
            <div className="flex flex-col md:flex-row justify-center items-center py-20 md:py-56 md:px-4 lg:px-0">
              <div className="mr-0 md:mr-40">
                <h1 className="text-white text-5xl text-center md:text-left textGrayColor font-medium px-4 md:px-0">
                  Adjustable anatomy
                </h1>
                <p className="text-white text-lg text-center md:text-left mt-4 weight-normal leading-normal textGrayColor px-4 md:px-0">
                  Snug fit, foldable and adjustable
                  <br /> headphones with comfort over 200 mah
                  <br /> make sure you experience the comfort of
                  <br /> luxury.
                </p>
              </div>
              <div className="px-2 md:px-0">
                <img src={productToDisplay[0].image6} />
              </div>
            </div>
          </div>
          <div className={classNames(style.specsContainerBg, 'pr-4 md:pr-0')}>
            <h1 className="text-white text-5xl font-medium leading-10 mb-12 md:mb-24 pt-10 md:pt-40 ml-8 md:ml-24">
              Specs - Thar GT
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-12 md:pb-32 ml-8 md:ml-24">
              <div className="flex flex-col justify-start">
                <img className="w-8 h-6" src={specs.dimensions.image} />
                <p className="text-white mt-8 md:mt-20 font-normal text-base leading-7 mb-4 md:mb-12">
                  {specs.dimensions.title}
                </p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.dimensions.style}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.dimensions.size}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.dimensions.weight}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.dimensions.material}</p>
              </div>
              <div className="flex flex-col justify-start whitespace-pre-wrap">
                <img className="w-10 h-6" src={specs.Battery.image} />
                <p className="text-white mt-8 md:mt-20 font-normal text-base leading-7 mb-4 md:mb-12">
                  {specs.Battery.title}
                </p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Battery.Battery}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Battery.charging}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Battery.batterLife}</p>
              </div>
              <div className="flex flex-col justify-start whitespace-pre-wrap">
                <img className="w-8 h-6" src={specs.features.image} />
                <p className="text-white mt-8 md:mt-20 font-normal text-base leading-7 mb-4 md:mb-12">
                  {specs.features.title}
                </p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.features.bluetooth}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.features.stereo}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.features.quality}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.features.microphone}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.features.comfortable}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.features.colors}</p>
              </div>
              <div className="flex flex-col justify-start whitespace-pre-wrap">
                <img className="w-6 h-6" src={specs.Box.image} />
                <p className="text-white mt-8 md:mt-20 font-normal text-base leading-7 mb-4 md:mb-12">
                  {specs.Box.title}
                </p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Box.headphones}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Box.cable}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Box.case}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Box.guide}</p>
                <p className="text-white font-normal text-base leading-7 mb-5">{specs.Box.card}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-24 pb-8 md:pb-24">
            <div className="flex flex-col justify-between items-start  px-16 md:px-31">
              <h1 className="text-white text-5xl font-medium pt-12 md:pt-40"> Similar from Alpino</h1>
              <p className="text-white text-lg font-normal mb-10 mt-2">Best always deserves better</p>
            </div>
            <div className="flex flex-row pt-16 md:pt-32 justify-center lg:justify-between pl-16 md:pl-31 pr-4 md:pr-10 items-center">
              <div className="flex flex-row">
                {productCard.map((i, index) => (
                  <div className={`${index !== 0 && 'hidden'} lg:block`}>
                    <ProductCard data={i} key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

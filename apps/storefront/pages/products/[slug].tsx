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
import dataFetch from '../../data/functions.ts';

export async function getServerSideProps({ params: { slug } }) {
  const selectedProduct = dataFetch(slug);
  return {
    props: {
      selectedProduct: selectedProduct,
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

export default function Slug({ productToDisplay, productCard, selectedProduct }) {
  console.log(selectedProduct);
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
                <img src={selectedProduct.images.img1} onDragStart={handleOnDragStart} />
                <img src={selectedProduct.images.img2} onDragStart={handleOnDragStart} />
                <img src={selectedProduct.images.img3} onDragStart={handleOnDragStart} />
                <img src={selectedProduct.images.img4} onDragStart={handleOnDragStart} />
              </AliceCarousel>
              <div className="flex flex-col justify-center px-12 md:pr-4 md:px-0 lg:pr-0">
                <h1 className="text-white md:text-2xl leading-8 font-medium  md:text-5xl md:leading-12 ">
                  {selectedProduct.name}
                </h1>
                {/*<RatingStars numberOfRatings={71} />*/}

                <p className="text-white text-sm md:text-lg max-w-md leading-tight md:leading-normal textGrayColor mt-8">
                  {selectedProduct.mainDescription}
                </p>
                <div className="flex flex-row mt-6">
                  <div className="h-5 bg-transparent border-2 border-white w-5 rounded-full mr-5" />
                  <div className={classNames(style.grayBgColor, 'h-5 w-5 rounded-full mr-5')} />
                  <div className={classNames(style.pinkBgColor, 'h-5 w-5 rounded-full mr-5')} />
                  <div className={classNames(style.greenBgColor, 'h-5 w-5 rounded-full mr-5')} />
                </div>
                <p className="text-white text-sm md:text-lg font-medium leadnig-tight md:leading-normal textGrayColor mt-8">
                  MRP Rs. {selectedProduct.cost}
                </p>
                <div className="flex flex-row max-w-sm justify-between items-center pt-10">
                  <button className="rounded-full py-3 px-10 outline-none border-none bg-white flex justify-center">
                    <p className="font-semibold text-black text-base md:text-lg leading-tight md:leading-6 ">Buy now</p>
                  </button>
                  <button className="rounded-full py-3 px-10 border-2 bg-transparent flex justify-center">
                    <p className="font-semibold text-white  text-base md:text-lg leading-tight md:leading-5">
                      View Details
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <button className="mx-auto border-none outline-none mt-10">
              <img src="/products/downArrow.png" />
            </button>
          </div>
          <div className={classNames(style.lightBlackBgColor)}>
            <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center pt-20 textGrayColor font-medium px-4 md:px-0">
              {selectedProduct.descriptions.description1}
            </h1>
            <div className="mt-4 px-4 md:px-0">
              <p className="max-w-30 mx-auto text-white text-sm md:text-lg text-center  weight-normal leading-tight md:leading-normal textGrayColor ">
                {selectedProduct.descriptionText.text1}
              </p>
            </div>
            <img className="mx-auto mt-20" src={selectedProduct.images.img3} />
            <div className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-56 md:px-4 lg:px-0">
              <div className="pl-0 md:pl-31">
                <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center md:text-left pt-20 textGrayColor font-medium px-4 md:px-0">
                  {selectedProduct.descriptions.description2}
                </h1>
                <div>
                  <p className="max-w-30 mx-auto text-white text-sm md:text-lg leading-tight md:leading-normal text-center md:text-left mt-4 weight-normal  textGrayColor px-4 md:px-0">
                    {selectedProduct.descriptionText.text2}
                  </p>
                </div>
              </div>
              <div>
                <img src={selectedProduct.images.img2} />
              </div>
            </div>
            <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center mt-20 md:mt-56 textGrayColor font-medium px-4 md:px-0">
              {selectedProduct.descriptions.description3}
            </h1>
            <p className="max-w-30 mx-auto text-white text-sm md:text-lg leading-tight md:leading-normal text-center mt-4 weight-normal  textGrayColor px-4 md:px-0">
              {selectedProduct.descriptionText.text3}
            </p>
            <img className="mx-auto mt-4" src={selectedProduct.images.img4} />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-20 md:mt-64 pb-12 md:pb-24">
              <div className="mr-0 md:mr-64">
                <img src={selectedProduct.images.img5} />
              </div>
              <div>
                <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center md:text-left pt-20 textGrayColor font-medium px-4 md:px-0">
                  {selectedProduct.descriptions.description4}
                </h1>
                <p className=" max-w-30 text-white text-sm md:text-lg leading-tight md:leading-normal text-center md:text-left mt-4 weight-normal textGrayColor px-4 md:px-0">
                  {selectedProduct.descriptionText.text4}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black">
            <div className="flex flex-col md:flex-row justify-center items-center py-20 md:py-56 md:px-4 lg:px-0">
              <div className="pl-0 md:pl-24">
                <h1 className="max-w-30 text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center md:text-left textGrayColor font-medium px-4 md:px-0">
                  {selectedProduct.descriptions.description5}
                </h1>
                <p className="max-w-30 text-white  text-sm md:text-lg leading-tight md:leading-normal text-center md:text-left mt-4 weight-normal textGrayColor px-4 md:px-0">
                  {selectedProduct.descriptionText.text5}
                </p>
              </div>
              <div className="px-2 md:px-0 max-w-850">
                <img src={selectedProduct.images.img1} />
              </div>
            </div>
          </div>
          <div className={classNames(style.specsContainerBg, 'pr-4 md:pr-0')}>
            <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 font-medium leading-10 mb-12 md:mb-24 pt-10 md:pt-40 ml-8 md:ml-24">
              {`Specs - ${selectedProduct.name}`}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 pb-12 md:pb-32 ml-8 md:ml-24">
              <div className="flex flex-col justify-start">
                <img className="w-8 h-6" src="/products/specs1.png" />
                <p className="text-white mt-8 md:mt-20 font-normal text-xs md:text-base leading-4 md:leading-7 mb-4 md:mb-12">
                  DIMENSIONS
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.dimensions.type}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.dimensions.dimension}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.dimensions.weight}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.dimensions.material}
                </p>
              </div>
              <div className="flex flex-col justify-start whitespace-pre-wrap">
                <img className="w-10 h-6" src="/products/specs2.png" />
                <p className="text-white mt-8 md:mt-20 font-normal text-xs md:text-base leading-4 md:leading-7 mb-4 md:mb-12">
                  BATTERY
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.battery.type}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.battery.time}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.battery.batterLife}
                </p>
              </div>
              <div className="flex flex-col justify-start whitespace-pre-wrap">
                <img className="w-8 h-6" src="/products/specs3.png" />
                <p className="text-white mt-8 md:mt-20 font-normal text-xs md:text-base leading-4 md:leading-7 mb-4 md:mb-12">
                  FEATURES
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.features.feature1}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.features.feature2}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.features.feature3}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.features.feature4}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.features.feature5}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.features.feature6}
                </p>
              </div>
              <div className="flex flex-col justify-start whitespace-pre-wrap">
                <img className="w-6 h-6" src="/products/specs4.png" />
                <p className="text-white mt-8 md:mt-20 font-normal text-xs md:text-base leading-4 md:leading-7 mb-4 md:mb-12">
                  WHAT'S IN THE BOX
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.whatsInTheBox.item1}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.whatsInTheBox.item2}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.whatsInTheBox.item3}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.whatsInTheBox.item4}
                </p>
                <p className="text-white font-normal text-sm md:text-base leading-5 md:leading-7 mb-5">
                  {selectedProduct.whatsInTheBox.item5}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-24 pb-8 md:pb-24">
            <div className="flex flex-col justify-between items-start  px-16 md:px-31">
              <h1 className="text-white text-2xl leading-loose md:leading-12 md:text-5xl font-medium pt-12 md:pt-40">
                {' '}
                Similar from Alpino
              </h1>
              <p className="text-white text-xs md:text-lg font-normal mb-10 mt-2">Best always deserves better</p>
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

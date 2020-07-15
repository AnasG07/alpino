import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import { Carousel } from 'react-responsive-carousel';
import { isEmpty } from 'lodash';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductCard from '../../components/ProductCard';
import style from './product.module.css';
import dataFetch, { getSimilarProducts } from '../../data/functions';
import { withApollo } from '../../lib/apollo/withApollo';
import fetchPrimaryShop from '../../staticUtils/shop/fetchPrimaryShop';
import fetchCatalogProduct from '../../staticUtils/catalog/fetchCatalogProduct';

export async function getServerSideProps({ params: { slug } }) {
  const selectedProduct = dataFetch(slug);
  const [shopResult, productResult] = await Promise.all([fetchPrimaryShop('en'), fetchCatalogProduct(slug)]);

  return {
    props: {
      shop: shopResult?.shop || null,
      product: productResult?.product || null,
      selectedProduct: selectedProduct,
      productCard: getSimilarProducts(selectedProduct?.tags[0], slug),
    },
  };
}

function Slug({ productToDisplay, productCard, selectedProduct, shop, product }) {
  const handleOnDragStart = (e) => e.preventDefault();
  const buyRef = useRef(null);
  const [stickyHeight, setStickyHeight] = useState(0);
  const [imageArray, updateImageArray] = useState([]);
  useEffect(() => {
    if (!buyRef || !buyRef.current) {
      return;
    }
    if (stickyHeight) {
      return;
    }
    setStickyHeight(window.scrollY + buyRef.current.getBoundingClientRect().top);
  }, [buyRef, buyRef.current]);

  const selectImage = (id) => {
    const imageSelect = product?.variants?.find((i) => i.variantId === id);
    if (imageSelect) {
      updateImageArray(imageSelect);
    }
  };

  useEffect(() => {
    if (isEmpty(product) || isEmpty(product.variants[0])) {
      return;
    }
    updateImageArray(product.variants[0]);
  }, [product._id]);

  useEffect(() => {}, [imageArray]);

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-black w-full">
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header
            invert={false}
            sticky
            stickyHeight={stickyHeight}
            cost={selectedProduct.cost}
            name={selectedProduct.name}
          />
          <div className="h-screen pb-1400 md:pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-40">
              <Carousel showThumbs={false} showStatus={false} showArrows={false}>
                {!isEmpty(imageArray) &&
                  imageArray?.media?.map((i, j) => (
                    <img
                      key={`${i.variantId}-${j}`}
                      src={i.URLs.original}
                      onDragStart={handleOnDragStart}
                      alt={i.optionTitle}
                    />
                  ))}
              </Carousel>
              <div className="flex flex-col justify-center px-12 md:pr-4 md:px-0 lg:pr-0">
                <h1 className="text-white text-2xl leading-8 font-medium  md:text-5xl md:leading-12 ">
                  {product.title}
                </h1>
                <h3 className="text-white mt-1 text-xl leading-8 font-medium  md:text-2xl md:leading-12 ">
                  {product.pageTitle}
                </h3>

                <p className="text-white text-sm md:text-lg max-w-md leading-tight md:leading-normal textGrayColor mt-8">
                  {product.description}
                </p>
                <div className="flex flex-row mt-6">
                  {product &&
                    product.variants.map((i) => (
                      <button className="border-none" onClick={() => selectImage(i.variantId)}>
                        <div
                          style={{ backgroundColor: i.title.toLowerCase() }}
                          className="h-5 bg-transparent border-2 border-white w-5 rounded-full mr-5"
                        />
                      </button>
                    ))}
                </div>
                <p className="text-white text-sm md:text-lg font-medium leading-tight md:leading-normal textGrayColor mt-8">
                  MRP {product.pricing[0].displayPrice}
                </p>
                <div className="flex flex-row max-w-sm justify-between items-center pt-10">
                  <button
                    ref={buyRef}
                    className="rounded-full py-3 px-8 md:px-10 outline-none border-none bg-white flex justify-center">
                    <span className="font-semibold text-black text-base md:text-lg leading-tight md:leading-6 ">
                      Buy now
                    </span>
                  </button>
                  <button className="rounded-full py-3 px-10 border-2 bg-transparent flex justify-center button-hover">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <button className="mx-auto border-none outline-none mt-10">
              <img src="/products/downArrow.png" />
            </button>
          </div>
          <div className={classNames(style.lightBlackBgColor, 'mt:0 md:mt-120')}>
            <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center pt-20 textGrayColor font-medium px-4 md:px-0">
              {selectedProduct.descriptions.description1}
            </h1>
            <div className="mt-4 px-4 md:px-0">
              <p className="max-w-30 mx-auto text-white text-sm md:text-lg text-center  weight-normal leading-tight md:leading-normal textGrayColor ">
                {selectedProduct.descriptionText.text1}
              </p>
            </div>
            <div
              className={`${selectedProduct.clock ? 'bg-left' : 'bg-center'} bg-no-repeat`}
              style={{
                backgroundImage: selectedProduct.animations.img1,
                backgroundSize: selectedProduct.clock && '313px',
                marginLeft: selectedProduct.clock && '20px',
              }}>
              <img className="mx-auto mt-20" src={selectedProduct.images.img1} />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-20 md:mt-56 md:px-4 lg:px-0">
              <div className="pl-0 md:pl-31">
                <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center md:text-left pt-20 md:pt-0 textGrayColor font-medium px-4 md:px-0">
                  {selectedProduct.descriptions.description2}
                </h1>
                <div>
                  <p className="max-w-30 text-white text-sm md:text-lg leading-tight md:leading-normal text-center md:text-left mt-4 weight-normal  textGrayColor px-4 md:px-0">
                    {selectedProduct.descriptionText.text2}
                  </p>
                </div>
              </div>
              <div
                className="bg-left bg-no-repeat"
                style={{
                  backgroundImage: selectedProduct.animations.img2,
                }}>
                <img src={selectedProduct.images.img2} />
              </div>
            </div>
            <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center mt-20 md:mt-56 textGrayColor font-medium px-4 md:px-0">
              {selectedProduct.descriptions.description3}
            </h1>
            <p className="max-w-30 mx-auto text-white text-sm md:text-lg leading-tight md:leading-normal text-center mt-4 weight-normal  textGrayColor px-4 md:px-0">
              {selectedProduct.descriptionText.text3}
            </p>
            <div
              className="bg-center bg-no-repeat"
              style={{
                backgroundImage: selectedProduct.animations.img3,
              }}>
              <img className="mx-auto mt-4" src={selectedProduct.images.img3} />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center mt-20 md:mt-64 pb-12 md:pb-24 md:px-31">
              <div
                className="mr-0 md:mr-64 bg-left bg-no-repeat"
                style={{
                  backgroundImage: selectedProduct.animations.img4,
                }}>
                <img src={selectedProduct.images.img4} />
              </div>
              <div>
                <h1 className="text-white text-2xl md:text-5xl leading-loose md:leading-12 text-center md:text-left pt-20 md:pt-0 textGrayColor font-medium px-4 md:px-0">
                  {selectedProduct.descriptions.description4}
                </h1>
                <p className=" max-w-30 text-white text-sm md:text-lg leading-tight md:leading-normal text-center md:text-left mt-4 weight-normal textGrayColor px-4 md:px-0">
                  {selectedProduct.descriptionText.text4}
                </p>
              </div>
            </div>
          </div>
          {selectedProduct.images.img5 && (
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
                <div
                  className="px-2 md:px-0 max-w-850 bg-left bg-no-repeat"
                  style={{
                    backgroundImage: selectedProduct.animations.img5,
                  }}>
                  <img src={selectedProduct.images.img5} />
                </div>
              </div>
            </div>
          )}
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

          {!isEmpty(productCard) ? (
            <div className="pt-8 md:pt-24 pb-8 md:pb-24">
              <div className="flex flex-col justify-between items-start  px-16 md:px-31">
                <h1 className="text-white text-2xl leading-loose md:leading-12 md:text-5xl font-medium pt-12 md:pt-40">
                  {' '}
                  Similar from Alpino
                </h1>
                <p className="text-white text-xs md:text-lg font-normal mb-10 mt-2">Best always deserves better</p>
              </div>
              <div className="flex flex-row pt-16 md:pt-32 justify-center lg:justify-between pl-4 md:pl-31 pr-4 md:pr-10 items-center">
                {productCard.map((i, index) => (
                  <div className={`${index !== 0 && 'hidden'} lg:block`}>
                    <ProductCard data={i} key={index} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="pb-8" />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default withApollo()(Slug);

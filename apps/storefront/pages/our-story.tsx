import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function OurStory() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-story'], 'md:min-h-60 pb-12 md:pb-0')}>
          <Header invert />
          <div className="pt-40 flex justify-center flex-col items-center px-8 md:px-0 ">
            <h1 className={classNames(styles['text-heading-black-new'], 'text-center')}>Our Story</h1>
            <h3
              className={classNames(
                'text-sm md:text-2xl text-white md:text-black font-normal leading-5 md:leading-tight text-center pt-2',
                styles['max-width-33'],
              )}>
              We put more than just our heart and soul into each product, so it is more than technology for you
            </h3>
          </div>
        </div>
        <div className="md:min-h-60 bg-black flex flex-col-reverse lg:flex-row">
          <div className="md:pl-31 md:py-20 p-8 md:pr-24 lg:w-2/4 w-full flex flex-col justify-between">
            <h1 className="text-xl md:text-5xl text-white leading-loose md:leading-16 font-medium md:font-semibold">
              About Us
            </h1>
            <h3 className="text-sm md:text-2xl text-white leading-7 md:leading-12">
              What do chess, gunpowder and jet engines have in common? They’re all some of many Indian inventions. We
              promise to carry the baton of home-grown
            </h3>
          </div>
          <img src="/us.jpeg" className={classNames('w-full lg:w-2/4  ')} />
        </div>
        <div className={classNames(styles['min-height-39'], 'bg-black-about flex justify-center items-center')}>
          <div className="max-w-screen-lg p-8 md:p-0 leading-7 md:leading-8">
            <p className="text-white leading-loose text-sm md:text-2xl text-left md:text-center">
              Innovation further and forward.
            </p>
            <p className=" text-sm md:text-2xl text-white text-left md:text-center">
              We refuse to conform to the idea of being just a consumer electronics brand, and instead believe we’re a
              lifestyle brand. As a fast-paced company, we make sure our products help you listen to the voice of
              righteousness and block out the noise of negativity.With more than 300 SKUs, launched over a period of 1
              year and a product line that includes BT headphones, speakers, power banks, wall chargers and data cables,
              we’ve taken it upon ourselves to accessorise and globalise your technology.
            </p>
            <p className="text-sm md:text-2xl text-white text-left md:text-center pt-2">
              We’re proud of the presence of our offline distribution network in 10 states with a repeat order
              percentage of 65%. This coupled with an addition of at least 4 SKUs in our product line every 25 days,
              ensures we’re able to satiate the tech needs of our ever-growing market.As a self-funded enterprise that
              believes in focusing on essentials, we vow to wow you with our products.
            </p>
          </div>
        </div>
        <div className="md:min-h-60 bg-black flex flex-col lg:flex-row">
          <img src="/eye.jpeg" className={classNames('w-full lg:w-2/4  ')} />
          <div className="md:pl-31 md:py-20 md:pr-24 py-12 pl-8 pr-8 flex flex-col justify-between lg:w-2/4 w-full">
            <h1 className="text-xl md:text-5xl text-white leading-loose md:leading-16 font-medium md:font-semibold text-left md:text-right">
              Vision
            </h1>
            <h3 className="text-sm md:text-2xl text-white leading-7 md:leading-12 text-left md:text-right">
              Having already established a stronghold in the Indian market, we want to become the most desired lifestyle
              brand in the globe as the Alpino Family grows.
            </h3>
          </div>
        </div>
        <div className={classNames(styles['min-height-39'], 'bg-black-about  flex justify-center items-center')}>
          <div className="max-w-screen-lg p-8 md:p-0">
            <p className="text-sm md:text-2xl text-white text-left md:text-center  leading-7 md:leading-8">
              We push ourselves every day to innovate and create products that don’t just act as accessories, but solve
              real life problems and create experiences. Right from the inception of Alpino, our motive has never been
              sales, profits or cashflows, but revolutionizing technology.
            </p>
            <p className="text-sm md:text-2xl text-white text-left md:text-center pt-2  leading-7 md:leading-8">
              As a fast-paced company in an ever-changing industry, we have a dynamic start-up like feel, despite being
              self-funded. We keep adding new products to our line and strive for constant innovation in all aspects of
              our business.After successfully aiding to the lives of our consumers, we wish to be involved in the
              process of creating value in the community using technology as a tool for change. The products we build
              next will be in tandem with this vision.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen  bg-black ">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div header className="flex flex-row justify-between padding-30 items-center">
          <img src="/logo.svg" alt="Alipno Logo" className="logo" />
          <span className="flex items-center">
            <Link href="/">
              <a className="header-link px-4">Speakers</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4">Headphones</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4">Neckbands</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4">Earphones</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4">All Products</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4">More</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4 inline-block">
                <img src="/user.svg" />
              </a>
            </Link>
            <Link href="/">
              <a className="header-link px-4 inline-block">
                <img src="/cart.svg" />
              </a>
            </Link>
          </span>
        </div>
        <div content className="pb-56">
          <div className="flex flex-row ">
            <div className="flex-grow flex flex-col justify-center padding-left-120">
              <h1>
                Sound that stirs <br /> beyond sense.
              </h1>
              <div className="pt-16">
                <button className="button-transparent py-2 px-4 outline-none">Shop Speakers</button>
              </div>
            </div>
            <div className="flex-grow">
              <img src="/rock-large.svg" />
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex-grow">
              <img src="/thar-large.svg" />
            </div>
            <div className="flex-grow flex flex-col justify-center padding-right-120">
              <h1 className="text-left">
                If ignorance is bliss,
                <br /> these will give you
                <br /> ecstasy
              </h1>
              <div className="pt-16">
                <button className="button-transparent py-2 px-4 outline-none">Shop Headphones</button>
              </div>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex-grow flex flex-col justify-center padding-left-120">
              <h1 className="text-left">
                Your closest workout <br />
                partner.
              </h1>
              <div className="pt-16">
                <button className="button-transparent py-2 px-4 outline-none">Shop Neckbands</button>
              </div>
            </div>
            <div className="flex-grow">
              <img src="/trip-large.svg" />
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="flex-grow">
              <img src="/earphone.svg" />
            </div>
            <div className="flex-grow flex flex-col justify-center padding-right-120">
              <h1 className="text-left">All ears, all year.</h1>
              <div className="pt-16">
                <button className="button-transparent py-2 px-4 outline-none">Shop Earphones</button>
              </div>
            </div>
          </div>
        </div>
        <div content className="background-red-dark p-32">
          <div className="flex flex-row ">
            <div className="flex-grow  text-center">
              <span className="card ">animation</span>
            </div>
            <div className="flex-grow flex flex-col justify-center  max-width-50">
              <h1 className="text-black text-left">
                Your ideas are worthy <br /> of so much more than the kudos <br />
                in your
                <br /> imagination.
              </h1>
              <div className="pt-64">
                <button className="button-transparent py-4 px-8 border-none bg-black outline-none">
                  Incubate with Alpino
                </button>
              </div>
            </div>
          </div>
        </div>
        <div content className="pt-32  ">
          <div className="flex flex-row justify-between items-center padding-sides-120">
            <h1>Best Sellers</h1>
            <h3>Best always deserves better</h3>
          </div>
          <div className="flex flex-row pt-32 justify-between padding-left-120 pr-10 items-center">
            <span className="flex flex-col p-8 min-height-560 mr-8">
              <img src="/rock-bluetooth.svg" alt="Rock bluetooth" />
              <div className="flex flex-row items-center pt-8 justify-between">
                <h3>
                  Rock
                  <br />
                  Blutetooth Speaker
                </h3>
                <span className="text-white text-base">
                  <img className="inline-block h-6" src="indian.png" />
                  1299
                </span>
              </div>
              <span className="leading-tight item-description-color pt-8 text-sm">
                Compact, smart headphone with noise
                <br /> CANCELLING and super bass stereo. <br /> Playback time: 6 hours
              </span>
              <span className="text-xs item-description-color pt-8 leading-loose">Estimated launch: 2 Months</span>
            </span>
            <span className="column card mx-8 padding-30 min-height-560">
              <img src="/thar-bluetooth.svg" alt="Thar bluetooth" />
              <div className="flex flex-row items-center pt-8 justify-between">
                <h3>
                  Thar GT
                  <br />
                  Bluetooth Headphone
                </h3>
                <span className="text-white text-base">
                  <img className="inline-block h-6" src="indian.png" />
                  1299
                </span>
              </div>
              <div className="flex flex-row justify-between items-center pt-10">
                <button className="rounded-full py-4 text-base px-10 outline-none border-none bg-black">Details</button>
                <button className="rounded-full text-base py-4 px-12 outline-none border-none bg-white text-black">
                  Buy
                </button>
              </div>
              <span className="text-xs item-description-color pt-8 leading-loose">Estimated launch: 2 Months</span>
            </span>
            <span className="flex flex-col p-8 min-height-560 mx-8">
              <img src="/trip-flex.svg" alt="trip-flex" />
              <div className="flex flex-row items-center pt-8 justify-between">
                <h3>
                  Town Flex <br /> Wireless Neckband
                </h3>
                <span className="text-white text-base">
                  <img className="inline-block h-6" src="indian.png" />
                  799
                </span>
              </div>
              <span className="leading-tight item-description-color pt-8 text-sm">
                Comfortable and secure fit, magnetic design
                <br /> with pure stereo sound. <br />
                Playback time: 4.5 hours
              </span>
              <span className="text-xs item-description-color pt-8 leading-loose">Estimated launch: 2 Months</span>
            </span>
            <span>
              <button className="border-none outline-none">
                <img className="inline-block" src="arrow-right.svg" />
              </button>
            </span>
          </div>
        </div>
        <div content className="background-image-people p-32 bg-no-repeat mt-32">
          <div className="flex flex-row ">
            <div className="flex-grow">
              <h1 className="text-left">About us </h1>
            </div>
            <div className="flex-grow flex flex-col justify-center  max-width-50">
              <h3 className=" text-left">
                We refuse to conform to the idea of being just a consumer electronics brand, and instead believe we’re a
                lifestyle brand. As a fast-paced company, we make sure our products help you listen to the voice of
                righteousness and block out the noise of negativity.
              </h3>
              <div className="pt-32">
                <button className="button-transparent py-2 px-8  outline-none">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div content className="pt-32">
          <div className="flex flex-row justify-between items-center padding-sides-120">
            <h1>Sneak Peak</h1>
            <h3>The future before it happens</h3>
          </div>
          <div className="flex flex-row pt-32 justify-between padding-left-120 pr-10 items-center">
            <span className="flex flex-col p-8 min-height-560 mr-8">
              <img src="/rock-bluetooth.svg" alt="Rock bluetooth" />
              <div className="flex flex-row items-center pt-8 justify-between">
                <h3>
                  Rock
                  <br />
                  Blutetooth Speaker
                </h3>
                <span className="text-white text-base">
                  <img className="inline-block h-6" src="indian.png" />
                  1299
                </span>
              </div>
              <span className="leading-tight item-description-color pt-8 text-sm">
                Compact, smart headphone with noise
                <br /> CANCELLING and super bass stereo. <br /> Playback time: 6 hours
              </span>
              <span className="text-xs item-description-color pt-8 leading-loose">Estimated launch: 2 Months</span>
            </span>
            <span className="column card mx-8 padding-30 min-height-560">
              <img src="/thar-bluetooth.svg" alt="Thar bluetooth" />
              <div className="flex flex-row items-center pt-8 justify-between">
                <h3>
                  Thar GT
                  <br />
                  Bluetooth Headphone
                </h3>
                <span className="text-white text-base">
                  <img className="inline-block h-6" src="indian.png" />
                  1299
                </span>
              </div>
              <div className="flex flex-row justify-between items-center pt-10">
                <button className="rounded-full py-4 text-base px-10 outline-none border-none bg-black">Details</button>
                <button className="rounded-full text-base py-4 px-8 outline-none border-none bg-white text-black">
                  Pre Order
                </button>
              </div>
              <span className="text-xs item-description-color pt-8 leading-loose">Estimated launch: 2 Months</span>
            </span>
            <span className="flex flex-col p-8 min-height-560 mx-8">
              <img src="/trip-flex.svg" alt="trip-flex" />
              <div className="flex flex-row items-center pt-8 justify-between">
                <h3>
                  Town Flex <br /> Wireless Neckband
                </h3>
                <span className="text-white text-base">
                  <img className="inline-block h-6" src="indian.png" />
                  799
                </span>
              </div>
              <span className="leading-tight item-description-color pt-8 text-sm">
                Comfortable and secure fit, magnetic design
                <br /> with pure stereo sound. <br />
                Playback time: 4.5 hours
              </span>
              <span className="text-xs item-description-color pt-8 leading-loose">Estimated launch: 2 Months</span>
            </span>
            <span>
              <button className="border-none outline-none">
                <img className="inline-block" src="arrow-right.svg" />
              </button>
            </span>
          </div>
        </div>
        <div footer className="padding-sides-120 pt-64 pb-8">
          <div className="border-gray-900 border"></div>
          <div className="flex flex-row padding-top-90">
            <div className="flex-grow">
              <div className="pb-8">
                <Link href="/">
                  <a className="footer-link ">Support</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="pt-8 footer-font"> Privacy Policy </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Terms and Condition </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Warranty </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Refund </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Support </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Contact us</a>
                </Link>
              </div>
            </div>
            <div className="flex-grow">
              <div className="pb-8">
                <Link href="/">
                  <a className="footer-link ">About</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="pt-8 footer-font">Our Story</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Work with us</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font">Become a distributor </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font">Affiliate </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font">Corporate enquiries </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font">Press </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Blogs</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font">News </a>
                </Link>
              </div>
            </div>
            <div className="flex-grow">
              <div className="pb-8">
                <Link href="/">
                  <a className="footer-link">Explore</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="pt-8 footer-font">All Products</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font">Speakers </a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Headphones</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Power Banks</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Earphones</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Neckbands</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a className="footer-font"> Cables</a>
                </Link>
              </div>
            </div>
            <div className="flex-grow">
              <div>
                <Link href="/">
                  <a className="footer-link">Join our newsletter</a>
                </Link>
              </div>
              <h6 className="footer-font footer-text-color pt-8"> Even Trump can’t call this news fake</h6>
              <span className="row justify-start pt-6">
                <input placeholder="Enter your email address" className="pl-4 input-footer-color" />
                <button className="padding-notify-button">Join</button>
              </span>
              <div className="pt-16 flex ">
                <img src="/facebook.png" alt="facebook" className=" px-1 height-17" />
                <img src="/instagram.png" alt="instagram" className="px-1 height-17" />
                <img src="/youtube.png" alt="youtube" className=" px-1 height-17" />
                <img src="/twitter.png" alt="twitter" className=" px-1 height-17" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import style from './checkout.module.css';
import classNames from 'classnames';
import Dropdown from 'react-dropdown';

const options = ['Home', 'Work'];

const defaultOption = options[0];

export async function getServerSideProps(context) {
  return {
    props: {
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
      ],
    },
  };
}

export default function Checkout({ items }) {
  return (
    <div className="overflow-x-hidden">
      <div className={classNames(style.backgroundColor, 'min-h-screen bg- w-full pt-24')}>
        <Header openModal={false} invert={true}></Header>
        <Head>
          <title>Alpino</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="px-6 md:px-0 pt-8">
          <div className={classNames(style.statusBar, 'mx-auto flex justify-center')}>
            <div className="flex items-center h-full">
              <div className={classNames(style.greenDot)}>
                <p className="text-white flex justify-center items-center text-md font-normal">1</p>
              </div>
              <h1 className="text-base text-black font-normal we ml-1">Information</h1>
              <div className={classNames(style.greenBorder, 'mt-1 ml-1')}></div>
            </div>

            <div className="flex items-center h-full ml-3">
              <div className={classNames(style.blackDot)}>
                <p className="text-white flex justify-center items-center text-md font-normal">2</p>
              </div>
              <h1 className="text-base text-black font-normal ml-3">Shipping</h1>
              <div className={classNames(style.grayBorder, 'mt-1 ml-3')}></div>
            </div>

            <div className="flex items-center h-full ml-3">
              <div className={classNames(style.blackDot)}>
                <p className="text-white flex justify-center items-center text-md font-normal">3</p>
              </div>
              <h1 className="text-base text-black font-normal ml-3">Payment</h1>
            </div>
          </div>
        </div>
        <div className="mt-10 min-h-screen flex flex-col items-center px-6 pb-24 lg:flex-row justify-around">
          <div className={classNames(style.card, 'px-8 mb-8 lg:mb-0 mx-6 lg:mx-0')}>
            <h1 className="text-xl font-medium mt-6">Contact Information</h1>
            <input className="grayBackGroundColor text-black p-4 w-full rounded-md mt-2" placeholder="Email ID"></input>
            <h1 className="text-xl font-medium mt-6">Shipping Address</h1>
            <h1 className={classNames(style.labelColor, 'text-base font-normal mt-2 mb-2')}>Full Name</h1>
            <input className="grayBackGroundColor text-black p-4 w-full rounded-md mt-2" placeholder="Email ID"></input>
            <h1 className={classNames(style.labelColor, 'text-base font-normal mt-4 mb-2')}>Address</h1>
            <input
              className="grayBackGroundColor text-black p-4 w-full rounded-md mt-2"
              placeholder="Address line 1"></input>
            <input
              className="grayBackGroundColor text-black p-4 w-full rounded-md mt-6"
              placeholder="Address line 2"></input>
            <div className="flex flex-row flex-wrap justify-between items-center">
              <input
                className={classNames(style.halfInput, 'grayBackGroundColor text-black p-4 rounded-md mt-6')}
                placeholder="City"></input>
              <input
                className={classNames(style.halfInput, 'grayBackGroundColor text-black p-4 rounded-md mt-6')}
                placeholder="State"></input>
              <input
                className={classNames(style.halfInput, 'grayBackGroundColor text-black p-4 rounded-md mt-6')}
                placeholder="Pincode"></input>
              <input
                className={classNames(style.halfInput, 'grayBackGroundColor text-black p-4 rounded-md mt-6')}
                placeholder="Country"></input>
            </div>
            <input
              className="grayBackGroundColor text-black w-full p-4 rounded-md mt-6"
              placeholder="Mobile Number"></input>
            <h1 className={classNames(style.labelColor, 'text-base font-normal mt-8 mb-2')}>Address Type</h1>
            <Dropdown
              options={options}
              // onChange={this._onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
            <div className="flex items-center">
              <img className="w-2 h-2 mr-2 mt-2" src="/cart/checkbox.png"></img>
              <p className={classNames(style.labelColor, 'text-sm font-light tracking-wider mt-2')}>
                Save this information for next time
              </p>
            </div>
            <div className="flex flex-row w-full justify-center items-center mt-4">
              <img className="mr-2" src="/cart/leftarrow.png"></img>
              <h1 classNames={classNames(style.keepShoppingText, 'text-base font-normal tracking-wider')}>
                Keep Shopping
              </h1>
            </div>
          </div>
          <div className={classNames(style.card1, 'px-8 flex flex-col items-center justify-around lg:justify-between')}>
            <div className={classNames(style.smallCard, 'flex flex-col items-center justify-around px-6')}>
              <div className="flex flex-row items-center justify-between">
                <h1 className="text-xl font-medium tracking-wide mt-6 mb-6">Cart Summary</h1>
                <div className="flex flex-row justify-center items-center mr-4">
                  <img src="/cart/edit.png"></img>
                  <p className={classNames(style.labelColor, 'ml-2 text-xs font-normal')}>Edit</p>
                </div>
              </div>
              <div className={classNames(style.itemCards, 'flex flex-row h-32 mb-8')}>
                <div className={classNames(style.imagesBorderRadius, 'bg-black w-24 h-42 md:w-56 flex')}>
                  <img className="mx-auto my-auto" src="/cart/cart1.png"></img>
                </div>
                <div className="flex flex-col w-full justify-around items-start">
                  <div className="flex justify-between px-4 w-full">
                    <div>
                      <h1 className={classNames(style.titleFontColor, 'text-2xl font-medium')}>Thar GT</h1>
                      <div className="flex justify-start items-center">
                        <div className={classNames(style.coloredBalls, 'rounded-full bg-black mr-1 ml-1')}></div>
                        <span className={classNames(style.titleFontColor, 'text-xs font-light')}>Black</span>
                      </div>
                    </div>
                    <p className={classNames(style.titleFontColor, 'text-xs font-light mt-3')}>₹ 2999</p>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between px-5">
                    <button className="flex flex-col border-none outline-none">
                      <img className={classNames(style.marginBottom)} src="/cart/deletetop.png"></img>
                      <img src="/cart/deletebottom.png"></img>
                    </button>
                    <h1 className={(style.smallCard, 'text-xs font-normal')}>1 Pcs</h1>
                  </div>
                </div>
              </div>

              <div className={classNames(style.itemCards, 'flex flex-row h-32 mb-8')}>
                <div className={classNames(style.imagesBorderRadius, 'bg-black w-24 h-42 md:w-56 flex')}>
                  <img className="mx-auto my-auto" src="/cart/cart2.png"></img>
                </div>
                <div className="flex flex-col w-full justify-around items-start">
                  <div className="flex justify-between px-4 w-full">
                    <div>
                      <h1 className={classNames(style.titleFontColor, 'text-2xl font-medium')}>Flex Pro</h1>
                      <div className="flex justify-start items-center">
                        <div className={classNames(style.coloredBalls, 'rounded-full bg-black mr-1 ml-1')}></div>
                        <span className={classNames(style.titleFontColor, 'text-xs font-light')}>Black</span>
                      </div>
                    </div>
                    <p className={classNames(style.titleFontColor, 'text-xs font-light mt-3')}>₹ 2499</p>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between px-5">
                    <button className="flex flex-col border-none outline-none">
                      <img className={classNames(style.marginBottom)} src="/cart/deletetop.png"></img>
                      <img src="/cart/deletebottom.png"></img>
                    </button>
                    <h1 className={(style.smallCard, 'text-xs font-normal')}>2 Pcs</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(style.smallCard, 'px-6')}>
              <h1 className="text-xl font-medium tracking-wide mt-6">Order Summary</h1>
              <p className={classNames(style.labelColor, 'text-sm font-light')}>
                Total cost includes taxes and delivery charges
              </p>
              <p className={classNames(style.labelColor, 'text-right text-sm font-light')}>2 items</p>
              <div className="flex flex-row items-center justify-between mt-4 px-4">
                <h1 className="text-lg font-medium tracking-wider ml-4">Item Total</h1>
                <p className="text-sm font-medium">₹ 7897</p>
              </div>

              <div className="flex flex-row items-center justify-between mt-5 px-4">
                <h1 className={classNames(style.labelColor, 'text-base font-normal tracking-wider ml-4')}>Taxes</h1>
                <p className={classNames(style.labelColor, 'text-sm font-medium')}>₹ 58</p>
              </div>
              <div className="flex flex-row items-center justify-between mt-5 px-4">
                <h1 className={classNames(style.labelColor, 'text-base font-normal tracking-wider ml-4')}>
                  Delivery Charges
                </h1>
                <p className={classNames(style.labelColor, 'text-sm font-medium')}>₹ 48</p>
              </div>

              <div className="flex flex-row items-center justify-between mt-6 px-4">
                <h1 className={classNames(style.greenFontColor, 'text-lg font-normal tracking-wider ml-4')}>Total</h1>
                <p className={classNames(style.greenFontColor, 'text-sm font-medium')}>₹ 48</p>
              </div>
              <Link href="/shipping">
                <div
                  className={classNames(
                    style.continueButton,
                    'cursor-pointer mx-auto flex justify-center items-center mt-8',
                  )}>
                  <h1 className="text-base text-white font-medium">Continue to shipping</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

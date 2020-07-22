import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import style from './checkout.module.css';
import classNames from 'classnames';
import Dropdown from 'react-dropdown';
import { withApollo } from '../lib/apollo/withApollo';
import useCart from '../hooks/cart/useCart.js';

const options = ['Home', 'Work'];

const defaultOption = options[0];

function Shipping({ items }) {
  const { cart, onRemoveCartItems } = useCart();
  console.log(cart);
  const handleRemoveItem = async (itemId) => {
    const { data, error } = await onRemoveCartItems(itemId);
  };

  return (
    <div className="overflow-x-hidden">
      <main>
        <div className={classNames(style.backgroundColor, 'min-h-screen bg- w-full pt-24')}>
          <Header openModal={false}></Header>
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
          <div className="mt-10 min-h-screen flex flex-col px-6 pb-24 lg:flex-row items-center lg:items-start justify-around">
            <div className={classNames(style.shippingCard, 'px-8 mb-8 lg:mb-0')}>
              <h1 className="text-xl font-medium mt-6">Shipping Information</h1>

              <h1 className="text-lg font-normal ml-4 mt-6">Contact Details</h1>
              <div className="flex flex-row items-center justify-between px-10">
                <div className="flex flex-rol items-center justify-between w-3/5">
                  <h1 className="text-sm font-light tracking-wider mt-6 mb-6">Email ID</h1>
                  <h1 className="text-lg font-normal tracking-wider mt-6 mb-6">johndoe12@gmail.com</h1>
                </div>
                <Link href="/checkout">
                  <a className="flex flex-row justify-center items-center mr-4">
                    <img src="/cart/edit.png"></img>
                    <p className={classNames(style.labelColor, 'ml-2 text-xs font-normal')}>Edit</p>
                  </a>
                </Link>
              </div>

              <h1 className="text-lg font-normal ml-4 mt-1">Shipping Address</h1>
              <div className="flex flex-row items-center justify-between px-10">
                <div className="flex flex-rol items-center w-9/12 justify-between">
                  <h1 className="text-sm font-light tracking-wider mt-6 mb-6">Ship to</h1>
                  <h1 className="text-lg font-normal tracking-wider mt-6 mb-6">
                    {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.address1}
                    <br /> {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.address2}
                    <br /> {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.city} ,
                    {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.region}
                    <br /> {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.country} ,
                    {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.postal}
                    <br />
                    {cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.phone}
                  </h1>
                </div>
                <Link href="/checkout">
                  <a className="flex flex-row justify-center items-center mr-4">
                    <img src="/cart/edit.png"></img>
                    <p className={classNames(style.labelColor, 'ml-2 text-xs font-normal')}>Edit</p>
                  </a>
                </Link>
              </div>
              {/*  <h1 className="text-lg font-normal ml-4 mt-4">Shipping method</h1>
              <div className="flex flex-row grayBackGroundColor items-center bg-black ml-4 p-4 mt-4 rounded-md mt-2">
                <img className={classNames(style.ellipse)} src="/cart/ellipse.png"></img>
                <p className="text-sm font-light ml-4">Express Shipping</p>
              </div> */}
              <Link className="border-none outline-none" href="/checkout">
                <a className="flex flex-row w-full justify-start ml-4 mt-2 items-center mt-4">
                  <img className="mr-2" src="/cart/leftarrow.png"></img>
                  <h1 classNames={classNames(style.keepShoppingText, 'text-base font-normal tracking-wider')}>
                    Return to information
                  </h1>
                </a>
              </Link>
              <Link href="/">
                <div
                  className={classNames(
                    style.continueButton,
                    'cursor-pointer mx-auto flex justify-center items-center mt-6',
                  )}>
                  <h1 className="text-base text-white font-medium">Continue to payment</h1>
                </div>
              </Link>
            </div>
            <div className={classNames(style.card1, 'px-8 flex flex-col justify-between items-center')}>
              <div className={classNames(style.smallCard, 'flex flex-col  px-6')}>
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-xl font-medium tracking-wide mt-6 mb-6">Cart Summary</h1>
                </div>
                {cart?.items.map((item) => (
                  <div className={classNames(style.itemCards, 'flex flex-row mb-8 w-full')}>
                    <div className={classNames(style.imagesBorderRadius, 'bg-black w-24 md:w-56 flex')}>
                      <Link href={`products/${item?.productSlug}`}>
                        <a>
                          <img className="mx-auto my-auto" src={item.imageURLs} />
                        </a>
                      </Link>
                    </div>
                    <div className="flex flex-col w-full justify-between items-start">
                      <div className="flex justify-between px-4 w-full">
                        <Link href={`products/${item?.productSlug}`}>
                          <a>
                            <h1 className={classNames(style.titleFontColor, 'text-2xl font-medium')}>{item?.title}</h1>
                          </a>
                        </Link>
                        <p className={classNames(style.titleFontColor, 'text-xs font-light mt-3')}>
                          {item?.price?.displayAmount}
                        </p>
                      </div>
                      <div className="flex justify-start items-center mt-1 mb-auto px-4">
                        <div className={classNames(style.coloredBalls, 'rounded-full bg-black mr-1 ml-1')} />
                        <span className={classNames(style.titleFontColor, 'text-xs font-light')}>
                          {item?.variantTitle}
                        </span>
                      </div>
                      <div className="flex flex-row w-full items-center justify-between px-5 pb-1">
                        <button
                          onClick={() => handleRemoveItem(item._id)}
                          className="flex flex-col border-none outline-none">
                          <img className={classNames(style.marginBottom)} src="/cart/deletetop.png" />
                          <img src="/cart/deletebottom.png" />
                        </button>
                        <h1 className={(style.smallCard, 'text-xs font-normal')}>{item?.quantity} Pcs</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={classNames(style.smallCard1, 'px-6')}>
                <h1 className="text-xl font-medium tracking-wide mt-6">Order Summary</h1>
                <p className={classNames(style.labelColor, 'text-sm font-light')}>
                  Total cost includes taxes and delivery charges
                </p>
                <p className={classNames(style.labelColor, 'text-right text-sm font-light')}>
                  {cart?.totalItemQuantity} items
                </p>
                <div className="flex flex-row items-center justify-between mt-4 px-4">
                  <h1 className="text-lg font-medium tracking-wider ml-4">Item Total</h1>
                  <p className="text-sm font-medium">{cart?.checkout?.summary?.itemTotal?.displayAmount}</p>
                </div>

                {cart?.checkout?.summary?.taxTotal && (
                  <div className="flex flex-row items-center justify-between mt-5 px-4">
                    <h1 className={classNames(style.labelColor, 'text-base font-normal tracking-wider ml-4')}>Taxes</h1>
                    <p className={classNames(style.labelColor, 'text-sm font-medium')}>
                      {cart?.checkout?.summary?.taxTotal || 0}
                    </p>
                  </div>
                )}
                <div className="flex flex-row items-center justify-between mt-5 px-4">
                  <h1 className={classNames(style.labelColor, 'text-base font-normal tracking-wider ml-4')}>
                    Delivery Charges
                  </h1>
                  <p className={classNames(style.labelColor, 'text-sm font-medium')}>
                    {cart?.checkout?.summary?.surchargeTotal?.displayAmount}
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 px-4">
                  <h1 className={classNames(style.greenFontColor, 'text-lg font-normal tracking-wider ml-4')}>Total</h1>
                  <p className={classNames(style.greenFontColor, 'text-sm font-medium')}>
                    {' '}
                    {cart?.checkout?.summary?.total?.displayAmount}
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-medium tracking-wider text-center ml-4">Coupon code</h1>
                  <input
                    className="grayBackGroundColor box text-black p-4 rounded-md mt-2 w-full"
                    placeholder="Enter Coupon Code"></input>
                </div>
                <Link href="/checkout">
                  <div
                    className={classNames(
                      style.applyButton,
                      'cursor-pointer mx-auto flex justify-center items-center mt-8',
                    )}>
                    <h1 className="text-base text-white font-medium">Apply</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
export default withApollo()(Shipping);

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { withApollo } from '../lib/apollo/withApollo';
import useCart from '../hooks/cart/useCart.js';
import style from './checkout.module.css';
import classNames from 'classnames';
import OrderStatus from '../components/OrderStatus.tsx';

export async function getStaticProps() {
  return {
    props: {
      cartData: [
        {
          name: 'Thar Gt',
          color: 'red',
          colorTitle: 'Black',
          date: '8 jun',
          items: '1',
          price: 'Rs2900',
          status: 'shipped',
          img: '/allProducts/flash1.png',
        },
        {
          name: 'Thar Gt',
          color: 'red',
          colorTitle: 'Black',
          date: '8 jun',
          items: '1',
          price: 'Rs2900',
          status: 'placed',
          img: '/allProducts/flash1.png',
        },
        {
          name: 'Thar Gt',
          color: 'red',
          colorTitle: 'Black',
          date: '8 jun',
          items: '1',
          price: 'Rs2900',
          status: 'delivered',
          img: '/allProducts/flash1.png',
        },
      ],
    },
  };
}

function orderPlaced({ cartData }) {
  const { cart } = useCart();
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-green">
          <Header transparent />
          <h1 className="pt-28 font-semibold leading-8 text-4xl text-center text-white">Order Placed</h1>
          <h3 className="text-white pt-2 text-base leading-8 text-center">Order Id : 263829173891</h3>
        </div>
        <div className="bg-order px-16 pb-24 pt-16 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-3/5">
            <div className="bg-black rounded-order py-8 px-8  ml-auto mr-auto md:mr-12 ">
              <h1 className="text-lg font-medium leading-8 text-white"> Order Details</h1>
              {cartData.map((i, index) => (
                <div className="flex flex-col-reverse md:flex-row pt-8">
                  <div className="w-full md:w-4/6 px-6 md:pr-6">
                    <div
                      className={`${index !== 0 && 'border-b-1/2 border-solid  border-b-order'} w-full px-12 mb-8`}
                    />
                    <div className="flex flex-row justify-between items-baseline">
                      <h1 className="text-lg font-medium text-login-font leading-8"> {i.name}</h1>
                      <h3 className="text-xs font-light leading-8  text-login-font">Estimated arrival date</h3>
                    </div>
                    <div className="flex flex-row items-start justify-between">
                      <div className="flex flex-row items-center pt-2 ">
                        <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: i.color }}></div>
                        <p className="text-xs font-light leading-8  text-login-font">{i.colorTitle}</p>
                      </div>
                      <h3 className="text-xs font-semibold text-login-font leading-8 text-right">{i.date}</h3>
                    </div>
                    <div className="flex flex-row justify-between pt-2 items-baseline">
                      <h3 className="text-xs font-light leading-8  text-login-font">{i.price}</h3>
                      <h3 className="text-base text-sm text-login-font">{i.items}</h3>
                    </div>
                    <div className="pt-4">
                      <OrderStatus status={i.status} />
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 px-6 md:px-0 mb-4  md:mt-0">
                    <img src={i.img} alt="img" className="h-32 mx-auto" />
                  </div>
                </div>
              ))}
              <div className="pt-8">
                <Link className="border-none outline-none" href="/user">
                  <a className="flex flex-row w-full justify-start ml-4 mt-2 items-center mt-4">
                    <h1 className="text-sm font-normal tracking-wider text-login-font">View Orders</h1>
                    <img className="ml-2" src="/rightArrow.svg"></img>
                  </a>
                </Link>
              </div>
              <div className="mt-6 flex justify-center">
                <button className=" flex-shrink-0 leading-5 rounded-full text-sm py-3 px:12  md:px-16 lg:px-24 outline-none  bg-white text-black  max-w-300  flex justify-center text-center font-semibold">
                  Keep Shopping
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 w-full lg:w-2/5">
            <div>
              <div className="bg-black rounded-order py-8 px-8">
                <h1 className="text-xl text-white font-medium mt-6">Shipping Information</h1>

                <h1 className="text-lg  text-login-font font-normal ml-4 mt-6">Contact Details</h1>
                <div className="flex flex-row items-center justify-between px-10">
                  <div className="flex flex-row items-center justify-between w-3/5 ">
                    <h1 className="text-sm font-light tracking-wider mt-6 mb-6 flex-shrink-0 text-login-font pr-4 md:pr-0">
                      Email ID
                    </h1>
                    <h1 className="text-lg font-normal tracking-wider mt-6 mb-6 flex-shrink-0 lg:pl-16 text-login-font">
                      {cart?.email}
                    </h1>
                  </div>
                </div>

                <h1 className="text-lg  text-white font-normal ml-4 mt-1 ">Shipping Address</h1>
                <div className="flex flex-row items-center justify-between px-10">
                  <div className="flex flex-row items-center w-3/5 justify-between">
                    <h1 className="text-sm font-light text-login-font tracking-wider mt-6 mb-6 flex-shrink-0 pr-4 md:pr-0">
                      Ship to
                    </h1>
                    <h1 className="text-lg font-normal tracking-wider mt-6 mb-6 flex-shrink-0 lg:pl-16 text-login-font">
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
                </div>
              </div>
            </div>
            <div className="bg-black rounded-order py-8 px-8 mt-6">
              <h1 className="text-xl font-medium tracking-wide mt-6 text-white">Order Summary</h1>
              <p className="text-sm font-light text-login-font">Total cost includes taxes and delivery charges</p>
              <div className="flex flex-row items-center justify-between mt-4 px-4">
                <h1 className="text-lg font-medium tracking-wider ml-4 text-login-font">Item Total</h1>
                <p className="text-sm font-medium text-login-font">
                  {cart?.checkout?.summary?.itemTotal?.displayAmount}
                </p>
              </div>

              {cart?.checkout?.summary?.taxTotal && (
                <div className="flex flex-row items-center justify-between mt-5 px-4">
                  <h1 className={classNames('text-base font-normal tracking-wider ml-4 text-login')}>Taxes</h1>
                  <p className={classNames('text-sm font-medium text-login-font')}>
                    {cart?.checkout?.summary?.taxTotal || 0}
                  </p>
                </div>
              )}
              <div className="flex flex-row items-center justify-between mt-5 px-4">
                <h1 className={classNames('text-base text-login-font font-normal tracking-wider ml-4')}>
                  Delivery Charges
                </h1>
                <p className={classNames('text-sm font-medium text-login-font')}>
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default withApollo()(orderPlaced);

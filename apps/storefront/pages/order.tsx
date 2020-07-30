import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { withApollo } from '../lib/apollo/withApollo';
import useCart from '../hooks/cart/useCart.js';
import style from './checkout.module.css';
import classNames from 'classnames';
import UserComponent from '../components/userComponent.tsx';
import OrderStatus from '../components/OrderStatus.tsx';
import SideMenu from '../components/sidemenu.tsx';
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

function user({ cartData }) {
  const { cart } = useCart();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-black">
          <Header transparent />
          <h1 className="pt-28  leading-8 font-semibold text-4xl text-account text-center pb-20">Account</h1>
        </div>
        <div className="bg-order px-16 pt-10 pb-16 flex flex-col lg:flex-row ">
          <SideMenu active="order" />
          <div className="w-full lg:w-2/3">
            <div className="bg-black rounded-order py-8 px-8  ml-auto mr-auto md:mr-12 ">
              <h1 className="text-lg font-medium leading-8 text-white"> Order Details</h1>
              {cartData?.map((i, index) => (
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default withApollo()(user);

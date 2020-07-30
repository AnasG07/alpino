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
function user() {
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
          <SideMenu active="account" />
          <div className="w-full lg:w-2/3">
            <div className="bg-black rounded-order pt-4 px-8 pb-8">
              <div className="flex flex-row justify-between items-baseline">
                <h3 className="text-lg font-semibold leading-8 text-account-name">Account Info</h3>
                <h3 className="text-sm font-light leading-8 text-account-name">
                  This information is strictly confidential.
                </h3>
              </div>
              <div className="pt-8 flex flex-col justify-center items-center">
                <img src="/user.png" alt="user" className="w-12 rounded-full" />
                <h3 className="leading-8 text-account-name text-base pt-2 ">Change Profile Picture</h3>
              </div>
              <form>
                <div className="bg-black-about px-4 py-2 rounded-account mt-8">
                  <p className="text-sm font-light leading-8 text-account-name"> Full Name</p>
                  <input
                    className="text-lg font-medium leading-8 text-account-name bg-transparent border-none w-full"
                    required
                  />
                </div>
                <div className="bg-black-about px-4 py-2 rounded-account mt-8">
                  <p className="text-sm font-light leading-8 text-account-name"> Email Id</p>
                  <input
                    className="text-lg font-medium leading-8 text-account-name bg-transparent border-none w-full"
                    type="email"
                    required
                  />
                </div>
                <div className="bg-black-about px-4 py-2 rounded-account mt-8">
                  <p className="text-sm font-light leading-8 text-account-name">Country/Region</p>
                  <input
                    className="text-lg font-medium leading-8 text-account-name bg-transparent border-none w-full"
                    required
                  />
                </div>
                <div className="bg-black-about px-4 py-2 rounded-account mt-8">
                  <p className="text-sm font-light leading-8 text-account-name"> Mobile Number</p>
                  <input
                    type="tel"
                    className="text-lg font-medium leading-8 text-account-name bg-transparent border-none w-full"
                    required
                  />
                </div>
                <div className="bg-black-about px-4 py-2 rounded-account mt-8">
                  <p className="text-sm font-light leading-8 text-account-name"> Change Password</p>
                  <input
                    className="text-lg font-medium leading-8 text-account-name bg-transparent border-none w-full"
                    required
                    type="password"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default withApollo()(user);

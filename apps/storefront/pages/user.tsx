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
  const [buttonRole, updateButtonRole] = useState('');

  useEffect(() => {
    updateButtonRole('account');
    if (process.browser) {
      document.getElementById('Account').focus();
    }
  }, []);

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
          <div className=" py-6 bg-black rounded-order w-full mb-8 lg:mb-0 lg:w-1/3 mr-12 h-80">
            <div className="flex flex-row pb-6 items-center px-6">
              <img src="/user.png" className="rounded-full w-8" />
              <h1 className="font-medium text-lg leading-8 text-account-name pl-4"> John Doe</h1>
            </div>
            <div>
              <button
                id="Account"
                className="px-6 active pl-8 text-lg leading-8 text-account-name w-full border-none rounded-none"
                onClick={() => updateButtonRole('account')}>
                <span className="border-t border-b border-solid border-bor-account w-full py-4 text-left">
                  Account Info
                </span>
              </button>
              <button
                className=" px-6 active pl-8 text-lg leading-8 text-account-name w-full border-none rounded-none"
                onClick={() => updateButtonRole('order')}>
                <span className="border-b border-solid border-bor-account w-full py-4 text-left">Orders</span>
              </button>
              <button
                className="px-6 active pl-8 text-lg leading-8 text-account-name w-full border-none rounded-none"
                onClick={() => updateButtonRole('address')}>
                <span className="border-b border-solid border-bor-account w-full py-4 text-left">Saved Addresses</span>
              </button>
            </div>

            <button className="text-center px-6 border-none text-logout mt-350 mx-auto text-lg leading-8 text-center">
              Logout
            </button>
          </div>
          <div className="w-full lg:w-2/3">
            {buttonRole === 'account' ? (
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
              </div>
            ) : buttonRole === 'order' ? (
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
            ) : (
              <div className="text-white"></div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default withApollo()(user);

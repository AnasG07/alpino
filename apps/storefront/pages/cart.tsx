import React from 'react';
import Modal from 'react-modal';
import Head from 'next/head';
import style from './cart.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import CardItemCard from '../components/CartItemCard';

const customStyles = {
  content: {
    height: '960px',
    width: '420px',
    position: 'absolute',
    top: '0px',
    left: '77.5%',
    background: '#F9F9F9',
    borderRadius: '20px 0px 0px 0px',
    padding: 0,
    border: 'none',
  },
  overlay: {
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default function Cart({ modalIsOpen, closeModal, items }) {
  console.log('this is the items');
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black flex flex-row justify-between py-6 px-6">
        <div>
          <h1 className={classNames(style.headingColor, 'text-4xl font-semibold')}>My Cart</h1>
          <p className={classNames(style.headingColor, 'text-white text-base font-normal')}>
            We’re here to push the cart around you.
          </p>
        </div>
        <button onClick={closeModal} className="border-none outline-none">
          <img className={classNames(style.Icon)} src="/cart/cancel.png"></img>
        </button>
      </div>

      <p className={classNames(style.productHeading, 'text-base px-6 mt-2 font-normal')}>Products</p>

      <div className="px-6 mt-3">
        {items.map((i, index) => (
          <CardItemCard i={i} index={index} />
        ))}
      </div>
      <Link href="/checkout">
        <div
          className={classNames(
            style.checkoutButton,
            'bg-black h-10 w-64 cursor-pointer mx-auto flex justify-center items-center mt-40',
          )}>
          <h1 className={classNames(style.headingColor, 'text-xl font-medium')}>Checkout</h1>
        </div>
      </Link>
    </Modal>
  );
}

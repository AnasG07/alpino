import React from 'react';
import Modal from 'react-modal';
import style from './cart.module.css';
import useCart from '../hooks/cart/useCart.js';
import Link from 'next/link';
import classNames from 'classnames';
import { withApollo } from '../lib/apollo/withApollo';
import CardItemCard from '../components/CartItemCard';

const customStyles = {
  content: {
    minHeight: '960px',
    width: '420px',
    left: 'auto',
    top: '0px',
    right: 0,
    background: '#F9F9F9',
    borderRadius: 0,
    padding: 0,
    border: 'none',
  },
  overlay: {
    zIndex: 99,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

function Cart({ modalIsOpen, closeModal, items }) {
  const { cart, onRemoveCartItems, onChangeCartItemsQuantity } = useCart();

  const handleRemoveItem = async (itemId) => {
    const { data, error } = await onRemoveCartItems(itemId);
  };

  const handleItemQuantityChange = (quantity, cartItemId) => {
    onChangeCartItemsQuantity({ quantity, cartItemId });
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <div className="bg-black flex flex-row justify-between py-6 px-6">
        <div>
          <h1 className={classNames(style.headingColor, 'text-4xl font-semibold')}>My Cart</h1>
          <p className={classNames(style.headingColor, 'text-white text-base font-normal')}>
            We’re here to push the cart around you.
          </p>
        </div>
        <button onClick={closeModal} className="border-none outline-none">
          <img className={classNames(style.Icon)} src="/cart/cancel.png" />
        </button>
      </div>

      <p className={classNames(style.productHeading, 'text-base px-6 mt-2 font-normal')}>Products</p>

      <div className="px-6 mt-3">
        {cart.items.map((i, index) => (
          <CardItemCard
            data={i}
            index={index}
            handleRemoveItem={handleRemoveItem}
            handleItemQuantityChange={handleItemQuantityChange}
          />
        ))}
      </div>
      <Link href="/checkout">
        <a className={classNames('bg-black cursor-pointer mx-6 text-center mt-32 rounded-full block')}>
          <span className={classNames(style.checkoutButton, 'font-medium')}>Checkout</span>
        </a>
      </Link>
    </Modal>
  );
}

export default withApollo()(Cart);

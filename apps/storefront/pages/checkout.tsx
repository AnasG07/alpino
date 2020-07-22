import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { set } from 'lodash';
import Router from 'next/router';
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

function Checkout({ items }) {
  const {
    cart,
    onRemoveCartItems,
    checkoutMutations: { onSetShippingAddress },
  } = useCart();
  //console.log(cart, onSetShippingAddress);

  const handleRemoveItem = async (itemId) => {
    const { data, error } = await onRemoveCartItems(itemId);
  };

  const [address, updateAddress] = useState({
    fullName: '',
    city: '',
    country: '',
    address1: '',
    address2: '',
    phone: '',
    postal: '',
    region: '',
  });
  const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const inputHandler = (value, name) => {
    const newData = { ...address };
    set(newData, name, value);
    updateAddress(newData);
  };

  /*  useEffect(() => {
    if (
      cart &&
      cart.checkout &&
      cart.checkout.fulfillmentGroups[0] &&
      cart.checkout.fulfillmentGroups[0].shippingAddress
    ) {
      updateAddress({
        fullName: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.fullName,
        city: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.city,
        country: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.country,
        address1: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.address1,
        address2: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.address2,
        phone: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.phone,
        postal: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.postal,
        region: cart?.checkout?.fulfillmentGroups[0]?.shippingAddress?.region,
      });
    }
  }, []); */

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const x = await onSetShippingAddress(address);
    console.log(x);
    setLoading(false);
  };
  console.log(address);
  return (
    <div className="overflow-x-hidden ">
      <main>
        <div className={classNames(style.backgroundColor, 'min-h-screen bg- w-full pt-24')}>
          <Header />
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
                <h1 className="text-base font-normal we ml-1">Information</h1>
                <div className={classNames(style.greenBorder, 'mt-1 ml-1')} />
              </div>

              <div className="flex items-center h-full ml-3">
                <div className={classNames(style.blackDot)}>
                  <p className="text-white flex justify-center items-center text-md font-normal">2</p>
                </div>
                <h1 className="text-base  font-normal ml-3">Shipping</h1>
                <div className={classNames(style.grayBorder, 'mt-1 ml-3')} />
              </div>

              <div className="flex items-center h-full ml-3">
                <div className={classNames(style.blackDot)}>
                  <p className="text-white flex justify-center items-center text-md font-normal">3</p>
                </div>
                <h1 className="text-base font-normal ml-3">Payment</h1>
              </div>
            </div>
          </div>
          <div className="mt-10 min-h-screen flex flex-col items-center px-6 pb-24 lg:flex-row justify-around">
            <div className={classNames(style.card, 'px-8 mb-8 lg:mb-0 mx-6 lg:mx-0')}>
              <form onSubmit={onSubmit}>
                <h1 className="text-xl font-medium mt-6">Contact Information</h1>
                <div className="placeholderCheck">
                  <input
                    className="grayBackGroundColor box text-black p-4 w-full rounded-md mt-2"
                    placeholder="Email"
                  />
                </div>
                <h1 className="text-xl font-medium mt-6">Shipping Address</h1>
                <h1 className={classNames(style.labelColor, 'text-base font-normal mt-2 mb-2')}>Full Name</h1>
                <input
                  required
                  pattern="^[a-zA-Z\s\.]+$"
                  onChange={(e) => inputHandler(e.target.value, 'fullName')}
                  className="grayBackGroundColor box text-black p-4 w-full rounded-md mt-2"
                  placeholder="Name"
                  value={address?.fullName || ''}
                />
                <h1 className={classNames(style.labelColor, 'text-base font-normal mt-4 mb-2')}>Address</h1>
                <input
                  required
                  onChange={(e) => inputHandler(e.target.value, 'address1')}
                  className="grayBackGroundColor box text-black p-4 w-full rounded-md mt-2"
                  placeholder="Address line 1"
                  value={address?.address1 || ''}
                />
                <input
                  value={address?.address2 || ''}
                  required
                  onChange={(e) => inputHandler(e.target.value, 'address2')}
                  className="grayBackGroundColor box text-black p-4 w-full rounded-md mt-6"
                  placeholder="Address line 2"
                />
                <div className="flex flex-row flex-wrap justify-between items-center">
                  <input
                    value={address?.city || ''}
                    required
                    onChange={(e) => inputHandler(e.target.value, 'city')}
                    className={classNames(style.halfInput, 'grayBackGroundColor box text-black p-4 rounded-md mt-6')}
                    placeholder="City"
                  />
                  <input
                    value={address?.region || ''}
                    required
                    onChange={(e) => inputHandler(e.target.value, 'region')}
                    className={classNames(style.halfInput, 'grayBackGroundColor box text-black p-4 rounded-md mt-6')}
                    placeholder="State"
                  />
                  <input
                    value={address?.postal || ''}
                    required
                    type="number"
                    onChange={(e) => inputHandler(e.target.value, 'postal')}
                    className={classNames(style.halfInput, 'grayBackGroundColor box text-black p-4 rounded-md mt-6')}
                    placeholder="Pincode"
                  />
                  <input
                    value={address?.country || ''}
                    required
                    onChange={(e) => inputHandler(e.target.value, 'country')}
                    className={classNames(style.halfInput, 'grayBackGroundColor box text-black p-4 rounded-md mt-6')}
                    placeholder="Country"
                  />
                </div>
                <input
                  value={address?.phone || ''}
                  required
                  type="tel"
                  onChange={(e) => inputHandler(e.target.value, 'phone')}
                  className="grayBackGroundColor text-black w-full p-4 box rounded-md mt-6"
                  placeholder="Mobile Number"
                />
                <h1 className={classNames(style.labelColor, 'text-base font-normal mt-8 mb-2')}>Address Type</h1>
                <Dropdown
                  options={options}
                  // onChange={this._onSelect}
                  value={defaultOption}
                  placeholder="Select an option"
                />
                <div className="flex items-baseline">
                  <input type="checkbox" />
                  <p className={classNames(style.labelColor, 'text-sm font-light tracking-wider mt-2 ml-4')}>
                    Save this information for next time
                  </p>
                </div>
                <button></button>
              </form>
              <div className="flex flex-row w-full justify-center items-center mt-4">
                <button onClick={() => Router.back()} className="outline-none border-none">
                  <img className="mr-2" src="/cart/leftarrow.png" />
                  <h1 className={classNames(style.keepShoppingText, 'text-base font-normal tracking-wider')}>
                    Keep Shopping
                  </h1>
                </button>
              </div>
            </div>
            <div
              className={classNames(style.card1, 'px-8 flex flex-col items-center justify-around lg:justify-between')}>
              <div className={classNames(style.smallCard, 'flex flex-col items-center  px-8')}>
                <div className="flex flex-row items-center justify-between w-full">
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
              <div className={classNames(style.smallCard, 'px-6')}>
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
                <Link href="/shipping">
                  <button
                    disabled={loading}
                    className={classNames(
                      style.continueButton,
                      'cursor-pointer mx-auto flex justify-center items-center mt-8',
                    )}>
                    <h1 className="text-base text-white font-medium">Continue to shipping</h1>
                  </button>
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

export default withApollo()(Checkout);

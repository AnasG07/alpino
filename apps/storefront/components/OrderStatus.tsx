import React from 'react';
import classNames from 'classnames';

export default function OrderStatus({ status }) {
  console.log(status);
  return (
    <>
      <div className="flex flex-row mx-auto items-center justify-center">
        <div
          className={`w-2 h-2 ${
            status === 'placed' || status === 'shipped' || status === 'delivered' ? 'bg-green' : 'bg-circle'
          } rounded-full`}
        />
        <div className="w-280 h-1/2 bg-line relative">
          <div
            className={`w-2 h-2 circle-position ${
              status === 'shipped' || status === 'delivered' ? 'bg-green' : 'bg-circle'
            } rounded-full`}
          />
          <div
            className={classNames('h-full', {
              'w-1/4 bg-green': status === 'placed',
              'w-3/4 bg-green': status === 'shipped',
              'w-full bg-green': status === 'delivered',
            })}></div>
        </div>
        <div className={`w-2 h-2 ${status === 'delivered' ? 'bg-green' : 'bg-circle'} rounded-full`} />
      </div>
      <div className="max-w-350 mx-auto flex flex-row justify-between ">
        <h3 className="text-xs font-light leading-8  text-login-font">Order Placed</h3>
        <h3 className="text-xs font-light leading-8  text-login-font">Shipped</h3>
        <h3 className="text-xs font-light leading-8  text-login-font">Delivered</h3>
      </div>
    </>
  );
}

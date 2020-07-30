import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

export default function SideMenu({ active }) {
  return (
    <div className=" py-6 bg-black rounded-order w-full mb-8 lg:mb-0 lg:w-1/3 mr-12 h-80">
      <div className="flex flex-row pb-6 items-center px-6">
        <img src="/user.png" className="rounded-full w-8" />
        <h1 className="font-medium text-lg leading-8 text-account-name pl-4"> John Doe</h1>
      </div>
      <div>
        <div
          className={`${
            active === 'account' && 'active'
          } px-6 pl-8 text-lg leading-8 text-account-name w-full border-none rounded-none`}>
          <Link href="/user">
            <a>
              <div className="border-t border-b border-solid border-bor-account w-full py-4 text-left">
                Account Info
              </div>
            </a>
          </Link>
        </div>
        <div
          className={`${
            active === 'order' && 'active'
          } px-6 pl-8 text-lg leading-8 text-account-name w-full border-none rounded-none`}>
          <Link href="order">
            <a>
              <div className="border-b border-solid border-bor-account w-full py-4 text-left">Orders</div>
            </a>
          </Link>
        </div>
        <div className="px-6  pl-8 text-lg leading-8 text-account-name w-full border-none rounded-none">
          <Link href="/">
            <a>
              <div className="border-b border-solid border-bor-account w-full py-4 text-left">Saved Addresses</div>
            </a>
          </Link>
        </div>
      </div>

      <button className="text-center px-6 border-none text-logout mt-350 mx-auto text-lg leading-8 text-center">
        Logout
      </button>
    </div>
  );
}

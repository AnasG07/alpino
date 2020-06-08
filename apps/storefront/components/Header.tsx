import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-row justify-between padding-30 bg-black items-baseline">
      <img src="/logo.svg" alt="Alipno Logo" className="logo" />
      <span className="flex items-baseline">
        <div className="subnav">
          <Link href="/">
            <a className="header-link px-4 text-right">
              Earphones
              <img src="./down-arrow.png" alt="arrow" className="inline-block h-3 px-2 " />
            </a>
          </Link>
          <div className="subnav-content">
            <Link href="/">
              <a className="header-link px-4 block text-left">Neckbands</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4 block text-left">Headphones</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4 block text-left">Headsets- Single Ear</a>
            </Link>
            <Link href="/">
              <a className="header-link px-4 block text-left">Wired earphones</a>
            </Link>
          </div>
        </div>
        <Link href="/">
          <a className="header-link px-4">Speakers</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">Support</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">Incubate with Alpino</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">Careers</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4 inline-block">
            <img src="/user.svg" />
          </a>
        </Link>
        <Link href="/">
          <a className="header-link px-4 inline-block">
            <img src="/cart.svg" />
          </a>
        </Link>
      </span>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

export default function Header({ invert }) {
  return (
    <div className="flex flex-row justify-between padding-30 items-baseline">
      <img src="/logo.svg" alt="Alipno Logo" className={`logo ${invert && 'filter-invert'}`} />
      <span className="flex items-baseline">
        <div className="subnav">
          <Link href="/">
            <a className={`header-link px-4 text-right ${invert ? 'text-black' : 'text-white'}`}>
              Earphones
              <img
                src="./down-arrow.png"
                alt="arrow"
                className={`inline-block h-3 px-2 ${invert && 'filter-invert'}`}
              />
            </a>
          </Link>
          <div className="subnav-content">
            <Link href="/">
              <a className={`header-link px-4 block text-left ${invert ? 'text-black' : 'text-white'}`}>Neckbands</a>
            </Link>
            <Link href="/">
              <a className={`header-link px-4 block text-left ${invert ? 'text-black' : 'text-white'}`}>Headphones</a>
            </Link>
            <Link href="/">
              <a className={`header-link px-4 block text-left ${invert ? 'text-black' : 'text-white'}`}>
                Headsets- Single Ear
              </a>
            </Link>
            <Link href="/">
              <a className={`header-link px-4 block text-left ${invert ? 'text-black' : 'text-white'}`}>
                Wired earphones
              </a>
            </Link>
          </div>
        </div>
        <Link href="/">
          <a className={`header-link px-4 text-right ${invert ? 'text-black' : 'text-white'}`}>Speakers</a>
        </Link>
        <Link href="/">
          <a className={`header-link px-4 text-right ${invert ? 'text-black' : 'text-white'}`}>Support</a>
        </Link>
        <Link href="/">
          <a className={`header-link px-4 text-right ${invert ? 'text-black' : 'text-white'}`}>Incubate with Alpino</a>
        </Link>
        <Link href="/">
          <a className={`header-link px-4 text-right ${invert ? 'text-black' : 'text-white'}`}>Careers</a>
        </Link>
        <Link href="/">
          <a className={`header-link px-4 inline-block ${invert && 'filter-invert'}`}>
            <img src="/user.svg" />
          </a>
        </Link>
        <Link href="/">
          <a className={`header-link px-4 inline-block ${invert && 'filter-invert'}`}>
            <img src="/cart.svg" />
          </a>
        </Link>
      </span>
    </div>
  );
}

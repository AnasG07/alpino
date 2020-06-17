import React from 'react';
import Link from 'next/link';

export default function Header({ invert }) {
  return (
    <div className={`flex flex-row justify-between padding-30 items-baseline`}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Alipno Logo" className={`logo ${invert && 'filter-invert'}`} />
        </a>
      </Link>
      <span className="flex items-center">
        <div className="subnav">
          <Link href="/[category]" as="/[category]">
            <a className={`header-link px-4 text-right leading-8 ${invert ? 'text-black' : 'text-white'}`}>
              Earphones
              <img
                src="./down-arrow.png"
                alt="arrow"
                className={`inline-block h-3 px-2 ${invert && 'filter-invert'}`}
              />
            </a>
          </Link>
          <div className="subnav-content">
            <Link href="/earphones/neckbands">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Neckbands
              </a>
            </Link>
            <Link href="/earphones/headphones">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Headphones
              </a>
            </Link>
            <Link href="/earphones/headsets-single-ear">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Headsets - Single Ear
              </a>
            </Link>
            <Link href="/earphones/wired-earphones">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Wired earphones
              </a>
            </Link>
          </div>
        </div>
        <Link href="/speakers">
          <a className={`header-link px-4 text-right leading-8 ${invert ? 'text-black' : 'text-white'}`}>Speakers</a>
        </Link>
        <Link href="/support">
          <a className={`header-link px-4 text-right leading-8 ${invert ? 'text-black' : 'text-white'}`}>Support</a>
        </Link>
        <Link href="/incubate-with-alpino">
          <a className={`header-link px-4 text-right leading-8 ${invert ? 'text-black' : 'text-white'}`}>
            Incubate with Alpino
          </a>
        </Link>
        <Link href="/careers">
          <a className={`header-link px-4 text-right leading-8 ${invert ? 'text-black' : 'text-white'}`}>Careers</a>
        </Link>
        <Link href="/user">
          <a className={`header-link px-4 inline-block ${invert && 'filter-invert'}`}>
            <img src="/user.svg" />
          </a>
        </Link>
        <Link href="/cart">
          <a className={`header-link px-4 inline-block ${invert && 'filter-invert'}`}>
            <img src="/cart.svg" />
          </a>
        </Link>
      </span>
    </div>
  );
}

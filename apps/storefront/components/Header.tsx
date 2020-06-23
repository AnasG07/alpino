import React from 'react';
import Link from 'next/link';

export default function Header({ invert, openModal }) {
  return (
    <div
      className={`flex flex-row justify-between padding-30 z-10 items-baseline ${
        !invert && 'fixed bg-black'
      } w-full top-0 `}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Alipno Logo" className={`logo ${invert && 'filter-invert'}`} />
        </a>
      </Link>
      <span className="flex items-center">
        <div className="subnav">
          <Link href="/category/[category]" as="/category/earphones">
            <a className={`header-link px-4 text-right leading-8 ${invert ? 'text-black' : 'text-white'}`}>
              Earphones
              <img src="/down-arrow.png" alt="arrow" className={`inline-block h-3 px-2 ${invert && 'filter-invert'}`} />
            </a>
          </Link>
          <div className="subnav-content">
            <Link href="/neckbands">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Neckbands
              </a>
            </Link>
            <Link href="/headphones">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Headphones
              </a>
            </Link>
            <Link href="/headsets-single-ear">
              <a className={`header-link px-4 block text-left leading-8 ${invert ? 'text-black' : 'text-white'}`}>
                Headsets - Single Ear
              </a>
            </Link>
            <Link href="/wired-earphones">
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
        <button className="border-none outline-none">
          <a onClick={openModal} className={`header-link px-4 inline-block ${invert && 'filter-invert'}`}>
            <img src="/cart.svg" />
          </a>
        </button>
      </span>
    </div>
  );
}

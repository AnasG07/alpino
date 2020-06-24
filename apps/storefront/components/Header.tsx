import React, { useState } from 'react';
import Link from 'next/link';

export default function Header({ invert, openModal, transparent, unfixed, opacity }) {
  const [scroll, updateScroll] = useState(false);
  if (process.browser) {
    window.addEventListener('scroll', () => {
      if (scrollY < 90) {
        updateScroll(false);
      } else updateScroll(true);
    });
  }

  return (
    <div
      className={`flex flex-row justify-between padding-30 z-10 items-baseline ${!unfixed && 'fixed'} w-full top-0 ${
        scroll ? 'bg-black' : opacity ? 'bg-header-opacity' : invert || transparent ? 'bg-transparent' : 'bg-black'
      }`}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Alipno Logo" className={`logo ${invert && !scroll && 'filter-invert'}`} />
        </a>
      </Link>
      <span className="flex items-center flex-row-reverse md:flex-row">
        <div className="flex flex-row">
          <div className="subnav">
            <Link href="/[category]" as="/earphones">
              <a className={`header-link px-4 text-right leading-8 ${invert && !scroll ? 'text-black' : 'text-white'}`}>
                Earphones
                <img
                  src="/down-arrow.png"
                  alt="arrow"
                  className={`inline-block h-3 px-2 ${invert && !scroll && 'filter-invert'}`}
                />
              </a>
            </Link>
            <div className="subnav-content">
              <Link href="/collections/[tag]" as="/collections/neckbands">
                <a
                  className={`header-link px-4 block text-left leading-8 ${
                    invert && !scroll ? 'text-black' : 'text-white'
                  }`}>
                  Neckbands
                </a>
              </Link>
              <Link href="/collections/[tag]" as="/collections/headphones">
                <a
                  className={`header-link px-4 block text-left leading-8 ${
                    invert && !scroll ? 'text-black' : 'text-white'
                  }`}>
                  Headphones
                </a>
              </Link>
              <Link href="/collections/[tag]" as="/collections/headsets-single-ear">
                <a
                  className={`header-link px-4 block text-left leading-8 ${
                    invert && !scroll ? 'text-black' : 'text-white'
                  }`}>
                  Headsets - Single Ear
                </a>
              </Link>
              <Link href="/collections/[tag]" as="/collections/wired-earphones">
                <a
                  className={`header-link px-4 block text-left leading-8 ${
                    invert && !scroll ? 'text-black' : 'text-white'
                  }`}>
                  Wired earphones
                </a>
              </Link>
            </div>
          </div>
          <Link href="/speakers">
            <a className={`header-link px-4 text-right leading-8 ${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Speakers
            </a>
          </Link>
          <Link href="/support">
            <a className={`header-link px-4 text-right leading-8 ${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Support
            </a>
          </Link>
          <Link href="/incubate-with-alpino">
            <a className={`header-link px-4 text-right leading-8 ${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Incubate with Alpino
            </a>
          </Link>
          <Link href="/careers">
            <a className={`header-link px-4 text-right leading-8 ${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Careers
            </a>
          </Link>
        </div>
        <div className="flex flex-row">
          <Link href="/user">
            <a className={`header-link px-4 inline-block ${invert && !scroll && 'filter-invert'}`}>
              <img src="/user.svg" />
            </a>
          </Link>
          <button className="border-none outline-none">
            <a onClick={openModal} className={`header-link px-4 inline-block ${invert && !scroll && 'filter-invert'}`}>
              <img src="/cart.svg" />
            </a>
          </button>
        </div>
      </span>
    </div>
  );
}

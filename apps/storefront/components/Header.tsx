import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  invert?: boolean;
  transparent?: boolean;
  openModal(): void;
  opacity?: boolean;
  unfixed?: boolean;
}

export default function Header({ invert, openModal, transparent, unfixed, opacity, black }: HeaderProps) {
  const [scroll, updateScroll] = useState(false);
  const [toggle, updateToggle] = useState(false);
  if (process.browser) {
    window.addEventListener('scroll', () => {
      if (document.body.offsetWidth > 1024 && scrollY < 90) {
        updateScroll(false);
      } else updateScroll(true);
    });
  }

  return (
    <div
      className={`flex flex-row justify-between padding-30 z-10 items-center fixed w-full top-0  ${
        scroll ? 'bg-black' : opacity ? 'bg-header-opacity' : invert || transparent ? 'bg-transparent' : 'bg-black'
      }`}>
      <div
        className={`lg:hidden -m-3 hover-toggle ${invert && !scroll && 'filter-invert'} ${
          black && !scroll && 'filter-invert-temp'
        }`}>
        <button className="border-none" onClick={() => updateToggle(!toggle)}>
          <img src="/collapse.svg" alt="none" />
        </button>
      </div>
      <Link href="/">
        <a className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Alipno Logo"
            className={`logo ${invert && !scroll && 'filter-invert'} ${
              black && !scroll && 'filter-inver-temp'
            } pl-24 lg:pl-0`}
          />
        </a>
      </Link>

      <div
        className={`lg:flex  ${
          toggle ? 'flex header-position' : 'hidden'
        } hover-toggle-content  flex-col lg:flex-row items-start lg:items-center pl-0 lg:pl-136`}>
        <div className="subnav">
          <Link href="/[category]" as="/earphones">
            <a
              className={` flex lg:flex-row  items-center header-link px-4 text-right leading-8 text-white md:${
                invert && !scroll ? 'text-black' : 'text-white'
              }`}>
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
                className={`header-link px-8 lg:px-4 block text-left leading-8 text-white md:${
                  invert && !scroll ? 'text-black' : 'text-white'
                }`}>
                Neckbands
              </a>
            </Link>
            <Link href="/collections/[tag]" as="/collections/headphones">
              <a
                className={`header-link px-8 lg:px-4 block text-left leading-8 text-white md:${
                  invert && !scroll ? 'text-black' : 'text-white'
                }`}>
                Headphones
              </a>
            </Link>
            <Link href="/collections/[tag]" as="/collections/headsets-single-ear">
              <a
                className={`header-link px-8 lg:px-4 block text-left leading-8 text-white md:${
                  invert && !scroll ? 'text-black' : 'text-white'
                }`}>
                Headsets - Single Ear
              </a>
            </Link>
            <Link href="/collections/[tag]" as="/collections/wired-earphones">
              <a
                className={`header-link px-8 lg:px-4 block text-left leading-8 text-white md:${
                  invert && !scroll ? 'text-black' : 'text-white'
                }`}>
                Wired earphones
              </a>
            </Link>
          </div>
        </div>
        <Link href="/collections/[tag]" as="/collections/speakers">
          <a
            className={`header-link px-4 text-right leading-8 text-white md:${
              invert && !scroll ? 'text-black' : 'text-white'
            }`}>
            Speakers
          </a>
        </Link>
        <Link href="/support">
          <a
            className={` header-link px-4 text-right leading-8 text-white md:${
              invert && !scroll ? 'text-black' : 'text-white'
            }`}>
            Support
          </a>
        </Link>
        <Link href="/incubate-with-alpino">
          <a
            className={`header-link px-4 text-right leading-8 text-white md:${
              invert && !scroll ? 'text-black' : 'text-white'
            }`}>
            Incubate with Alpino
          </a>
        </Link>
        <Link href="/careers">
          <a
            className={`header-link px-4 text-right leading-8 text-white md:${
              invert && !scroll ? 'text-black' : 'text-white'
            }`}>
            Careers
          </a>
        </Link>
      </div>
      <div className="flex flex-row flex-shrink-0">
        <Link href="/user">
          <a
            className={`header-link px-2  lg:px-4 inline-block ${black && !scroll && 'filter-invert-temp'} ${
              invert && !scroll && 'filter-invert'
            }`}>
            <img src="/user.svg" />
          </a>
        </Link>
        <button className="border-none outline-none">
          <a
            onClick={openModal}
            className={`header-link px-2  lg:px-4 inline-block ${black && !scroll && 'filter-invert-temp'} ${
              invert && !scroll && 'filter-invert'
            }`}>
            <img src="/cart.svg" />
          </a>
        </button>
      </div>
    </div>
  );
}

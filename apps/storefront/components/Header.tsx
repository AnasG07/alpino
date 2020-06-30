import classNames from 'classnames';
import React, { useState } from 'react';
import Link from 'next/link';
import Cart from './cart';

interface HeaderProps {
  invert?: boolean;
  transparent?: boolean;
  opacity?: boolean;
  black?: boolean;
}

const items = [
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
  {
    image: '/cart/cart3.png',
    title: 'Thar Blaze',
    cost: '₹ 1999',
    color: 'Black',
    quantity: '1',
  },
];

export default function Header({ invert, transparent, opacity, black }: HeaderProps) {
  const [cartVisible, updateCartVisible] = useState(false);
  const [subnav, updateSubnav] = useState(false);
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
    <>
      <div
        className={classNames(
          `flex flex-row ${
            subnav ? 'pb-302 p-30px' : toggle ? 'pb-174 p-30px' : 'pb-30px p-30px'
          } justify-between lg:p-30px  z-10 items-center fixed w-full top-0`,
          {
            'bg-black': scroll || (!invert && !transparent),
            'bg-transparent': !scroll && !opacity && (invert || transparent),
            'bg-header-opacity': !scroll && opacity,
          },
        )}>
        <div
          className={classNames('lg:hidden  hover-toggle', {
            'filter-invert': invert && !scroll,
            'filter-invert-temp': black && !scroll,
          })}>
          <button className="border-none" onClick={() => updateToggle(!toggle)}>
            <img src="/collapse.svg" alt="none" />
          </button>
        </div>
        <Link href="/">
          <a className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Alipno Logo"
              className={classNames('logo pl-12 lg:pl-0', {
                'filter-invert': invert && !scroll,
                'filter-invert-temp': black && !scroll,
              })}
            />
          </a>
        </Link>

        <div
          className={classNames(
            ' over-toggle-content flex-col items-start pl-0 lg:flex lg:pl-136 lg:flex-row lg:items-center lg:ml-auto',
            { 'bg-black': scroll, hidden: !toggle, 'flex header-position': toggle },
          )}>
          <div className="subnav">
            <Link href="/[category]" as="/earphones">
              <button
                className="border-none"
                onMouseOver={() => updateSubnav(true)}
                onMouseOut={() => updateSubnav(false)}>
                <a
                  className={` flex lg:flex-row  items-center header-link px-8 lg:px-4 text-right leading-8 ${
                    black && !scroll ? 'text-black' : 'text-white'
                  } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
                  Earphones
                  <img
                    src="/down-arrow.png"
                    alt="arrow"
                    className={`inline-block h-3 px-2 ${invert && !scroll && 'filter-invert'} ${
                      black && !scroll && 'filter-invert-temp'
                    }`}
                  />
                </a>
              </button>
            </Link>

            <div className={`${subnav ? 'block' : 'hidden'} subnav-content`}>
              <Link href="/collections/[tag]" as="/collections/neckbands">
                <a
                  className={`header-link px-12 lg:px-4 block text-left leading-8 ${
                    black && !scroll ? 'text-black' : 'text-white'
                  } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
                  Neckbands
                </a>
              </Link>
              <Link href="/collections/[tag]" as="/collections/headphones">
                <a
                  className={`header-link px-12 lg:px-4 block text-left leading-8 ${
                    black && !scroll ? 'text-black' : 'text-white'
                  } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
                  Headphones
                </a>
              </Link>
              <Link href="/collections/[tag]" as="/collections/headsets-single-ear">
                <a
                  className={`header-link px-12 lg:px-4 block text-left leading-8 ${
                    black && !scroll ? 'text-black' : 'text-white'
                  } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
                  Headsets - Single Ear
                </a>
              </Link>
              <Link href="/collections/[tag]" as="/collections/wired-earphones">
                <a
                  className={`header-link px-12 lg:px-4 block text-left leading-8 ${
                    black && !scroll ? 'text-black' : 'text-white'
                  } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
                  Wired earphones
                </a>
              </Link>
            </div>
          </div>
          <Link href="/collections/[tag]" as="/collections/speakers">
            <a
              className={`header-link px-8 lg:px-4 text-right leading-8 ${
                black && !scroll ? 'text-black' : 'text-white'
              } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Speakers
            </a>
          </Link>
          <Link href="/support">
            <a
              className={` header-link px-8 lg:px-4 text-right leading-8 ${
                black && !scroll ? 'text-black' : 'text-white'
              } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Support
            </a>
          </Link>
          <Link href="/incubate-with-alpino">
            <a
              className={`header-link px-8 lg:px-4 text-right leading-8 ${
                black && !scroll ? 'text-black' : 'text-white'
              } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
              Incubate with Alpino
            </a>
          </Link>
          <Link href="/careers">
            <a
              className={`header-link px-8 lg:px-4 text-right leading-8 ${
                black && !scroll ? 'text-black' : 'text-white'
              } md:${invert && !scroll ? 'text-black' : 'text-white'}`}>
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
              onClick={() => updateCartVisible(!cartVisible)}
              className={`header-link pl-2 pr-0 lg:px-4 inline-block ${black && !scroll && 'filter-invert-temp'} ${
                invert && !scroll && 'filter-invert'
              }`}>
              <img src="/cart.svg" />
            </a>
          </button>
        </div>
      </div>
      <Cart items={items} modalIsOpen={cartVisible} closeModal={() => updateCartVisible(false)} />
    </>
  );
}

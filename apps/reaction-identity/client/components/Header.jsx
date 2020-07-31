import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { urlAlpino } from './static.js';

const Header = ({
  invert,
  transparent,
  opacity,
  black,
  sticky,
  stickyHeight,
  name,
  cartOpen,
  cost,
  loading,
  onBuyNow,
}) => {
  const [cartVisible, updateCartVisible] = useState(false);
  const [subnav, updateSubnav] = useState(false);
  const [scroll, updateScroll] = useState(false);
  const [toggle, updateToggle] = useState(false);
  const [stickyToggle, updateStickyToggle] = useState(false);

  if (process.browser) {
    useEffect(() => {
      const scrollFunction = () => {
        if (document.body.offsetWidth > 1024 && scrollY < 90) {
          updateScroll(false);
        } else updateScroll(true);
      };
      const stickyFunction = () => {
        if (scrollY < stickyHeight) {
          updateStickyToggle(false);
        } else updateStickyToggle(true);
      };
      window.addEventListener('scroll', stickyFunction);
      window.addEventListener('scroll', scrollFunction);
    }, []);
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
  useEffect(() => {
    if (cartOpen) {
      updateCartVisible(true);
    }
  }, [cartOpen]);

  return (
    <>
      <div>
        <div
          className={classNames(
            ` max-w-1400 flex flex-row  justify-between p-30px  z-20 items-center fixed  w-full top-0`,
            {
              'bg-black': toggle || scroll || (!invert && !transparent),
              'bg-transparent': !scroll && !opacity && (invert || transparent),
              'bg-header-opacity': !scroll && opacity,
            },
          )}>
          <div
            className={classNames('lg:hidden  hover-toggle', {
              'filter-invert': invert && !scroll && !toggle,
              'filter-invert-temp': black && !scroll,
            })}>
            <button className="border-none outline-none" onClick={() => updateToggle(!toggle)}>
              <img src="/collapse.svg" alt="none" />
            </button>
          </div>

          <a href={urlAlpino} className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Alipno Logo"
              className={classNames('logo pl-12 lg:pl-0', {
                'filter-invert': invert && !scroll && !toggle,
                'filter-invert-temp': black && !scroll,
              })}
            />
          </a>

          <div
            className={classNames(
              ' flex-col items-start pl-0 lg:flex lg:pl-136 lg:flex-row lg:items-center lg:ml-auto',
              {
                'bg-black': scroll,
                hidden: !toggle,
                'flex header-position header-background': toggle,
              },
            )}>
            <div className="subnav" onMouseOver={() => updateSubnav(true)} onMouseOut={() => updateSubnav(false)}>
              <a
                href={`${urlAlpino}/earphones`}
                className={`flex lg:flex-row  items-center header-link px-8 lg:px-4 text-right leading-8 ${
                  toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
                } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
                Earphones
                <img
                  src="/down-arrow.png"
                  alt="arrow"
                  className={`inline-block h-3 px-2 ${!toggle && invert && !scroll && 'filter-invert'} ${
                    black && !scroll && 'filter-invert-temp'
                  }`}
                />
              </a>

              <div className={`${subnav ? 'block' : 'hidden'} subnav-content`}>
                <a
                  href={`${urlAlpino}/collections/neckbands`}
                  className={`lg:w-120 header-link px-12 lg:px-4 block text-left leading-8 ${
                    toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
                  } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
                  Neckbands
                </a>
                <a
                  href={`${urlAlpino}/collections/headphones`}
                  className={`lg:w-130 header-link px-12 lg:px-4 block text-left leading-8 ${
                    toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
                  } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
                  Headphones
                </a>

                <a
                  href={`${urlAlpino}/collections/headsets-single-ear`}
                  className={`header-link px-12 lg:px-4 block text-left leading-8 ${
                    toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
                  } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
                  Headsets - Single Ear
                </a>

                <a
                  href={`${urlAlpino}/collections/wired-earphones`}
                  className={`lg:w-150 header-link px-12 lg:px-4 block text-left leading-8 ${
                    toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
                  } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
                  Wired earphones
                </a>
              </div>
            </div>

            <a
              href={`${urlAlpino}/collections/speakers`}
              className={`header-link px-8 lg:px-4 text-right leading-8 ${
                toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
              } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
              Speakers
            </a>

            <a
              href={`${urlAlpino}/support`}
              className={` header-link px-8 lg:px-4 text-right leading-8 ${
                toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
              } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
              Support
            </a>
            <a
              href={`${urlAlpino}/incubate-with-alpino`}
              className={`header-link px-8 lg:px-4 text-right leading-8 ${
                toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
              } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
              Incubate with Alpino
            </a>
            <a
              href={`${urlAlpino}/careers`}
              className={`hover-line header-link px-8 lg:px-4 text-right leading-8 ${
                toggle ? 'text-white' : black && !scroll ? 'text-black' : 'text-white'
              } lg:${invert && !scroll ? 'text-black hover-line-black' : 'text-white hover-line-white'}`}>
              Careers
            </a>
          </div>
          <div className="flex flex-row flex-shrink-0">
            <a
              href={urlAlpino}
              className={`header-link px-2  lg:px-4 inline-block ${black && !scroll && 'filter-invert-temp'} ${
                !toggle && invert && !scroll && 'filter-invert'
              }`}>
              <img src="/user.svg" />
            </a>

            {/*  <button className="border-none outline-none">
              <a
                onClick={() => updateCartVisible(!cartVisible)}
                className={`header-link pl-2 pr-0 lg:pl-4 inline-block ${black && !scroll && 'filter-invert-temp'} ${
                  !toggle && invert && !scroll && 'filter-invert'
                }`}>
                <img src="/cart.svg" />
              </a>
            </button> */}
          </div>
        </div>
        {/*  <Cart items={items} modalIsOpen={cartVisible} closeModal={() => updateCartVisible(false)} cartOpen={cartOpen} /> */}
        {sticky && stickyToggle && (
          <div className=" max-w-1400 fixed w-full z-10 p-30px top-65 flex flex-row bg-black justify-between items-center">
            <div className="flex flex-col pr-8 md:pr-0">
              <p className="font-medium leading-5 md:leading-7 text-sm md:text-3xl text-white">{name}</p>
              <p className="leading-5 md:leading-7 text-xs md:text-base text-white">MRP Rs. {cost}</p>
            </div>
            <button
              disabled={loading}
              onClick={onBuyNow}
              className="mr-4 rounded-full py-3 px-8 md:px-10 outline-none border-2 bg-white flex justify-center text-black hover-transparent">
              Buy now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

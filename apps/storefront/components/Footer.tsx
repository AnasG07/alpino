import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="px-12 md:px-20 lg:px-28 pb-8 bg-black">
      <hr className="border-gray-900 border" />
      <div className="flex flex-col lg:flex-row pt-23">
        <div className="flex flex-row flex-grow-7 flex-wrap">
          <div className="flex-grow w-2/4 md:w-2/6">
            <div className="pb-2 md:pb-8">
              <Link href="/support">
                <a className="footer-link leading-8">Support</a>
              </Link>
            </div>
            <div>
              <Link href="/privacy-policy">
                <a className="pt-8 footer-font leading-6"> Privacy Policy </a>
              </Link>
            </div>
            {/*<div>*/}
            {/*  <Link href="/">*/}
            {/*    <a className="footer-font leading-6"> Terms and Condition </a>*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div>
              <Link href="/warranty">
                <a className="footer-font leading-6"> Warranty </a>
              </Link>
            </div>
            <div>
              <Link href="/refund">
                <a className="footer-font leading-6"> Refund </a>
              </Link>
            </div>
            <div>
              <Link href="/support">
                <a className="footer-font leading-6"> Support </a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <a className="footer-font leading-6"> Contact us</a>
              </Link>
            </div>
          </div>
          <div className="flex-grow w-2/6 md:w-2/6">
            <div className="pb-2 md:pb-8">
              <Link href="/">
                <a className="footer-link leading-8 leading-6">About</a>
              </Link>
            </div>
            <div>
              <Link href="/our-story">
                <a className="pt-8 footer-font leading-6">Our Story</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className="footer-font leading-6"> Work with us</a>
              </Link>
            </div>
            <div>
              <Link href="/become-distributor">
                <a className="footer-font leading-6">Become a distributor </a>
              </Link>
            </div>
            <div>
              <Link href="/corporate-enquiries">
                <a className="footer-font leading-6">Corporate enquiries </a>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <a className="footer-font leading-6"> Blogs</a>
              </Link>
            </div>
          </div>
          <div className="flex-grow w-2/4 md:w-2/6 mt-12 md:mt-0">
            <div className="pb-2 md:pb-8">
              <span className="footer-link leading-8">Explore</span>
            </div>
            <div>
              <Link href="/all-products">
                <a className="pt-8 footer-font leading-6">All Products</a>
              </Link>
            </div>
            <div>
              <Link href="/collections/[tag]" as="/collections/speakers">
                <a className="footer-font leading-6">Speakers </a>
              </Link>
            </div>
            <div>
              <Link href="/collections/[tag]" as="/collections/headphones">
                <a className="footer-font leading-6"> Headphones</a>
              </Link>
            </div>
            <div>
              <Link href="/collections/[tag]" as="/collections/power-banks">
                <a className="footer-font leading-6"> Power Banks</a>
              </Link>
            </div>
            <div>
              <Link href="/collections/[tag]" as="/collections/earphones">
                <a className="footer-font leading-6"> Earphones</a>
              </Link>
            </div>
            <div>
              <Link href="/collections/[tag]" as="/collections/neckbands">
                <a className="footer-font leading-6"> Neckbands</a>
              </Link>
            </div>
            <div>
              <Link href="/collections/[tag]" as="/collections/cables">
                <a className="footer-font leading-6"> Cables</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex-grow text-center lg:text-left pt-8 lg:pt-0">
            <div>
              <Link href="/">
                <a className="footer-link leading-8">Join our newsletter</a>
              </Link>
            </div>
            <h6 className="footer-font footer-text-color pt-2 lg:pt-8"> Even Trump can’t call this news fake</h6>
            <span className="row justify-center lg:justify-start pt-6">
              <input placeholder="Enter your email address" className="pl-4 input-footer-color input w-2/4 lg:w-full" />
              <button className="padding-notify-button">Join</button>
            </span>
            <div className="pt-10 lg:pt-16 flex lg:justify-start justify-center">
              <img src="/facebook.png" alt="facebook" className="px-3 height-17" />
              <img src="/instagram.png" alt="instagram" className="px-3 height-17" />
              <img src="/youtube.png" alt="youtube" className=" px-3 height-17" />
              <img src="/twitter.png" alt="twitter" className=" px-3 height-17" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

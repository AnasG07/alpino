import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="px-30 pb-8 bg-black">
      <div className="border-gray-900 border"></div>
      <div className="flex flex-row pt-23">
        <div className="flex-grow">
          <div className="pb-8">
            <Link href="/support">
              <a className="footer-link leading-8">Support</a>
            </Link>
          </div>
          <div>
            <Link href="/privacy-policy">
              <a className="pt-8 footer-font leading-6"> Privacy Policy </a>
            </Link>
          </div>
          <div>
            <Link href="/terms-and-condition">
              <a className="footer-font leading-6"> Terms and Condition </a>
            </Link>
          </div>
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
        <div className="flex-grow">
          <div className="pb-8">
            <Link href="/about">
              <a className="footer-link leading-8 leading-6">About</a>
            </Link>
          </div>
          <div>
            <Link href="/our-story">
              <a className="pt-8 footer-font leading-6">Our Story</a>
            </Link>
          </div>
          <div>
            <Link href="/work-with-us">
              <a className="footer-font leading-6"> Work with us</a>
            </Link>
          </div>
          <div>
            <Link href="/become-a-distributor">
              <a className="footer-font leading-6">Become a distributor </a>
            </Link>
          </div>
          <div>
            <Link href="/affiliate">
              <a className="footer-font leading-6">Affiliate </a>
            </Link>
          </div>
          <div>
            <Link href="/corporate-enquiries">
              <a className="footer-font leading-6">Corporate enquiries </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font leading-6">Press </a>
            </Link>
          </div>
          <div>
            <Link href="/blogs">
              <a className="footer-font leading-6"> Blogs</a>
            </Link>
          </div>
          <div>
            <Link href="/news">
              <a className="footer-font leading-6">News </a>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <div className="pb-8">
            <Link href="/explore">
              <a className="footer-link leading-8">Explore</a>
            </Link>
          </div>
          <div>
            <Link href="/product">
              <a className="pt-8 footer-font leading-6">All Products</a>
            </Link>
          </div>
          <div>
            <Link href="/speakers">
              <a className="footer-font leading-6">Speakers </a>
            </Link>
          </div>
          <div>
            <Link href="/headphones">
              <a className="footer-font leading-6"> Headphones</a>
            </Link>
          </div>
          <div>
            <Link href="/power-bank">
              <a className="footer-font leading-6"> Power Banks</a>
            </Link>
          </div>
          <div>
            <Link href="/earphones">
              <a className="footer-font leading-6"> Earphones</a>
            </Link>
          </div>
          <div>
            <Link href="/neckbands">
              <a className="footer-font leading-6"> Neckbands</a>
            </Link>
          </div>
          <div>
            <Link href="/cables">
              <a className="footer-font leading-6"> Cables</a>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <div>
            <Link href="/join-our-newsletter">
              <a className="footer-link leading-8">Join our newsletter</a>
            </Link>
          </div>
          <h6 className="footer-font footer-text-color pt-8"> Even Trump can’t call this news fake</h6>
          <span className="row justify-start pt-6">
            <input placeholder="Enter your email address" className="pl-4 input-footer-color input" />
            <button className="padding-notify-button">Join</button>
          </span>
          <div className="pt-16 flex ">
            <img src="/facebook.png" alt="facebook" className="px-3 height-17" />
            <img src="/instagram.png" alt="instagram" className="px-3 height-17" />
            <img src="/youtube.png" alt="youtube" className=" px-3 height-17" />
            <img src="/twitter.png" alt="twitter" className=" px-3 height-17" />
          </div>
        </div>
      </div>
    </div>
  );
}

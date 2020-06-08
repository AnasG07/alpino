import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div footer className="px-30 pt-64 pb-8 bg-black">
      <div className="border-gray-900 border"></div>
      <div className="flex flex-row pt-23">
        <div className="flex-grow">
          <div className="pb-8">
            <Link href="/">
              <a className="footer-link ">Support</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="pt-8 footer-font"> Privacy Policy </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Terms and Condition </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Warranty </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Refund </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Support </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Contact us</a>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <div className="pb-8">
            <Link href="/">
              <a className="footer-link ">About</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="pt-8 footer-font">Our Story</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Work with us</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font">Become a distributor </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font">Affiliate </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font">Corporate enquiries </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font">Press </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Blogs</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font">News </a>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <div className="pb-8">
            <Link href="/">
              <a className="footer-link">Explore</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="pt-8 footer-font">All Products</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font">Speakers </a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Headphones</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Power Banks</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Earphones</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Neckbands</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a className="footer-font"> Cables</a>
            </Link>
          </div>
        </div>
        <div className="flex-grow">
          <div>
            <Link href="/">
              <a className="footer-link">Join our newsletter</a>
            </Link>
          </div>
          <h6 className="footer-font footer-text-color pt-8"> Even Trump can’t call this news fake</h6>
          <span className="row justify-start pt-6">
            <input placeholder="Enter your email address" className="pl-4 input-footer-color" />
            <button className="padding-notify-button">Join</button>
          </span>
          <div className="pt-16 flex ">
            <img src="/facebook.png" alt="facebook" className=" px-1 height-17" />
            <img src="/instagram.png" alt="instagram" className="px-1 height-17" />
            <img src="/youtube.png" alt="youtube" className=" px-1 height-17" />
            <img src="/twitter.png" alt="twitter" className=" px-1 height-17" />
          </div>
        </div>
      </div>
    </div>
  );
}

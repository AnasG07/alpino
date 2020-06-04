import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div header className="flex flex-row justify-between padding-30 items-center bg-black ">
      <img src="/logo.svg" alt="Alipno Logo" className="logo" />
      <span className="flex items-center">
        <Link href="/">
          <a className="header-link px-4">Speakers</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">Headphones</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">Neckbands</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">Earphones</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">All Products</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4">More</a>
        </Link>
        <Link href="/">
          <a className="header-link px-4 inline-block">
            <img src="/user.svg" />
          </a>
        </Link>
        <Link href="/">
          <a className="header-link px-4 inline-block">
            <img src="/cart.svg" />
          </a>
        </Link>
      </span>
    </div>
  );
}

import React from 'react';
import '../styles/global.scss';
import './styles.css';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

import React from 'react';
import '../styles/global.scss';
import './styles.css';
import { Header, Footer } from '../components';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

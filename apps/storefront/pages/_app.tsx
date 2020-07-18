import React from 'react';
import { ContextProviders } from '../context/ContextProviders';
import 'react-multi-carousel/lib/styles.css';
//import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/global.scss';
import './styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </ContextProviders>
  );
}

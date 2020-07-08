import React from 'react';
import { ContextProviders } from '../context/ContextProviders';
import '../styles/global.scss';
import './styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ContextProviders pageProps={pageProps}>
      <Component {...pageProps} />
    </ContextProviders>
  );
}

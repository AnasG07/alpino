import React from 'react';
import '../styles/global.scss';
import './styles.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

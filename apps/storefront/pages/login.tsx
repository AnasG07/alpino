import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginContainer from '../components/login-container';

export default function Login() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <Header transparent />
        <LoginContainer />
      </main>
      <Footer />
    </div>
  );
}

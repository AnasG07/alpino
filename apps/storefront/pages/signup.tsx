import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginContainer from '../components/login-container';

export default function Signup() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-login-background">
        <Header transparent />
        <div className="flex flex-row w-full">
          <div className="w-full lg:w-2/4 pt-12 md:pt-16 lg:pt-149 px-8  md:px-16 pb-20">
            <LoginContainer type="signup" />
          </div>
          <div className="hidden lg:block lg:w-2/4">
            <img src="/signup1.jpeg" alt="signup" className="lg:min-h-1090" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

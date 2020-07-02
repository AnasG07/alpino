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
      <main className="bg-login-background">
        <Header transparent />
        <div className="flex flex-row w-full">
          <div className="w-full lg:w-2/4 pt-12 md:pt-16 lg:pt-149 px-8  md:px-16 pb-20">
            <LoginContainer type="login" />
          </div>
          <div className="hidden lg:block lg:w-2/4">
            <img src="/login.jpeg" alt="login" className="w-full height-978" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

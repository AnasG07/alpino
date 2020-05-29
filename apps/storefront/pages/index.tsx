import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen padding-30 bg-black ">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img src="/logo.svg" alt="Alipno Logo" className="logo" />
        <div className="background-image">
          <h1 className="padding-top-58">Coming Soon</h1>
          <p className="max-width-565 style-content padding-top-29 mx-auto">
            We know you’re moving to a better tomorrow. So we’ve decided to keep up with you. Bear with us as we build a
            new Alpino to meet our ever-growing family. To be the first to hear from us when our website is back, feel
            free to give us your E-mail id!
          </p>
          <h2 className="padding-top-86"> Tech-a-boo</h2>
          <div className="padding-top-29 text-align-center">
            <span className="row justify-center">
              <input placeholder="Enter your email address" className="pl-4" />
              <button className="padding-notify-button">Notify me</button>
            </span>
          </div>
          <p className="padding-top-27 margin-auto style-content max-width-686">
            In our bid to establish a more human connection with you, tell us a little more about yourself, and get the
            chance to win FREE ALPINO TRIP EXTRA earphones on your first order, and EXCLUSIVE COUPONS and DISCOUNTS if
            you’re amongst the first 1,000 people to subscribe no matter what the order value is.
          </p>
        </div>
        <div className="padding-top-214 padding-sides-90">
          <h1 className="text-align-left">Some of our Products</h1>
          <h3 className="padding-top-20">Best always deserves better</h3>
          <div className="row padding-top-66 justify-space-between">
            <span className="column padding-30 min-height-560">
              <img src="/rock-bluetooth.svg" alt="Rock bluetooth" />
              <h3 className="padding-top-29">
                Rock
                <br />
                Blutetooth Speaker
              </h3>
            </span>
            <span className="column card margin-left-60 padding-30 min-height-560">
              <img src="/thar-bluetooth.svg" alt="Thar bluetooth" />
              <h3 className="padding-top-29">
                Thar GT <br />
                Bluetooth Headphone
              </h3>
            </span>
            <span className="column margin-left-60 padding-30 min-height-560">
              <img src="/trip-flex.svg" alt="Trip Flex" />
              <h3 className="padding-top-29">
                Trip Flex
                <br /> Wireless Neckband
              </h3>
            </span>
          </div>
          <div className="row padding-top-66 justify-space-between">
            <span className="column padding-30 min-height-560">
              <img src="/flex-pro.svg" alt="Flex Pro" />
              <h3 className="padding-top-29">
                Flex Pro
                <br />
                Wireless Neckband
              </h3>
            </span>
            <span className="column card margin-left-60 padding-30 min-height-560">
              <img src="/power-flex.svg" alt="Power Flex" />
              <h3 className="padding-top-29">
                Power Flex
                <br />
                Wireless Neckband
              </h3>
            </span>
            <span className="column margin-left-60 padding-30 min-height-560">
              <img src="/town-square.svg" alt="Town Square" />
              <h3 className="padding-top-13">
                Town Square
                <br /> Blutetooth Speaker
              </h3>
            </span>
          </div>
        </div>
        <h4 className="padding-top-66 pb-5">Find us on</h4>
        <div className="padding-top-10 row  padding-bottom-150 justify-center">
          <img src="/facebook.png" alt="facebook" className="padding-sides-10 height-17" />
          <img src="/instagram.png" alt="instagram" className="padding-sides-10 height-17" />
          <img src="/youtube.png" alt="youtube" className="padding-sides-10 height-17" />
        </div>
      </main>
    </div>
  );
}

import React, { useState } from 'react';
import Head from 'next/head';

async function subscribe(email) {
  return fetch('/api/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const onSubscribe = async (e) => {
    e.preventDefault();

    setLoading(true);
    await subscribe(email);
    setSubscribed(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen padding-30 bg-black ">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="background-image">
          <h1 className="padding-top-58 text-center text-white font-medium text-5xl leading-12">Coming Soon</h1>
          <p className="max-width-565 style-content padding-top-29 mx-auto">
            We know you’re moving to a better tomorrow. So we’ve decided to keep up with you. Bear with us as we build a
            new Alpino to meet our ever-growing family. To be the first to hear from us when our website is back, feel
            free to give us your E-mail id!
          </p>
          <h2 className="padding-top-86 leading-tight font-semibold text-center text-xl text-white font-normal">
            {' '}
            Tech-a-boo
          </h2>
          <div className="padding-top-29 text-align-center">
            <span className="row justify-center">
              <input
                placeholder="Enter your email address"
                className="pl-4"
                value={email}
                disabled={loading || subscribed}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                style={loading || subscribed ? { cursor: 'default' } : {}}
                className="padding-notify-button"
                onClick={onSubscribe}
                disabled={loading || subscribed}>
                {loading ? 'Subscribing' : subscribed ? 'Subscribed' : 'Notify me'}
              </button>
            </span>
          </div>
          <p className="padding-top-27 margin-auto style-content max-width-686">
            In our bid to establish a more human connection with you, tell us a little more about yourself, and get the
            chance to win FREE ALPINO TRIP EXTRA earphones on your first order, and EXCLUSIVE COUPONS and DISCOUNTS if
            you’re amongst the first 1,000 people to subscribe no matter what the order value is.
          </p>
        </div>
        <div className="px-23 padding-top-214">
          <h1 className="text-center lg:text-left text-left text-white font-medium text-5xl leading-12">
            Some of our Products
          </h1>
          <h3 className="text-center lg:text-left padding-top-20 text-xl text-white font-normal leading-tight">
            Best always deserves better
          </h3>
          <div className="flex flex-col lg:flex-row padding-top-66 justify-space-between items-center">
            <span className="column padding-30 min-height-560 mx-4 my-5 lg:my-0 max-width-23">
              <img src="/rock-bluetooth.svg" alt="Rock bluetooth" />
              <h3 className="padding-top-29 text-center lg:text-left text-xl text-white font-normal leading-tight">
                Rock
                <br />
                Blutetooth Speaker
              </h3>
            </span>
            <span className="column card max-width-23 padding-30 min-height-560 bg-grey-dark rounded-large mx-4 my-5 lg:my-0">
              <img src="/thar-bluetooth.svg" alt="Thar bluetooth" />
              <h3 className="padding-top-29 text-center lg:text-left text-xl text-white font-normal leading-tight">
                Thar GT <br />
                Bluetooth Headphone
              </h3>
            </span>
            <span className="column max-width-23 padding-30 min-height-560 mx-4 my-5 lg:my-0">
              <img src="/trip-flex.svg" alt="Trip Flex" />
              <h3 className="padding-top-29 text-center lg:text-left text-xl text-white font-normal leading-tight">
                Trip Flex
                <br /> Wireless Neckband
              </h3>
            </span>
          </div>
          <div className="flex flex-col lg:flex-row padding-top-66 justify-space-between items-center">
            <span className="column max-width-23 padding-30 min-height-560 mx-4 my-5 lg:my-0">
              <img src="/flex-pro.svg" alt="Flex Psro" />
              <h3 className="padding-top-29 text-center lg:text-left text-xl text-white font-normal leading-tight">
                Flex Pro
                <br />
                Wireless Neckband
              </h3>
            </span>
            <span className="column card max-width-23  padding-30 min-height-560 bg-grey-dark rounded-large mx-4 my-5 lg:my-0">
              <img src="/power-flex.svg" alt="Power Flex" />
              <h3 className="padding-top-29 text-center lg:text-left text-xl text-white font-normal leading-tight">
                Power Flex
                <br />
                Wireless Neckband
              </h3>
            </span>
            <span className="column   max-width-23 padding-30 min-height-560 mx-4 my-5 lg:my-0">
              <img src="/town-square.svg" alt="Town Square" />
              <h3 className="padding-top-13 text-center lg:text-left text-xl text-white font-normal leading-tight">
                Town Square
                <br /> Blutetooth Speaker
              </h3>
            </span>
          </div>
        </div>
        <h4 className="padding-top-66 pb-5 text-center text-white font-medium text-5xl leading-12">Find us on</h4>
        <div className="padding-top-10 row  padding-bottom-150 justify-center">
          <img src="/facebook.png" alt="facebook" className="padding-sides-10 height-17" />
          <img src="/instagram.png" alt="instagram" className="padding-sides-10 height-17" />
          <img src="/youtube.png" alt="youtube" className="padding-sides-10 height-17" />
        </div>
      </main>
    </div>
  );
}

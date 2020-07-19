import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';
import { set } from 'lodash';
import submit from '../staticUtils/formSubmit.js';

export default function IncubateALpino() {
  const [incubate, updateIncubate] = useState({ name: '', email: '', college: '', problemSolving: '', bringTable: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputHandler = (value, name) => {
    const newData = { ...incubate };
    set(newData, name, value);
    updateIncubate(newData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await submit(incubate, 'Incubate');
    setSubmitted(true);
    setLoading(false);
  };
  console.log(incubate);
  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black pb-16">
        <div className={classNames(styles['background-image'], 'bg-center min-h-25 md:min-h-60')}>
          <Header transparent />
          <div className="flex px-8 md:px-31 py-100 justify-end items-center">
            <div>
              <h1 className={styles['text-heading']}>Incubate</h1>
              <h3 className="pt-5 h3 text-right">WITH ALPINO</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row bg-black">
          <div className="bg-black  w-full lg:w-2/4 px-6 pb-10 py-20 md:p-31 flex flex-col  justify-between">
            <h1 className="leading-loose md:leading-12 text-white font-medium text-2xl md:text-5xl">
              Incubating Ideas
            </h1>
            <p className="text-base md:text-lg text-white-light font-normal leading-tight pt-10 md:pt-18.75">
              At Alpino, we recognize that ideas represent the gap between idle and ideal. At the same time, we also
              recognize that without the right platform and support, ideas may never be realized
            </p>
          </div>
          <img src="/comp_optimized.png" alt="comp" className="w-full lg:w-2/4 object-contain" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <img src="/compo_optimized.png" alt="headphone" className=" w-full lg:w-2/4 object-contain" />
          <div className="bg-black  w-full lg:w-2/4">
            <div className="px-6 pb-10 pt-20 md:p-31">
              <h1 className="leading-loose md:leading-12 text-white font-medium text-2xl md:text-5xl">
                Pioneers of the Nation
              </h1>
              <div className="flex flex-col justify-between min-height-38 pt-10 md:pt-16">
                <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30">
                  As a leader in consumer electronics, that was once an idea too, Alpino offers the opportunity to
                  students pursuing any level of education, to send in their ideas for a unique and new product that is
                  in tandem with our goals and resonates with our distribution network across India.
                </p>
                <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30 pt-4 md:pt-0">
                  As a trailblazer in innovation, we launch at least 4 SKUs every 25 days. To further accelerate our
                  internal innovation, we aim to provide mentorship and launch new products from select ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="bg-black md:bg-grey-medium w-full flex flex-row justify-center items-center md:min-h-30 py-20 px-8 md:py-0 md:px-0">
            <p className="max-w-30 text-content text-center">
              The first edition of our incubation process happened in collaboration with Yuva, The Entrepreneurship Cell
              of Shaheed Sukhdev College of Business Studies and the glimpse of the same is available here.
            </p>
          </div>
        </div>
        <img src="incubate-class.jpg" className="md:min-h-30 object-cover" />
        <div className="flex flex-row">
          <img className="max-width-50 object-cover" src="incubate-work.jpg" alt="work" />
          <img className="max-width-25 object-cover" src="incubate-laptop.jpg" alt="work" />
          <img className="max-width-25 object-cover" src="incubate-laptoptwo.jpg" alt="laptop" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <img src="/incubate-people.jpg" alt="people" className="lg:min-h-30 w-full lg:w-2/4 mt-20 lg:mt-0" />
          <div className="bg-black w-full lg:w-2/4">
            <div className="px-6 py-10 md:p-31">
              <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30">
                “The Alpino Ideation Challenge organized by Yuva, Shaheed Sukhdev College of Business Studies and
                sponsored by Alpino Tech provided us just the right opportunity to showcase our talent.
              </p>
              <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30 pt-4 md:pt-8">
                The challenge which spread over a month, was conducted in two rounds wherein the first round entailed
                the submission of our idea and in the second round, the top 14 teams from across India had to give the
                final presentation. In between these rounds, we were given professional mentorship to fine tune our
                idea. The impressive list of judges for the final round included the Executive Board of Alpino Tech.
              </p>
              <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30 pt-4 md:pt-8">
                For us, it was not just an Ideation Challenge, but also an opportunity to put the learnings from our MBA
                in practice. We also commend the Yuva team for the smooth process and appreciate the agility and
                genuinity of Alpino Tech as we got the award and the prize money within a month.
              </p>
              <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30 pt-4 md:pt-8">
                In the end, we would like to thank Alpino Tech for giving us the chance to implement that idea and make
                it a reality.”
              </p>
              <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30 text-left pt-8 md:pt-24">
                {' '}
                Team X-Factor
              </p>
              <p className="text-base md:text-lg text-white-light font-normal leading-tight lg:max-w-30 text-left pt-2 pb-4 md:pb-0">
                {' '}
                NMIMS Mumbai
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row bg-black">
          <div className="bg-black w-full lg:w-2/4">
            <div className="px-6 py-10 md:p-31  flex flex-col lg:min-h-40 justify-between">
              <p className="text-base md:text-lg text-white-light font-normal leading-tight">
                <span className="font-bold"> Alpino Ideation Challenge 2020 </span> was our first step in leveraging our
                community and it made us realise how much we’re missing out on the skills and resources you have to
                offer! We’re already in the process of creating a line of products with the winners of AIC 2020, and we
                want to keep the ball rolling. Want to know more about their experience, hear it straight from the
                winners of AIC 2020, Team X-Factor
              </p>
              <p className="text-base md:text-lg text-white-light font-normal mt-8 lg:mt-0 leading-tight">
                Our objective this time around is to keep the incubation process as an ongoing activity undertaken by us
                to not just make use of students’ creativity, but also to stimulate novelty in our thinking and
                products.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <img src="/compo1_optimized.png" alt="comfinal" className="w-full  object-contain" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row bg-maximum-red">
          <div className="lg:min-h-60 w-full lg:w-2/4 px-6 py-10 md:p-31 flex flex-col lg:min-h-60 justify-between">
            <h1 className="leading-loose md:leading-12 text-black font-medium text-2xl md:text-5xl">
              Calling all Product Designers{' '}
            </h1>
            <p className="text-sm md:text-lg text-black font-normal leading-tight pt-8 lg:pt-0">
              This is your chance to send in your ideas for new products and new product designs that are in-line with
              our existing products, and if we like those ideas, you get a chance to earn a portion of the commercial
              proceeds from their sale, along with the chance to make your ideas come to life!
            </p>
          </div>
          <div className={classNames('lg:min-h-60 w-full lg:w-2/4', styles['p-15'])}>
            <div className={classNames(styles['p-15'], 'form-card')}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" />
                  <p className={classNames(styles['text-2xl-semibold'], 'text-content pl-2 font-bold-imp')}>Incubate</p>
                </div>
                <p className="text-content font-semi-imp"> Application Form</p>
              </div>
              <form className={styles['pt-35']} onSubmit={onSubmit}>
                <div>
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'name')}
                    required
                    placeholder="Name"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'email')}
                    required
                    type="email"
                    placeholder="Email"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'college')}
                    required
                    placeholder="College / Organization"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20">
                  <input
                    required
                    onChange={(e) => inputHandler(e.target.value, 'problemSolving')}
                    placeholder="What problem are you passionate about solving?"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    onChange={(e) => inputHandler(e.target.value, 'bringTable')}
                    required
                    placeholder="What would you bring to the table?"
                    className={classNames(styles['input-styles'], 'text-content')}
                  />
                </div>
                <div className="pt-30">
                  <button
                    disabled={loading || submitted}
                    className="leading-5 rounded-full text-sm md:text-base py-3 px-8 outline-none  bg-white text-black  max-w-8 w-full flex justify-center text-right hover-transparent border-2 border-white border-solid">
                    {loading ? 'Submitting' : submitted ? 'Submitted' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

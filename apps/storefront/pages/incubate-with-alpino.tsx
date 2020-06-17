import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function IncubateALpino() {
  return (
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black pb-16">
        <div className={classNames(styles['background-image'], 'min-height-60')}>
          <Header />
          <div className="flex px-30 py-100 justify-end items-center">
            <div>
              <h1 className={styles['text-heading']}>Incubate</h1>
              <h3 className="pt-5 h3">WITH ALPINO</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-black">
          <div className="bg-black min-height-60 max-width-50">
            <div className="p-30 flex flex-col min-height-60 justify-between">
              <h1 className="h1">Incubating Ideas</h1>
              <p className="h3">
                At Alpino, we recognize that ideas represent the gap between idle and ideal. At the same time, we also
                recognize that without the right platform and support, ideas may never be realized
              </p>
            </div>
          </div>
          <div className="min-height-60 max-width-50 w-full bg-grey-darker"></div>
        </div>
        <div className="flex flex-row ">
          <div className={classNames(styles['background-headphone'], 'min-height-60 max-width-50 w-full')}></div>
          <div className="bg-black min-height-60 max-width-50">
            <div className="p-30">
              <h1 className="h1">Pioneers of the Nation</h1>
              <div className="flex flex-col justify-between min-height-38 pt-16">
                <p className="h3 max-w-30">
                  As a leader in consumer electronics, that was once an idea too, Alpino offers the opportunity to
                  students pursuing any level of education, to send in their ideas for a unique and new product that is
                  in tandem with our goals and resonates with our distribution network across India.
                </p>
                <p className="h3 max-w-30">
                  As a trailblazer in innovation, we launch at least 4 SKUs every 25 days. To further accelerate our
                  internal innovation, we aim to provide mentorship and launch new products from select ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="bg-grey-medium w-full flex flex-row justify-center items-center min-height-30">
            <p className="max-w-30 text-content">
              The first edition of our incubation process happened in collaboration with Yuva, The Entrepreneurship Cell
              of Shaheed Sukhdev College of Business Studies and the glimpse of the same is available here.
            </p>
          </div>
        </div>
        <img src="incubate-class.jpg" className="min-height-30" />
        <div className="flex flex-row">
          <img className="max-width-50 min-height-30" src="incubate-work.jpg" alt="work" />
          <img className="max-width-25 min-height-30" src="incubate-laptop.jpg" alt="work" />
          <img className="max-width-25 min-height-30" src="incubate-laptoptwo.jpg" alt="laptop" />
        </div>
        <div className="flex flex-row">
          <img src="/incubate-people.jpg" alt="people" className="min-height-30 max-width-50" />
          <div className="bg-black min-height-60 max-width-50">
            <div className="p-30">
              <p className="h3 max-w-30">
                “The Alpino Ideation Challenge organized by Yuva, Shaheed Sukhdev College of Business Studies and
                sponsored by Alpino Tech provided us just the right opportunity to showcase our talent.
              </p>
              <p className="h3 max-w-30 pt-8">
                The challenge which spread over a month, was conducted in two rounds wherein the first round entailed
                the submission of our idea and in the second round, the top 14 teams from across India had to give the
                final presentation. In between these rounds, we were given professional mentorship to fine tune our
                idea. The impressive list of judges for the final round included the Executive Board of Alpino Tech.
              </p>
              <p className="h3 max-w-30 pt-8">
                For us, it was not just an Ideation Challenge, but also an opportunity to put the learnings from our MBA
                in practice. We also commend the Yuva team for the smooth process and appreciate the agility and
                genuinity of Alpino Tech as we got the award and the prize money within a month.
              </p>
              <p className="h3 max-w-30 pt-8">
                In the end, we would like to thank Alpino Tech for giving us the chance to implement that idea and make
                it a reality.”
              </p>
              <p className="h3 max-w-30 text-left pt-24"> Team X-Factor</p>
              <p className="h3 max-w-30 text-left pt-2"> NMIMS Mumbai</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-black">
          <div className="bg-black min-height-60 max-width-50">
            <div className="p-30 flex flex-col min-height-60 justify-between">
              <p className="h3">
                <span className="font-bold"> Alpino Ideation Challenge 2020 </span> was our first step in leveraging our
                community and it made us realise how much we’re missing out on the skills and resources you have to
                offer! We’re already in the process of creating a line of products with the winners of AIC 2020, and we
                want to keep the ball rolling. Want to know more about their experience, hear it straight from the
                winners of AIC 2020, Team X-Factor
              </p>
              <p className="h3">
                Our objective this time around is to keep the incubation process as an ongoing activity undertaken by us
                to not just make use of students’ creativity, but also to stimulate novelty in our thinking and
                products.
              </p>
            </div>
          </div>
          <div className="min-height-60 max-width-50 w-full bg-grey-darker"></div>
        </div>
        <div className="flex flex-row bg-maximum-red">
          <div className="min-height-60 max-width-50">
            <div className="p-30 flex flex-col min-height-60 justify-between">
              <h1 className={styles['text-color-black-h1']}>Calling all Product Designers </h1>
              <p className={styles['text-color-black-h3']}>
                This is your chance to send in your ideas for new products and new product designs that are in-line with
                our existing products, and if we like those ideas, you get a chance to earn a portion of the commercial
                proceeds from their sale, along with the chance to make your ideas come to life!
              </p>
            </div>
          </div>
          <div className={classNames('min-height-60 max-width-50 w-full', styles['p-15'])}>
            <div className={classNames(styles['p-15'], 'form-card')}>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row">
                  <img src="/logo-only.svg" alt="logo" />
                  <p className={classNames(styles['text-2xl-semibold'], 'text-content pl-2')}>Incubate</p>
                </div>
                <p className="text-content"> Application Form</p>
              </div>
              <form className={styles['pt-35']}>
                <div>
                  <input
                    placeholder="Name"
                    className="text-content bg-transparent border-b pb-4 w-full border-grey-border"
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    placeholder="College / Organization"
                    className="text-content bg-transparent border-b pb-4 w-full border-grey-border "
                  />
                </div>
                <div className="pt-20">
                  <input
                    placeholder="What problem are you passionate about solving?"
                    className="text-content bg-transparent border-b pb-4 w-full border-grey-border "
                  />
                </div>
                <div className="pt-20 ">
                  <input
                    placeholder="What would you bring to the table?"
                    className="text-content bg-transparent border-b pb-4 w-full border-grey-border "
                  />
                </div>
                <div className="pt-30">
                  <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

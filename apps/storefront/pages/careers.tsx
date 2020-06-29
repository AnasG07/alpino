import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/job-card';
import styles from './static.module.css';
import classNames from 'classnames';

export async function getStaticProps() {
  return {
    props: {
      job: [
        {
          title: 'Communication Design',
          role:
            'A key strategic position for any organization, a Communication Designer would be required to help scale our brand to the next level. Working closely with our Design and Marketing teams, the Communication Designer would be regularly revamping our brand recognition programs and brand strategies.',
        },
        {
          title: 'Graphic Designer',
          role:
            'A key strategic position for any organization, a Communication Designer would be required to help scale our brand to the next level. Working closely with our Design and Marketing teams, the Communication Designer would be regularly revamping our brand recognition programs and brand strategies.',
        },
        {
          title: 'Developer',
          role:
            'A key strategic position for any organization, a Communication Designer would be required to help scale our brand to the next level. Working closely with our Design and Marketing teams, the Communication Designer would be regularly revamping our brand recognition programs and brand strategies.',
        },
      ],
    },
  };
}

export default function Careers({ job }) {
  const fileUpload = () => {
    document.getElementById('resume').click();
  };
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-careers'], 'min-h-30 md:min-h-60 ')}>
          <Header invert black />
          <div className={classNames('flex justify-center flex-col items-center pt-48')}>
            <h1 className="leading-loose md:leading-12 text-black text-2xl md:text-7xl">Work at Alpino</h1>
            <button className="mt-2 md:mt-8 button-transparent py-1 md:py-2 px-2 md:px-4 outline-none text-black border-black font-medium md:font-semibold">
              {' '}
              view openings
            </button>
          </div>
        </div>
        <div className="pb-8 md:pb-20 lg:pb-0 md:min-h-30 bg-grey-darker flex flex-col items-center lg:items-start lg:flex-row justify-between items-start pt-8 md:pt-20 lg:pt-40 px-4 md:px-16 lg:px-31">
          <p className="text-white-light leading-tight md:leading-8 text-base md:text-lg max-w-30 pr-0 lg:pr-4 xl:pr-0">
            As a self-funded fast-paced lifestyle brand with more than 300 SKUs, boasting of an offline distribution
            network in 10 states with a repeat order percentage of 65%, we’re constantly looking for individuals who can
            not just innovate to keep up with our 4 SKUs that are launched every 25 days, but who are driven to
            accelerate our growth.
          </p>
          <p className="text-white-light leading-tight md:leading-8 text-base md:text-lg max-w-30 pl-0 lg:pl-4 xl:pl-0 pt-6 lg:pt-0">
            With our focus on essentials, we make it our mission to invest not only in the goals of Alpino, but also
            each part of the Alpino family. Being in the rapid-speed tech industry, we need problem solvers who bring
            more than just knowledge to the table.{' '}
          </p>
        </div>
        <div className={classNames('bg-black min-height-60 px-0 lg:px-17')}>
          <p className="text-white-light leading-tight md:leading-8 text-sm md:text-lg text-center pt-24 w-full pb-16 font-semibold">
            Some of the portfolios, we’re looking at include
          </p>
          <div className={'flex flex-row flex-wrap justify-between pb-24'}>
            {job.map((i, index) => (
              <JobCard data={i} key={index} />
            ))}

            <span className="text-white leading-10 text-4xl p-15 w-full lg:w-2/4 w-full font-light">
              Even when we are not actively hiring, we’re constantly looking for Designers, Bloggers, Content Creators,
              Consultants, Engineers and so on, and we welcome connecting with freelancers.
            </span>
          </div>
        </div>
        <div className="bg-grey-darker p-6 md:p-20 lg:p-31 flex flex-col-reverse  lg:flex-row">
          <div className="flex flex-col justify-between pr-30 w-full lg:w-2/4">
            <h2 className="text-2xl lg:text-4xl leading-loose  lg:leading-10 text-white-light pt-4 lg:pt-0 font-light md:font-normal">
              “Every time I’ve come to a point in my career where I felt no longer challenged, Alpino has always given
              me the opportunity to try something new.”
            </h2>
            <p className=" text-base lg:text-lg leading-5 text-white-light pt-2 lg:pt-0 font-semibold">
              John Doe <br />
              Strategy Manager,
              <br /> Brand and Communications
            </p>
          </div>
          <img src="/johndoe.jpeg" alt="none" className="w-full lg:w-2/4 rounded-super lg:rounded-none" />
        </div>
        <div className="bg-black lg:min-h-60 p-8 md:p-16 lg:p-31 flex flex-col lg:flex-row lg:justify-between">
          <div className={classNames('flex flex-col justify-between pr-0 lg:pr-16 xl:pr-30')}>
            <p className="text-white-light leading-tight md:leading-8 text-sm md:text-lg max-w-30">
              Joining us would mean more than just joining a team. It would mean adding value to your life and the life
              of others. If our ideas resonate with you, and you’d like to join us in this journey of growth, introduce
              yourself and write to us at &nbsp;
              <span>
                <a href="https://connect@alpino.tech" className="underline">
                  connect@alpino.tech
                </a>
              </span>
            </p>
            <p className="text-white-light leading-tight md:leading-8 text-sm md:text-lg max-w-30  pb-8 pt-6 lg:pt-0 lg:pb-0">
              Alpino Tech is an inclusive employer, with a special emphasis on diversity and a drug-free workplace.
            </p>
          </div>
          <div className="rounded-large bg-grey-darker w-full lg:w-2/4 w-full">
            <div className="px-10 md:px-12 lg:px-16 py-10 md:py-16 lg:py-31">
              <div>
                <input placeholder="Name" className={classNames(styles['input-styles'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input placeholder="Email ID" className={classNames(styles['input-styles'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input placeholder="Phone Number" className={classNames(styles['input-styles'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input placeholder="Profile" className={classNames(styles['input-styles'], 'text-content')} />
              </div>
              <input className={classNames(styles['input-styles'], 'text-content hidden')} type="file" id="resume" />
              <div className="pt-8 border-b pb-2 w-full border-grey-border flex flex-row justify-between">
                <p className="text-content">Resume / Portfolio</p>
                <button className="button-transparent py-2 px-4 font-semi-imp" onClick={() => fileUpload()}>
                  Upload
                </button>
              </div>
              <div className="pt-10 md:pt-16 lg:pt-24 flex justify-start">
                <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center text-right font-semibold">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

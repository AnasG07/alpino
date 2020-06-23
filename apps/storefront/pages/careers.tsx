import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobCard from '../components/jobCard';
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
    <>
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-careers'], 'min-height-60 ')}>
          <Header invert />
          <div className={classNames('flex justify-center flex-col items-center', styles['min-height-55'])}>
            <h1 className="leading-12 text-black text-7xl">Work at Alpino</h1>
            <button className="mt-8 button-transparent py-2 px-4 outline-none text-black border-black">
              {' '}
              view openings
            </button>
          </div>
        </div>
        <div className="min-height-30 bg-grey-darker flex flex-row justify-between items-start pt-40 px-30">
          <p className="text-white-light leading-8 text-lg max-w-30">
            As a self-funded fast-paced lifestyle brand with more than 300 SKUs, boasting of an offline distribution
            network in 10 states with a repeat order percentage of 65%, we’re constantly looking for individuals who can
            not just innovate to keep up with our 4 SKUs that are launched every 25 days, but who are driven to
            accelerate our growth.
          </p>
          <p className="text-white-light leading-8 text-lg max-w-30">
            With our focus on essentials, we make it our mission to invest not only in the goals of Alpino, but also
            each part of the Alpino family. Being in the rapid-speed tech industry, we need problem solvers who bring
            more than just knowledge to the table.{' '}
          </p>
        </div>
        <div className={(classNames('bg-black min-height-60'), styles['px-15'])}>
          <p className="text-white-light leading-8 text-lg text-center pt-24 w-full pb-16">
            Some of the portfolios, we’re looking at include
          </p>
          <div className={'flex flex-row flex-wrap justify-between pb-24'}>
            {job.map((i, index) => (
              <JobCard data={i} className="max-width-50 w-full" key={index} />
            ))}

            <span className="text-white leading-10 text-4xl p-15 max-width-50 w-full">
              Even when we are not actively hiring, we’re constantly looking for Designers, Bloggers, Content Creators,
              Consultants, Engineers and so on, and we welcome connecting with freelancers.
            </span>
          </div>
        </div>
        <div className="min-height-60 bg-grey-darker p-30 flex flex-row">
          <div className="flex flex-col justify-between pr-30">
            <h2 className="text-4xl leading-10 text-white-light">
              “Every time I’ve come to a point in my career where I felt no longer challenged, Alpino has always given
              me the opportunity to try something new.”
            </h2>
            <p className="text-lg leading-5 text-white-light">
              As a self-funded fast-paced lifestyle brand with more than 300 SKUs, boasting of an offline distribution
              network in 10 states with a repeat order percentage of 65%, we’re constantly looking for individuals who
              can not just innovate to keep up with our 4 SKUs that are launched every 25 days, but who are driven to
              accelerate our growth
            </p>
          </div>
          <img src="/johndoe.jpeg" alt="none" className={classNames('max-width-50', styles['min-height-45'])} />
        </div>
        <div className="bg-black min-height-60 p-30 flex flex-row justify-between">
          <div className={classNames('flex flex-col justify-between pr-30', styles['min-height-45'])}>
            <p className="text-white-light leading-8 text-lg max-w-30">
              Joining us would mean more than just joining a team. It would mean adding value to your life and the life
              of others. If our ideas resonate with you, and you’d like to join us in this journey of growth, introduce
              yourself and write to us at &nbsp;
              <span>
                <a href="https://connect@alpino.tech" className="underline">
                  connect@alpino.tech
                </a>
              </span>
            </p>
            <p className="text-white-light leading-8 text-lg max-w-30">
              Alpino Tech is an inclusive employer, with a special emphasis on diversity and a drug-free workplace.
            </p>
          </div>
          <div className="rounded-large bg-grey-darker max-width-50 w-full">
            <div className={classNames(styles['px-15'], 'py-30')}>
              <div>
                <input placeholder="Name" className={classNames(styles['input-style'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input placeholder="Email ID" className={classNames(styles['input-style'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input placeholder="Phone Number" className={classNames(styles['input-style'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input placeholder="Profile" className={classNames(styles['input-style'], 'text-content')} />
              </div>
              <input className={classNames(styles['input-style'], 'text-content hidden')} type="file" id="resume" />
              <div className="pt-8 border-b pb-2 w-full border-grey-border flex flex-row justify-between">
                <p className="text-content">Resume / Portfolio</p>
                <button className="button-transparent py-2 px-4" onClick={() => fileUpload()}>
                  Upload
                </button>
              </div>
              <div className="pt-24 flex justify-start">
                <button className="leading-5 rounded-full text-base py-3 px-8 outline-none border-none bg-white text-black  max-w-8 w-full flex justify-center text-right">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

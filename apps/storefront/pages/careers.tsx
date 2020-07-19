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
          title: 'Communication Designer',
          role:
            'A key strategic position for any organization, a Communication Designer would be required to help scale our brand to the next level. Working closely with our Design and Marketing teams, the Communication Designer would be regularly revamping our brand recognition programs and brand strategies.',
        },
        {
          title: 'Product Designer',
          role:
            ' As a company that takes great pride in its refreshing designs, our Product Designer would not just be working on making our products reach a greater audience, but also work on analyzing how to make use of the best technologies.',
        },
        {
          title: 'Storytellers',
          role:
            'At the core of our company are stories – from the executive desk to the employee rushing to meet client deadlines. A story teller would not only be required to get these stories to our audience, but also create stories that engage them and make them a permanent part of our family.',
        },
        {
          title: 'Editors',
          role:
            'In a world that relies on data, we rely on knowledge. An Editor at Alpino would not just plan, revise and coordinate material that reached the world and beyond, but be the microphone that amplifies the right voices to represent our brand.',
        },
        {
          title: 'Sales and Business Development',
          role:
            'As a company reaching a new Pincode in __ days, we need salespeople and business developers who can not just engage potential clientele but also retain members of our ever-growing family.',
        },
        {
          title: 'E-commerce',
          role:
            'As a leader in consumer tech, our presence in the E-commerce space is vital to our business. We not only need to engage external sources of E-commerce but also work on establishing self-reliant sources of E-Business.',
        },
        {
          title: 'Strategists',
          role:
            'We’re known for our re-order percentage of 65%, but more than that, we’re also known for achieving our business targets. A strategist would be required to not just refine those targets but ensure we meet the bull’s eye every time.',
        },
        {
          title: 'Finance',
          role:
            ' As a key metric to our performance, Finance would mean more than just creating financial reports. Responding to financial enquiries, generating and analysing financial data and applying financial policies are some of the responsibilities that are par t of this job.',
        },
        {
          title: 'Human Resources',
          role:
            'As an organization that values its employees as members of its family, we go the extra mile in making sure our most important resource is valued and at its greatest efficiency.',
        },
        {
          title: 'Customer Services',
          role:
            'Our customers, distributors and other strategic partners are our priority at all times. We support our customers and retailers with expert knowledge, improving their experience with the products, our company and our brand.',
        },
        {
          title: 'Engineering and acoustics',
          role:
            'As a force that believes in using technology to stimulate people’s lives, it is important to ensure our audio experiences are world-class. Hence, we regularly look for new ideas and foster innovation in this regard.',
        },
        {
          title: 'IT , Digital and Software',
          role:
            'IT, Digital and Software encompasses analytics and IT management, but it also builds the foundation and structures that let us work with our core competencies. It simplifies and provides agility in our processes, that ensure we meet our customers’ and our own expectations. ',
        },
        {
          title: 'Logistics',
          role:
            'This profile includes many different professions responsible for operation, inspection, maintenance and logistics of our products and services. Being in the fast-paced tech industry, we are always on the look-out to make our value chain, and supply chain more efficient.',
        },
      ],
    },
  };
}

export default function Careers({ job }) {
  const fileUpload = () => {
    document.getElementById('resume').click();
  };
  const scrollOpening = (id) => {
    var element = document.querySelector(id);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };
  return (
    <div className="overflow-x-hidden bg-black">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-careers'], 'min-h-30 md:min-h-60 ')}>
          <Header invert black />
          <div className={classNames('flex justify-center flex-col items-center pt-350')}>
            <h1 className="leading-loose md:leading-12 text-black text-2xl md:text-7xl">Work at Alpino</h1>
            <button
              onClick={() => scrollOpening('#openings')}
              className="hover-opening mt-2 md:mt-12 button-transparent py-1 md:py-2 px-2 md:px-4 outline-none text-black border-black font-medium md:font-semibold">
              {' '}
              View Openings
            </button>
          </div>
        </div>
        <div className="pb-8 md:pb-20 lg:pb-0 md:min-h-30 bg-grey-darker flex flex-col items-center lg:items-start lg:flex-row justify-between items-start pt-8 md:pt-20 lg:pt-40 px-6 md:px-16 lg:px-31">
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
        <div className={classNames('bg-black min-height-60')} id="openings">
          <p className="text-white-light leading-tight md:leading-8 text-sm md:text-lg text-center pt-24 w-full pb-16 font-semibold">
            Some of the portfolios, we’re looking at include
          </p>
          <div className={'flex flex-row flex-wrap justify-between pb-24'}>
            {job.map((i, index) => (
              <JobCard data={i} key={index} scrollOpening={scrollOpening} />
            ))}

            <span className="text-white leading-10 text-4xl p-6 md:p-10 lg:p-15  w-full lg:w-2/4 w-full font-light">
              Even when we are not actively hiring, we’re constantly looking for Designers, Bloggers, Content Creators,
              Consultants, Engineers and so on, and we welcome connecting with freelancers.
            </span>
          </div>
        </div>
        <div className="bg-grey-darker p-6 md:p-20 lg:p-31 flex flex-col-reverse  lg:flex-row">
          <div className="flex flex-col justify-between pr-0 lg:pr-10 w-full lg:w-2/4">
            <h2 className="text-2xl lg:text-4xl leading-loose  lg:leading-10 text-white-light pt-4 lg:pt-0 font-light md:font-normal max-w-30">
              “Every time I’ve come to a point in my career where I felt no longer challenged, Alpino has always given
              me the opportunity to try something new.”
            </h2>
            <p className=" text-base lg:text-lg leading-5 text-white-light pt-2 lg:pt-0 font-semibold max-w-30">
              John Doe <br />
              Strategy Manager,
              <br /> Brand and Communications
            </p>
          </div>
          <img src="/johndoe.jpeg" alt="none" className="w-full lg:w-2/4 rounded-super lg:rounded-none" />
        </div>
        <div
          id="apply"
          className="bg-black lg:min-h-60 p-6 md:p-16 lg:p-31 flex flex-col lg:flex-row lg:justify-between">
          <div className={classNames('flex flex-col justify-between pr-0 lg:pr-16 xl:pr-30')}>
            <p className="text-white-light leading-tight md:leading-8 text-sm md:text-lg max-w-30">
              Joining us would mean more than just joining a team. It would mean adding value to your life and the life
              of others. If our ideas resonate with you, and you’d like to join us in this journey of growth, introduce
              yourself and write to us at &nbsp;
              <span>
                <a href="mailto:contact@alpino.tech" className="underline">
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
                <input required placeholder="Name" className={classNames(styles['input-styles'], 'text-content')} />
              </div>
              <div className="pt-8">
                <input
                  required
                  type="email"
                  placeholder="Email ID"
                  className={classNames(styles['input-styles'], 'text-content')}
                />
              </div>
              <div className="pt-8">
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className={classNames(styles['input-styles'], 'text-content')}
                />
              </div>
              <div className="pt-8">
                <input required placeholder="Profile" className={classNames(styles['input-styles'], 'text-content')} />
              </div>
              <input
                required
                className={classNames(styles['input-styles'], 'text-content hidden')}
                type="file"
                id="resume"
              />
              <div className="pt-8 border-b pb-2 w-full border-grey-border flex flex-row justify-between">
                <p className="text-lg text-white-light font-normal leading-normal">Resume / Portfolio</p>
                <button className="button-transparent py-2 px-4 font-semi-imp" onClick={() => fileUpload()}>
                  Upload
                </button>
              </div>
              <div className="pt-10 md:pt-16 lg:pt-24 flex justify-start">
                <button className="leading-5 rounded-full text-base py-3 px-8 outline-none  bg-white text-black  max-w-8 w-full flex justify-center text-right font-semibold hover-transparent border-2 border-white border-solid">
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

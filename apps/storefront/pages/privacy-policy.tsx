import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './static.module.css';
import classNames from 'classnames';

export default function PrivacyPolicy() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Alpino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">
        <div className={classNames(styles['background-privacy'], 'md:min-h-60')}>
          <Header invert />
          <div className="flex justify-center flex-col items-center pt-32 px-4 pb-12 md:pt-48 md:pb-0 md:px-0 ">
            <h1 className={classNames(styles['text-heading-black'], 'text-center', styles['font-size-14'])}>
              Privacy Policies
            </h1>
            <h3
              className={classNames(
                styles['text-color-warranty'],
                'pt-2 max-w-30 text-center leading-normal text-2xl font-medium',
              )}>
              Our products have sneaks, but we don’t peek
            </h3>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="bg-black  w-full lg:w-2/4 px-12 md:px-31  py-15 justify-between items-center flex flex-col">
            <p className="text-sm md:text-xl leading-7 md:leading-loose text-white">
              At Alpino, we respect your privacy and recognise the need to protect personally identifiable information
              (any information by which you can be identified, such as but not limited to name, address, and telephone
              number) you share with us. We would like to assure you that we follow the suitable standards when it comes
              to protecting your privacy on our websites.
            </p>
            <p className="text-sm md:text-xl leading-7 md:leading-loose text-white pt-4">
              In general, you can visit the Alpino website without telling us who you are or revealing any personal
              information about yourself. We track the Internet address of the domains from which people visit us and
              analyze this data for trends and statistics, but the individual user remains anonymous in all such cases.
            </p>
            <p className="text-sm md:text-xl leading-7 md:leading-loose text-white pt-4">
              At Alpino, we are committed to providing excellent customer service and outstanding value in our products
              and accessories, while respecting and protecting the privacy of our customers. To better serve you, we may
              collect and maintain certain information regarding your products and service preferences.
            </p>
          </div>
          <img src="./workplace.jpg" alt="workplace" className={classNames(' w-full lg:w-2/4 mb-0 md:mb-12')} />
        </div>
        <div className="min-height-31 bg-white flex flex-col md:px-0 px-4">
          <h1 className="pt-12 md:pt-31 text-center  font-semibold text-2xl md:text-4xl leading-loose md:leading-12 text-black">
            ALPINO PRIVACY GUARANTEE
          </h1>
          <p
            className={classNames(
              styles['max-width-1000'],
              'text-sm md:text-xl leading-7 md:leading-loose text-black text-center pt-6 md:pt-12 mx-auto',
            )}>
            Alpino promises that it will not sell or rent your personal information to third parties for their marketing
            purposes without your explicit consent. From time to time we may reveal general statistical information
            about our website and visitors, such as number of visitors, number and type of goods and services purchased
            etc. Your trust and confidence are and will always be our highest priority.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row bg-black lg:min-h-60 py-8 md:py-16">
          <div className="bg-maximum-red w-full lg:w-2/4   px-12 md:px-31  py-15  items-center flex flex-col ">
            <h1 className="text-2xl md:text-4xl leading-loose md:leading-12 text-white font-semibold">
              {' '}
              INFORMATION WE COLLECT
            </h1>
            <p className="text-sm md:text-xl leading-7 md:leading-loose text-white pt-8">
              When you use our Site, we collect and store your personal information from you. Our primary goal in doing
              so is to provide a safe, efficient, smooth and customized experience. This allows us to provide services
              and features that most likely meet your needs, and to customize our Site to make your experience safer and
              easier. It is important to note that we only collect personal information about you that we consider
              necessary for achieving this purpose. In general, you can browse the Site without telling us who you are
              or revealing any personal information about yourself. Once you give us your personal information, you are
              not anonymous to us.
            </p>
          </div>
          <img src="./key.jpg" alt="key" className="bg-black w-full lg:w-2/4" />
        </div>
        <div className={classNames('bg-white pt-8 md:pt-16 pb-4 md:pb-0 ', styles['px-36'], styles['min-height-55'])}>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-black text-left md:text-center  mx-auto">
            To fully use our Site, you will need to register using our online registration form, where you may be
            required to provide us with your contact and identity information, residence / place of business
            information, billing information, shipping information, bank account details and other personal information
            as indicated on the form(s) throughout the Site. Wherever possible, we indicate which fields are required
            and which fields are optional. You always have the option to not to provide information by choosing not to
            use a particular service or feature on the Site.
          </p>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-black text-left md:text-center pt-4 mx-auto">
            We may automatically track certain information about you based upon your behavior on our site. We use this
            information to do internal research on our users' demographics, interests, and behavior to better
            understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis.
            This information may include the URL that you just came from (whether this URL is on our site or not), which
            URL you next go to (whether this URL is on our site or not), your computer browser information, and your IP
            address.
          </p>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-black text-left text-left md:text-center pt-4 mx-auto">
            We use data collection devices such as "cookies" on certain pages of the Site to help analyze our web page
            flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on
            your hard drive that assist us in providing our services. We offer certain features that are only available
            through the use of a "cookie". We also use cookies to allow you to enter your password less frequently
            during a session. Cookies can also help us provide information that is targeted to your interests. Most
            cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end
            of a session. You are always free to decline our cookies if your browser permits, although in that case you
            may not be able to use certain features on the Site and you may be required to re-enter your password more
            frequently during a session.
          </p>
        </div>
        <div
          className={classNames(
            styles['min-height-42'],
            styles['px-36'],
            'mt-16 bg-black-privacy pt-8 pb-4 md:pb-0 md:pt-16',
          )}>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-white text-left md:text-center">
            Additionally, you may encounter "cookies" or other similar devices on certain pages of the Site that are
            placed by third parties. For example, if you view a web page created by a user, there may be a "cookie"
            placed within that web page. We do not control the use of cookies by third parties.
          </p>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-white pt-4 text-left md:text-center">
            If you choose to buy on the Site, we collect information about your buying behavior. We also collect other
            users' comments about you in our feedback area.
          </p>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-white pt-4 text-left md:text-center">
            If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback
            for other users, we will collect that information you provide to us. We retain this information as necessary
            to resolve disputes, provide customer support and troubleshoot problems as permitted by law. If you send us
            personal correspondence, such as emails or letters, or if other users or third parties send us
            correspondence about your activities or postings on the Site, we may collect such information into a file
            specific to you.
          </p>
          <p className="text-sm md:text-xl leading-7 md:leading-loose text-white pt-4 text-left md:text-center">
            If you register for the Site on another web site or use a website providing a service for Alpino or a web
            site that helps facilitate your activity on the Site, that web site may provide personal information about
            you and your transactions back to us.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

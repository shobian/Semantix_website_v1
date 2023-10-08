import { Icon } from '@iconify/react';
import Head from 'next/head';
import React, { useState } from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact2 from '../components/FunFact/FunFact2';
import Hero4 from '../components/Hero/Hero4';
import Layout from '../components/Layout';
import LogoList from '../components/LogoList';
import MovingText2 from '../components/MovingText/MovingText2';
import Portfolio from '../components/Portfolio';
import PostList from '../components/Post/PostList';
import SectionHeading from '../components/SectionHeading';
import TestimonialSlider from '../components/Slider/TestimonialSlider';
import TimelineSlider from '../components/Slider/TimelineSlider';
import Spacing from '../components/Spacing';
import VideoModal from '../components/VideoModal';


import Card from '../components/Card';





import MovingText from '../components/MovingText';

import PortfolioSlider from '../components/Slider/PortfolioSlider';
import PostSlider from '../components/Slider/PostSlider';
import TeamSlider from '../components/Slider/TeamSlider';



export default function Home() {

  const [itemShow, setItemShow] = useState(6);
  const heroSocialLinks = [
    {
      name: 'Instagram',
      links: '/',
    },
    {
      name: 'Facebook',
      links: '/',
    },
  ];
  const funfaceData = [
    {
      title: 'Digital products',
      factNumber: '50',
    },
    {
      title: 'Global happy clients',
      factNumber: '10',
    },
    {
      title: 'Project completed',
      factNumber: '15',
    },
    {
      title: 'Team members',
      factNumber: '10',
    },
  ];
  const serviceData1 = [
    {
      title: 'Web Development',
      href: '/service/service-details',
    },
    {
      title: 'Marketing',
      href: '/service/service-details',
    },
    {
      title: 'Branding',
      href: '/service/service-details',
    },
  ];
  const serviceData2 = [
    {
      title: 'SEO',
      href: '/service/service-details',
    },
    {
      title: 'App design',
      href: '/service/service-details',
    },
    {
      title: 'Software Development',
      href: '/service/service-details',
    },
  ];
  const portfolioData = [
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_11.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_12.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_13.jpeg',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_14.jpeg',
      category: 'mobile_apps',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_15.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_16.jpeg',
      category: 'web_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_11.jpeg',
      category: 'ui_ux_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_12.jpeg',
      category: 'logo_design',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'See Details',
      href: '/portfolio/portfolio-details',
      src: '/images/portfolio_13.jpeg',
      category: 'web_design',
    },
  ];


  return (
    <>
      <Head>
        <title>Home - semantix labs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Layout>
        {/* Start Hero Section */}
        <Hero4 
          title="We semantix <span>labs</span> <br />Your Digital Partner"
          subtitle="We are dedicated to delivering cutting-edge problem-solving solutions to our clients while consistently providing the highest quality products, both now and in the future."
          scrollDownId="#service"
          socialLinksHeading="Follow Us"
          heroSocialLinks={heroSocialLinks}
          phoneNumber="+94 77 5222 493"
          email="info@semantixlabs.com"
        />
        {/* End Hero Section */}

        {/* Start Funfact Section */}
        <Div className="container">
          <FunFact2
            data={funfaceData}
            variant="cs-type1"
            bgUrl="/images/funfact_shape_bg.svg"
          />
        </Div>
        {/* End Funfact Section */}

        {/* Start Services Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="What we provide"
            subtitle="Services"
            variant="cs-style1 text-center"
          />
          <Spacing lg="65" md="45" />
        </Div>
        {/* End Services Section */}

        {/* Start Moving Text Section */}
        <MovingText2 data={serviceData1} />
        <Spacing lg="20" md="10" />
        <MovingText2 reverseDirection data={serviceData2} />
        {/* End Moving Text Section */}

        {/* Start Service Section */}
        <Spacing lg="150" md="80" />
        <Div id="service">
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle=""
                  btnText="See All Services"
                  btnLink="/service"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Web Development"
                      link="/service/service-details"
                      src="/images/service_1.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Social Media Management"
                      link="/service/service-details"
                      src="/images/service_4.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Digital Marketing"
                      link="/service/service-details"
                      src="/images/service_3.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Application Development"
                      link="/service/service-details"
                      src="/images/service_2.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Service Section */}


        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          In agile methodology, change is opportunity, not a threat.
          We embrace it effectively to drive success in your organization.
          </h2>
          <Spacing lg="70" md="70" />
        {/*  <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg.jpeg"
          />*/}
        </Div>
        {/* End Video Block Section */}


        

        {/* Start Blog Section */}
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Explore recent publication"
                  subtitle="Our Blog"
                  btnText="View More Blog"
                  btnLink="/blog"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-7 offset-xl-1">
                <Div className="cs-half_of_full_width">
                  <PostSlider />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        {/* End Blog Section */}

        {/* Start MovingText Section */}
        <Spacing lg="125" md="70" />
        <MovingText text="Our reputed world wide partners." />
        <Spacing lg="105" md="70" />
        {/* End MovingText Section */}

        {/* Start LogoList Section */}
        <Div className="container">
          <LogoList />
        </Div>
        <Spacing lg="150" md="80" />
        {/* End LogoList Section */}

        {/* Start CTA Section */}
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}

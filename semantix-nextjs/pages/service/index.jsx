import Head from 'next/head';
import React from 'react';
import Card from '../../components/Card';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import PricingTableList from '../../components/PricingTable/PricingTableList';
import SectionHeading from '../../components/SectionHeading';
import TestimonialSlider from '../../components/Slider/TestimonialSlider';
import Spacing from '../../components/Spacing';
import Serv from '../../components/Widget/Service'

import one from '../../public/images/tech/one.png'
import two from '../../public/images/tech/2.png'
export default function Service() {
  return (
    <>
      <Head>
        <title>Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Services"
          bgSrc="images/service_hero_bg.jpeg"
          pageLinkText="Services"
        />
        <Spacing lg="150" md="80" />
        <Div className="cs-shape_wrap_4">
          <Div className="cs-shape_4"></Div>
          <Div className="cs-shape_4"></Div>
          <Div className="container">
            <Div className="row">
              <Div className="col-xl-4">
                <SectionHeading
                  title="Services we can help you with"
                  subtitle="What Can We Do"
                />
                <Spacing lg="90" md="45" />
              </Div>
              <Div className="col-xl-8">
                <Div className="row">
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Web Development"
                      link=""
                      src="/images/service_1.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Social Media Management"
                      link=""
                      src="/images/service_4.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Digital Marketing"
                      link=""
                      src="/images/service_3.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Branding"
                      link=""
                      src="/images/service_5.jpg"
                      alt="Service"
                    />
                  

                    <Spacing lg="0" md="30" />
                  </Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="Application Development"
                      link=""
                      src="/images/service_2.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                  
                  <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                  <Div className="col-lg-3 col-sm-6">
                    <Card
                      title="consultancy"
                      link=""
                      src="/images/service_6.jpg"
                      alt="Service"
                    />
                    <Spacing lg="0" md="30" />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="150" md="80" />
        <Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
        <SectionHeading 
                  title=""
                  subtitle="Our Tech Expertise"
                 
                />
        </Div>
        

        <Div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
       
  <Div className='' style={{ width: '7%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/images/tech/2.png"/>  
          <img src="/images/tech/one.png"/>
          <img src="/images/tech/3.png"/>
          <img src="/images/tech/4.png"/>
          <img src="/images/tech/6.png"/>
          <img src="/images/tech/7.png"/>
          <img src="/images/tech/8.png"/>
          <img src="/images/tech/9.png"/>
          <img src="/images/tech/10.png"/>
          
          </Div>      </Div>
        
              
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
       
    
      </Layout>
 
    </>
  );
}

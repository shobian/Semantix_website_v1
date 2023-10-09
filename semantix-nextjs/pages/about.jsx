import Head from 'next/head';
import React from 'react';
import Cta from '../components/Cta';
import Div from '../components/Div';
import FunFact from '../components/FunFact';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import TeamSlider from '../components/Slider/TeamSlider';
import Spacing from '../components/Spacing';

export default function About() {
  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '50',
    },
    {
      title: 'Project Completed',
      factNumber: '20',
    },
    {
      title: 'Team Members',
      factNumber: '15',
    },
    {
      title: 'Digital products',
      factNumber: '20',
    },
  ];
  return (
    <>
      <Head>
        <title>Home - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Us"
          bgSrc="images/about_hero_bg.jpeg"
          pageLinkText="About Us"
          style= {{opacity:30}}
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title="Your trusted partner for business"
                subtitle="About Our Agency"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  This is the main factor that sets us apart from our
                  competition and allows us to deliver a specialist business
                  consultancy service. Our team applies its wide-ranging
                  experience to determining. Through our years of experience,
                  we’ve also learned that while each channel.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/about_img_3.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/about_img_2.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_1.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

        {/* Start Fun Fact Section */}
        <Div className="container">
          <FunFact
            title="Our fun fact"
            subtitle="Here at Semantix Labs, our team may be youthful, but our talent is seasoned with the passion and creativity of a new generation. 
            Think of us as the 'young guns' of the software world, infusing every project with fresh ideas and boundless energy. Our youthfulness is our 
            secret sauce, blending with years of expertise to deliver software solutions that are not just cutting-edge but also a whole lot of fun to work with. 
            Join us, and let's write the next exciting chapter in the world of tech innovation together!"
            data={funfaceData}
          />
        </Div>
        {/* End Fun Fact Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/code.png"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Highly creative people with us"
                subtitle="Why Choose Us"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  This is the main factor that sets us apart from our
                  competition and distinguishes Semantix Labs as a trailblazer in the industry. This commitment to creativity is the main factor that sets us apart from our competition, ensuring that when you partner with us, you're choosing a team that not only delivers exceptional software but also brings a touch of ingenuity to every project, making your digital vision a reality in the most innovative and imaginative way possible                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                We don't just write code; we craft digital experiences with an artistic touch, ensuring your software not only works flawlessly but also impresses with its creative design and functionality
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}
        <Spacing lg="150" md="80" />

        {/* Start Fun Fact Section */}
        <Div className="container">
            <Div className="col-xl-10 offset-xl-1 col-lg-6" >
              <SectionHeading
                title="Get to know us"
                subtitle=""
              >
                <Div className="col-xl-10 col-lg-6 " >
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/semantix_us.png"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              <Spacing lg="0" md="40" />
            </Div>

                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                At Semantix Labs, we embody a dynamic and innovative spirit. Our young and agile team is passionate about pushing boundaries and delivering cutting-edge solutions. We prioritize our clients' success, embracing change as an opportunity, not a challenge. With a client-centric and collaborative approach, we are results-oriented and dedicated to providing high-quality solutions. Our work is driven by a commitment to innovation, creativity, and a forward-thinking mindset.<Spacing lg="15" md="15" />
                </p>
                <br/>
                <p className="cs-m0">
                <b>Innovative:</b> At Semantix Labs, innovation is at the core of everything we do. We're dedicated to pushing boundaries and exploring new possibilities.
                <br/><br/>
                <b>Agile:</b> We embrace change and adapt quickly to meet the evolving needs of our clients and the dynamic digital landscape.
                <br/><br/>
                <b>Dynamic:</b> Our young and vibrant culture fosters creativity, collaboration, and a forward-thinking mindset.
                <br/><br/>
                <b>Cutting-edge:</b> We stay at the forefront of technology trends to deliver state-of-the-art solutions to our clients.
                <br/><br/>
                <b>Solution-driven:</b> Our primary focus is to provide practical and effective solutions that solve our clients' unique challenges.
                <br/><br/>
                <b>Client-centric:</b> We prioritize our clients' success and work closely with them to achieve their goals.
                <br/><br/>
                <b>Quality:</b> We take pride in delivering high-quality services and products that exceed expectations.
                <br/><br/>
                <b>Results-oriented:</b> Our work is driven by a commitment to delivering measurable results and ROI for our clients.
                <br/><br/>
                <b>Passionate:</b> We are passionate about what we do and are driven by a genuine enthusiasm for technology and creativity.
                <br/><br/>
                <b>Collaborative:</b> Collaboration is key to our success. We work as a team, leveraging each other's strengths to deliver outstanding outcomes.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
  
          
        </Div>
        {/* End Fun Fact Section */}
      

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
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

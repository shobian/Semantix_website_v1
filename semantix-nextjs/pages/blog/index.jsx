import Head from 'next/head';
import React from 'react';
import Cta from '../../components/Cta';
import Div from '../../components/Div';
import Layout from '../../components/Layout';
import PageHeading from '../../components/PageHeading';
import Pagination from '../../components/Pagination';
import PostStyle2 from '../../components/Post/PostStyle2';
import Sidebar from '../../components/Sidebar.jsx';
import Spacing from '../../components/Spacing';

export default function Blog() {
  const postData = [
    {
      thumb: '/images/post_4.jpeg',
      title: 'Why Small-Scale Businesses Need Websites',
      subtitle:
        "In today's fast-paced digital age, having a strong online presence is crucial for businesses of all sizes. For small-scale businesses, a well-designed website can be a game-changer. In this blog post, we'll delve into the reasons why small businesses need websites and how they can leverage them to boost sales, attract, retain customers, and increase repeat purchases.",
      date: '8th September 2023',
      category: 'Tech',
      categoryHref: '/blog',
      href: '/blog/blog-details',
    },
    
  ];
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Our Blog"
          bgSrc="/images/blog_hero_bg.jpeg"
          pageLinkText="Blog"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-12">
              {postData.map((item, index) => (
                <Div key={index}>
                  <PostStyle2
                    thumb={item.thumb}
                    title={item.title}
                    subtitle={item.subtitle}
                    date={item.date}
                    category={item.category}
                    categoryHref={item.categoryHref}
                    href={item.href}
                  />
                  {postData.length > index + 1 && <Spacing lg="95" md="60" />}
                </Div>
              ))}
              <Spacing lg="60" md="40" />
              <Pagination />
            </Div>
            
          </Div>
        </Div>
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

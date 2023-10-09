import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog/blog-details', 
      src:'/images/post_1.jpg', 
      alt:'Post', 
      date:'08 September 2023', 
      title:'Why Small-Scale Businesses Need Websites'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_2.jpeg', 
      alt:'Post', 
      date:'08 October 2023',
      title:'Leveraging Tech Trends: A Blueprint for Business Growth'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_3.jpeg', 
      alt:'Post', 
      date:'10 October 2023',
      title:'Building Your Brand Online: Strategies for Digital Success'
    },
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}

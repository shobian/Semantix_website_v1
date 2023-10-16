import React from 'react';
import Div from '../Div';

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/1.png',
      alt: 'Partner',
    },
    {
      src: '/images/2.png',
      alt: 'Partner',
    },
    {
      src: '/images/3.png',
      alt: 'Partner',
    },
    {
      src: '/images/4.png',
      alt: 'Partner',
    },
    {
      src: '/images/5.png',
      alt: 'Partner',
    },
    ,
    {
      src: '/images/6.png',
      alt: 'Partner',
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </Div>
  );
}

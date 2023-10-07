import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What services does your digital agency offer?',
      answer: 'We provide a comprehensive suite of services, including digital marketing, web development, software development, application development, and branding solutions.'
    },
    {
      question: 'How can digital marketing benefit my business?',
      answer: 'Digital marketing enhances your online presence, reaches a wider audience, boosts brand awareness, and drives conversions.'
    },
    {
      question: "What's the process for web development with your agency?",
      answer: 'We begin with a detailed consultation, followed by design, development, testing, and launch, ensuring a tailored and effective website.'
    },
    {
      question: 'Do you offer ongoing support and maintenance for websites and apps?',
      answer: 'Yes, we offer ongoing support and maintenance services to keep your digital assets up-to-date and secure.'
    },
    {
      question: 'Can you explain your software development approach briefly?',
      answer: 'Our software development follows agile methodologies for efficient, iterative development, resulting in flexible and scalable solutions.'
    },
    {
      question: 'How do I get started with your digital agency?',
      answer: " Simply reach out to us through our contact form, phone, or email, and we'll schedule a consultation to discuss your specific needs and goals."
    },
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}

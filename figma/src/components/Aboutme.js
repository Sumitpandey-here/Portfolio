import React from 'react'
import Button from '../button/Button'
import Percentage from './Percentage'

const Aboutme = () => {
  return (
    <>
      <div className='aboutme'>
        <div className='aboutmefirst'>
          <img src={require('../picture/pexels-wictor-cardoso-18269633 1.png')} alt="React Image" style={{width:"700px", height:"700px"}} />
        </div>

        <div className='ineraboutme'>
          <h6 className='aboutme_h6'>About me </h6>
          <h1 className='aboutmmmmmme_h1'>20 Year’s Experience <span className='span_h1'>on Product Design</span>
          </h1>
          <h2>Hello there! I'm Robert Junior. I specialize in web design and development, and I'm deeply passionate and committed to my craft. With 20 years of experience as a professional graphic designer</h2>
          <div className='about_button'>
            <Button buttonname="Main skills"/>
            <Button buttonname="Education"/>
            <Button buttonname="Awards"/>
          </div>

          <Percentage abc="User Experience Design - UI/UX"/>
          <Percentage abc="Web & User Interface Design - Development"/>
          <Percentage abc="Interaction Design - Animation"/>

        </div>

      </div>


    </>
  )
}

export default Aboutme

import React from 'react'
import Card from './Card'
const Service_section = () => {
    return (
        <div>
            <div className='first_div'>
                <div className='second_div'>
                    <h6 className='service_h1'>Services</h6>
                    <h3 className='service_h3'>Exploring My Design Skills</h3>
                    <h6 className='service_h1'>We transform your ideas into a distinctive web project that both inspires you and captivates your customers</h6>
                  <div className='card_class'>
                 <Card  title1="Website / App DesignUX / UI Design" title2="Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design"/>
                 <Card  title1="Multivendor eCommerce Website Solutions" title2="Unlocking the World of Multivendor eCommerce Websites"/>
                 <Card  title1="Strategic Marketing and Creative Content" title2="Elevating Brands and Engagement through Strategic Marketing and Creative Content"/>
                 </div>
                </div>

            </div>
        </div>
    )
}

export default Service_section

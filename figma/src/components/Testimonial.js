import React from 'react'
import Test_prop from './Test_prop'

const Testimonial = () => {
  return (
    <div className='tt_box'>
<div className='tt_head'>
Testimonials
</div>
<div className='tt_title'>
The Trust From Clients
</div>
<div className='test_main_div'>
<Test_prop title="Lorem ipsum dolor sit amet consectetur. 
Nibh porttitor aliquet tellus eget egestas. Enim ultrices
 dictumst tortor in eget neque vestibulum potenti tempus" title2="Savannah Nguyen" title3="President of Sales"/>
<Test_prop title="Lorem ipsum dolor sit amet consectetur. 
Nibh porttitor aliquet tellus eget egestas. Enim ultrices
 dictumst tortor in eget neque vestibulum potenti tempus" title2="jennyn Wilson" title3="Medical Assistant"/>
<Test_prop title="Lorem ipsum dolor sit amet consectetur. 
Nibh porttitor aliquet tellus eget egestas. Enim ultrices
 dictumst tortor in eget neque vestibulum potenti tempus" title2="Esther Howard" title3="Nursing Assistant"/>
    <Test_prop title="Lorem ipsum dolor sit amet consectetur. 
    Nibh porttitor aliquet tellus eget egestas. Enim ultrices
    dictumst tortor in eget neque vestibulum potenti tempus" title2="Cameron Williamson" title3="Marketing Coordinator"/>
      </div>
</div>
  )
}

export default Testimonial

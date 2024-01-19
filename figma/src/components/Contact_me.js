import React from 'react'

const Contact_me = () => {
    return (
        <div className='contact_box'>
            <div className='conatact_div1'>
                Contact me
            </div>
            <div className='contact_div2'>
                Request Free Consultancy
            </div>

            <div className='form_main_div'>
                <div className='contact_div3'>
                    <div className='form_div1'>
                        Hotline 24/7
                        (+23) 5535 68 68
                    </div>

                    <div className='form_div2'>
                        Address: 2972 Westheimer Rd. Santa Ana, Illinois 85486
                        Email: nevaeh.simmons@example.com
                        Fax: (702) 555-0122
                        Work Hour: Mon - Sat: 9:00 - 18:00
                    </div>
                </div>
<div className='cool_div'>
    <div className='cool_div1'>
                < div className='contact_div4'>

                    <input  className="input_css" type="text" name="name"  value="Name"/>

                </div>
                <div className='form_div4'>
                    <input  className="input_css" type="text" name="name" value="Email Address*" />
                </div>
                </div>

                <div className='form_div5'>
                    <input  className="input_css" type="text" name="name" value="How can we help you?" />
                </div>
                <div className='form_div6'>
                    <input className="input_css"  type="text" name="name" value="How can we help you?" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_me

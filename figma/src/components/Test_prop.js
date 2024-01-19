import React from 'react'

const Test_prop = ( props) => {
  return (
    <div className='test_prop_box'>

        <div className='test_pic'>
        <img src={('../vector.png')} alt="React Image" />

        </div>
        <div >
        <img src={('../vector.png')} alt="React Image" />
        <img src={('../vector.png')} alt="React Image" />
        <img src={('../vector.png')} alt="React Image" />
        <img src={('../vector.png')} alt="React Image" />
        <img src={('../vector.png')} alt="React Image" />

        </div>
        <div className='test_title'>

            
{
    props.title
}
        </div>
        <div className='test_title2'>
        {
            props.title2
        }
        </div>
        <div className='test_title3'>
        {
            props.title3
        }
        </div>
      
    </div>
  )
}

export default Test_prop

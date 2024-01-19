import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='card'>
                        <img src={require('../picture/front-development-1-1 1.png')} alt="React Image" />
                        <div className='card_1'>
                            <h6>
                              {props.title1}
                            </h6>
                        </div>
                        <div className='card_2'>
                            <h6>
                               {props.title2}
                            </h6>
                        </div>
                        <div className='card_3'>
                            <h6 className='learn'>
                                Learn More
                            </h6><span>
                                <img src={require('../picture/Arrow 1.png')} alt="React Image" />
                            </span>
                        </div>


                    </div>
    </div>
  )
}

export default Card

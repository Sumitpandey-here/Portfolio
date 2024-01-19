import React from 'react'
import Picture from '../picture/Picture';


const Portfolio = () => {

    const data = ["All", "UI/UX DESIGN", "BRANDING DESIGN", "WORDPRESS"];
    const data2 = [{"id":"1","imgg":"../picture/preview1.png"}, {"id":2,"imgg":"../picture/preview2.png"}, {"id":3,"imgg":"../picture/preview3.png"},
    {"id":4,"imgg":"../picture/preview4.png"},{"id":5,"imgg":"../picture/preview5.png"},{"id":6,"imgg":"../picture/preview6.png"}];

    return (
        
        <div className='port_heading'>
            <div >
                <div className='port_title'>
                    Our projects

                </div>
                <div className='port_innertitle'> Presenting My Design Portfolio and Case Studies</div>


            </div>
            <div className='button_css'>
                {data.map((head) =>
                (
                    
                        
                            <button className='button_map_class'>{head}</button>
                    
                
                ))}
            </div>
        
           <div>
          
            {data2.map
            
            ((pic)=>(
                
                // <div>
                    // {pic.id}
                    <img src={pic.imgg} alt="React Image" />
                    
                // </div>
            ))}
           </div>


        </div>
    )
}

export default Portfolio

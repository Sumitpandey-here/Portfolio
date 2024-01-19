import React from 'react'

const courses = [
    "Home",
    "About me",
    "Services",
    "Blog",
    "Contact me",
  ];

  const arrayDataItems = courses.map((course) => <li>{course}</li>);

  
  
  const Nav = () => {
    return (
      <div className='nav'>
        {arrayDataItems}
      </div>
    )
  }
  
  export default Nav
  

  
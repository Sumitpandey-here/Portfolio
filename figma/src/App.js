
import './App.css';
// import './button/Button';
import Button from './button/Button';
import Nav from './nav/Nav';
import Air from './air_baloon/Air';
import First_section from './first_section/First_section';
import Picture from './picture/Picture';
import Software_section from './components/Software_section';
import Aboutme from './components/Aboutme';
import Service_section from './components/Service_section';
import Achieve from './components/Achieve';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact_me from './components/Contact_me';

function App() {
  return (
    <>
      <div className='nav_bar_full'>
        <div className='nav_bar'>
          <Air />
          <Nav />
          <Button buttonname="Lets Go" />

        </div>
      </div>

      <div className='new_section'>
        <First_section />

        <Picture />
      </div>

      <Software_section />
      <Aboutme />
      <Service_section />
      <Achieve />
      <Portfolio/>
      <Testimonial/>
      <Contact_me/>

    </>


  );
}

export default App;

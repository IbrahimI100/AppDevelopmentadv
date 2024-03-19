import './Academics.css';
import yoga1 from "../assets/yoga1.jpg";
import yoga2 from "../assets/yoga2.jpg";
import yoga3 from "../assets/yoga3.jpg";
import yoga4 from "../assets/yoga4.jpg";
import yoga5 from "../assets/yoga5.jpg";
import yoga6 from "../assets/yoga6.jpg";
import homeicon from '../assets/home.png';

import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className='academy'>
      <Link to="/dashboard"><img className="homeicon" src={homeicon} alt="Home Icon" /></Link>
      <main>
        <div className="about-me-text">
          <p>FEATURED ACADEMY</p>
          <div className='eventside'>Balance is the key to a peaceful mind; yoga is the journey to find it.</div>
        </div>
        
        <div className="about-me">
          <div className='event1'>
            <img src={yoga1} alt="me" />
            <p className='p1'>ISHA YOGA ACADEMY</p>
            <p className='p2'>Place: Coimbatore</p>
            <Link to="/classes"><button className='button-33'>VIEW ACADEMY</button></Link>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='event2'>
            <img src={yoga2} alt="me" />
            <p className='p1'>DHIYANAM ACADEMY</p>
            <p className='p2'>Place: Bangalore</p>
            <button className='button-33'>VIEW ACADEMY</button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='event3'>
            <img src={yoga3} alt="me" />
            <p className='p1'>MANTRA ACADEMY</p>
            <p className='p2'>Place: Chennai</p>
            <button className='button-33'>VIEW ACADEMY</button>
          </div>
        </div>
        <div className="about-me1">
          <div className='event4'>
            <img src={yoga4} alt="me" />
            <p className='p4'>SARVA ACADEMY</p>
            <p className='p3'>Place: Bangalore</p>
            <button className='button-33'>VIEW ACADEMY</button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='event5'>
            <img src={yoga5} alt="me" />
            <p className='p4'>DHWANI ACADEMY</p>
            <p className='p3'>Place: Chennai</p>
            <button className='button-33'>VIEW ACADEMY</button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='event6'>
            <img src={yoga6} alt="me" />
            <p className='p4'>ASNA ACADEMY</p>
            <p className='p3'>Place: Coimbatore</p>
            <button className='button-33'>VIEW ACADEMY</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;

import './Trainers.css';
import { Link } from 'react-router-dom';
import tgbg from "../assets/illu.jpg";
import homeicon from '../assets/home.png';
import { useState, useEffect } from 'react';

function Trainers() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    // Define static trainers data
    const staticData = [
      { name: 'John Doe', age: 30, mobile: '1234567890', specialist: 'Weight Training' },
      { name: 'Jane Smith', age: 25, mobile: '9876543210', specialist: 'Yoga' },
      { name: 'Alice Johnson', age: 35, mobile: '5678901234', specialist: 'Cardio' },
      { name: 'Michael Brown', age: 28, mobile: '3456789012', specialist: 'CrossFit' },
      { name: 'Emma Watson', age: 32, mobile: '6789012345', specialist: 'Pilates' },
      { name: 'David Lee', age: 29, mobile: '8901234567', specialist: 'HIIT' },
      { name: 'Sarah Parker', age: 27, mobile: '0123456789', specialist: 'Zumba' },
      { name: 'Ryan Garcia', age: 33, mobile: '4567890123', specialist: 'Martial Arts' }
    ];

    setServicesData(staticData);
  }, []); // Fetch data when the component mounts

  return (
    <div>
      <div>
        <div style={{ backgroundImage: `url(${tgbg})` }} className="tgbg">
          <Link to="/dashboard"><img className="homeicontran" src={homeicon} alt="home icon" /></Link>
          <div className="views">
            <section id="view"> 
              <center>
                <h2 className='h2ad'>Available Trainers</h2>
              </center>
              <table className='admintable'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mobile</th>
                    <th>Specialist</th>
                  </tr>
                </thead>
                <tbody>
                  {servicesData.map((service, index) => (
                    <tr key={index}>
                      <td>{service.name}</td>
                      <td>{service.age}</td>
                      <td>{service.mobile}</td>
                      <td>{service.specialist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
          <Link to="/tranform"><button className="button1345">Book Your Trainer</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Trainers;

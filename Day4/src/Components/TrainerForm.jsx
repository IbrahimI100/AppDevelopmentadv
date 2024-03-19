import React, { useState } from 'react';
import './TrainerForm.css';
import { Link } from 'react-router-dom';
import formbg from '../assets/bluefloral.jpg';

const ApplyTrain = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [trainerName, setTrainerName] = useState('');
  const [goal, setGoal] = useState('');

  const handleEnrollTrain = (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber || !trainerName || !goal) {
      alert("Please fill in all the details.");
    } else {
      // Create an object with form data
      const formData = {
        name,
        email,
        phoneNumber,
        trainerName,
        goal
      };

      // Store form data in local storage or session storage
      localStorage.setItem('traineeData', JSON.stringify(formData)); // Change to sessionStorage if you want to use session storage

      // Alert user that data has been stored
      alert("You have booked your trainer!!!");

      // Route back to dashboard after 3 seconds
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 3000);
    }
  };

  const goals = ["Flexibility", "Strength", "Mindfulness", "Balance", "Stress Relief"];

  return (
    <div style={{backgroundImage:`url(${formbg})`}} className='apply2617'>
      <Link to="/dashboard" className="homeicontran">
        <img src="/src/assets/home.png" alt="Home Icon" />
      </Link>
      <section className="container2617">
        <header className='hede7'>Book Your Personal Trainer</header>
        <form onSubmit={handleEnrollTrain} className="form2617">
          <div className="input-box2617">
            <label>Name</label>
            <input 
              type="text" 
              placeholder="Enter full name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div className="input-box2617">
            <label>Email</label>
            <input 
              type="text" 
              placeholder="Enter email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-box2617">
            <label>Mobile Number</label>
            <input 
              type="number" 
              placeholder="Enter phone number" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              required 
            />
          </div>

          <div className="input-box2617">
            <label>Trainer Name</label>
            <input 
              type="text" 
              placeholder="Enter Trainer Name" 
              value={trainerName} 
              onChange={(e) => setTrainerName(e.target.value)} 
              required 
            />
          </div>

          <div className="input-box2617">
            <label>Your goal</label>
            <select 
              className='select-box7' 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)} 
              required
            >
              <option value="" disabled>Select your goal</option>
              {goals.map((goal, index) => (
                <option key={index} value={goal}>{goal}</option>
              ))}
            </select>
          </div>

          <br />
          <button type="submit" className='buttonenroll7'>Enroll</button>
        </form>
      </section>
    </div>
  );
};

export default ApplyTrain;

import React from 'react';
import './Scheduleget.css';
import schedule from '../assets/schedule.png';

const Scheduleget = () => {
  // Define static schedule data
  const scheduleData = [
    { date: 'Fri Mar 22 2024 00:00:00', event: 'Yoga Training' },
    { date: 'Sat Mar 23 2024 00:00:00', event: 'Pilates Class' },
    { date: 'Sun Mar 24 2024 00:00:00', event: 'Strength Training' },
    { date: 'Mon Mar 25 2024 00:00:00', event: 'Cardio Workout' },
    { date: 'Tue Mar 26 2024 00:00:00', event: 'Zumba Dance' },
    { date: 'Wed Mar 27 2024 00:00:00', event: 'Meditation Session' },
    { date: 'Thu Mar 28 2024 00:00:00', event: 'Boxing Training' },
    // Add more schedule items if needed
  ];

  return (
    <div className="scheduleContainer">
      <div style={{ backgroundImage: `url(${schedule})` }} className="scheduleImage" />

      <div className="scheduleList">
        <h2 className="scheduleHeading">Schedule</h2>
        <ul className="scheduleItems">
          {scheduleData.map((item, index) => (
            <li key={index} className="scheduleItem">
              <span className="scheduleDate">{item.date}</span>
              <span className="scheduleEvent">{item.event}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Scheduleget;

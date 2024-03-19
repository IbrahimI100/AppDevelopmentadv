import React, { useEffect, useState } from 'react';
import './Viewenroll.css';

const Viewenroll = () => {
  const [enrollments, setEnrollments] = useState([]);

  // Define static trainers
  const staticEnrollments = [
    { name: 'ibra', email: 'john@gmail.com', phoneNumber: '1234567890', trainerName: 'Trainer A', goal: 'Strength' },
    { name: 'Janann', email: 'jane@example.com', phoneNumber: '9876543210', trainerName: 'Trainer B', goal: 'Flexibility' },
    { name: 'Aion', email: 'aion@gmail.com', phoneNumber: '5678901234', trainerName: 'Trainer C', goal: 'Mindfulness' },

  ];

  useEffect(() => {
    // Set static trainers as enrollments
    setEnrollments(staticEnrollments);
  }, []);

  return (
    <div className="enrollContainer">
      <h2 className="heading">Enrolled Trainees</h2>
      {enrollments.length > 0 ? (
        <table className="enrollTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Trainer Name</th>
              <th>Goal</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment, index) => (
              <tr key={index}>
                <td>{enrollment.name}</td>
                <td>{enrollment.email}</td>
                <td>{enrollment.phoneNumber}</td>
                <td>{enrollment.trainerName}</td>
                <td>{enrollment.goal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="noEnrollments">No enrollments yet.</p>
      )}
    </div>
  );
};

export default Viewenroll;

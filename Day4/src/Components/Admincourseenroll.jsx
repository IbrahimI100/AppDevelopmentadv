import React from 'react';
import './admincourseenroll.css';

function Admincourseenroll() {
  const courseData = [
    { courseName: 'Yoga', timing: 'Mon-Fri 6:00 AM - 7:00 AM', duration: '1 hour' },
    { courseName: 'Pilates', timing: 'Tue-Sat 9:00 AM - 10:00 AM', duration: '1 hour' },
    { courseName: 'Zumba', timing: 'Mon-Wed-Fri 5:00 PM - 6:00 PM', duration: '1 hour' },
    { courseName: 'Spin Class', timing: 'Mon-Wed-Fri 7:00 AM - 8:00 AM', duration: '1 hour' },
    { courseName: 'Bootcamp', timing: 'Tue-Thu-Sat 6:00 PM - 7:00 PM', duration: '1 hour' },
    { courseName: 'Boxing', timing: 'Mon-Fri 7:00 PM - 8:00 PM', duration: '1 hour' },
    { courseName: 'Piloxing', timing: 'Tue-Thu-Sat 8:00 AM - 9:00 AM', duration: '1 hour' },
    { courseName: 'Tai Chi', timing: 'Mon-Wed-Fri 9:00 AM - 10:00 AM', duration: '1 hour' },
    { courseName: 'Barre', timing: 'Tue-Thu 7:00 AM - 8:00 AM', duration: '1 hour' },
    { courseName: 'CrossFit', timing: 'Mon-Wed-Fri 6:00 PM - 7:00 PM', duration: '1 hour' },
  ];

  return (
    <div>
      <div className="enrollment-container">
        <h2 className="enrollment-heading">Course Enrollment</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Timing</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.timing}</td>
                <td>{course.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admincourseenroll;

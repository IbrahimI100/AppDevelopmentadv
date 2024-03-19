
import  { useState } from 'react';
import './Classes.css';
import { Link } from 'react-router-dom';
import homeicon from '../assets/home.png';
// import classbg from "../assets/class.jpg"
const Academy = () => {
  const [searchId, setSearchId] = useState('');

  const courses = [
    {
      name: 'Bikram Yoga',
      duration: '3 months',
      timings: '6am to 6pm',
      description: 'Embark on a Transformative Journey of Self-Discovery through Our Yoga Classes',
    },
    {
      name: 'Hatha Yoga',
      duration: '5 months',
      timings: '6am to 6pm',
      description: 'Dive into the fundamentals of yoga with our Hatha Harmony class',
    },
    {
      name: 'Vinyasa Yoga',
      duration: '4 months',
      timings: '9am to 11am',
      description: 'Join us for Vinyasa Vitality, a dynamic and flowing class ',
    },
    {
      name: 'Ashtanga Yoga',
      duration: '6 months',
      timings: '7am to 8am',
      description: 'Dive into a 6-month journey of dynamic poses and focused breath in our Ashtanga Yoga class',
    },
    {
      name: 'Yin Yoga',
      duration: '2 months',
      timings: '5pm to 6pm',
      description: ' Experience deep relaxation and increased flexibility with Yin Yoga',
    },
    {
      name: 'Power Yoga',
      duration: '4 months',
      timings: '10am to 12pm',
      description: 'Elevate your energy and strength with Power Yoga',
    },
    {
      name: 'Restorative Yoga',
      duration: '3 months',
      timings: '4pm to 5pm',
      description: 'Ideal for those seeking a gentle yet rejuvenating experience ',
    },
    {
      name: 'Prenatal Yoga',
      duration: '6 weeks',
      timings: '6pm to 7pm',
      description: 'Nurture yourself and your baby in our 6-week Prenatal Yoga class',
    },
  ];
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (e) => {
    e.preventDefault();

    const filteredCourses = courses.filter(course =>
      course.name.toLowerCase().includes(searchId.toLowerCase()) ||
      course.duration.toLowerCase().includes(searchId.toLowerCase()) ||
      course.timings.toLowerCase().includes(searchId.toLowerCase())
    );

    setFilteredCourses(filteredCourses);
  };

 
  return (
    
    <div className="academy-container">
            <br></br>  <br></br>  <Link to="/dashboard"><img className="homeiconcl" src={homeicon}></img></Link>
      <h2 className="courses-heading">Courses</h2><br></br><br></br>
     
          <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search course"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button className="search"type="submitse">Search</button>
       
        </form>
      
        <ul id="userCourseGrid2" className="courses-list">
          {filteredCourses.map((course, i) => (
            <li key={i}>
              <p>
                Course Name: {course.name} <br />
                Duration: {course.duration} <br />
                Timings: {course.timings}
              </p>
              <p>{course.description}</p>
            <Link to="/enroll"><button  className="enroll-button">
                Enroll 
              </button></Link>
            </li>
          ))}
        </ul>
      </div>
      
    );
};
export default Academy;
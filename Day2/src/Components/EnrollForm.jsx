import './EnrollForm.css';
import { Link } from 'react-router-dom';
import homeicon from '../assets/home.png';

const Apply = () => {
  const handleenroll = () => {
    alert("Successfully enrolled");
  };

  return (
    <div className='apply261'>
      <Link to="/dashboard"><img className="homeiconen" src={homeicon} alt="Home Icon" /></Link>
      <section className="container261">
        <header className='hede'>Enrollment Form</header>
        <form action="#" className="form261">
          <div className="input-box261">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          <div className="input-box261">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" required />
          </div>

          <div className="column261">
            <div className="input-box261">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter phone number" required />
            </div>
            <div className="input-box261">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
          </div>

          <div className="gender-box261">
            <h3>Gender</h3>
            <div className="gender-option261">
              <div className="gender261">
                <label htmlFor="check-male">
                  <input type="radio" id="check-male" name="gender" defaultChecked />
                  Male
                </label>
                <label htmlFor="check-female">
                  <input type="radio" id="check-female" name="gender" />
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="input-box261 address261">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required />
            
            <div className="column261">
              <input type="text" placeholder="Enter your city" required />
            </div>
            <div className="column261">
              <input type="text" placeholder="Enter your region" required />
              <input type="number" placeholder="Enter postal code" required />
            </div>
          </div>

          <br />
          <button onClick={handleenroll} className='buttonenroll'>Enroll</button>
        </form>
      </section>
    </div>
  );
};

export default Apply;

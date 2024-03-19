import  { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Contact.css'; // Create a CSS file for styling
import contactbg from '../assets/contact.png';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (ratingValue) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: ratingValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', formData);
    // You can add your logic to send the form data to a server or perform any other actions
  };

  return (
    <div style={{ backgroundImage: `url(${contactbg})` }} className="contact123">
      <div className="container123">
        <div className="content123">
          <div className="left-side123">
            <div className="address123 details123">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic123">Address</div>
              <div className="text-one123">Coimbatore</div>
              <div className="text-two123">Tamil Nadu</div>
            </div>
            <div className="phone details123">
              <i className="fas fa-phone-alt"></i>
              <div className="topic123">Phone</div>
              <div className="text-one123">+0023456789</div>
              <div className="text-two123">+0234567890</div>
            </div>
            <div className="email123 details123">
              <i className="fas fa-envelope"></i>
              <div className="topic123">Email</div>
              <div className="text-one123">sattvaconnect@gmail.com</div>
              <div className="text-two123">skcet@gmail.com</div>
            </div>
          </div>
          <div className="right-side123">
            <div className="topic-text123">Send us your reviews</div>
            <p>If you have any changes do mention below. Its my pleasure to help you.</p>
            <form onSubmit={handleSubmit}>
              <div className="input-box123">
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="input-box123">
                <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="input-box123 message-box123">
                <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <label className='ratingash'>Add your rating here:</label>
              <div className="star-rating">
          
                {[...Array(5)].map((item, index) => {
                  const givenRating = index + 1;
                  return (
                    <label key={givenRating}>
                      <input
                        type="radio"
                        name="rating"
                        value={givenRating}
                        onClick={() => handleRatingChange(givenRating)}
                      />
                      <FaStar
                        color={
                          givenRating <= formData.rating
                            ? '#fcd835'
                            : 'rgb(192, 192, 192)'
                        }
                      />
                    </label>
                  );
                })}
              </div>
              <div className="button123">
             <input onClick={handleSubmit}type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

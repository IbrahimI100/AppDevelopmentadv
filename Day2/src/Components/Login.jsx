
import { useState } from 'react';
import './Login.css'; // Import your CSS file
import google from '../assets/Google.jpeg';
import { login } from './Redux/userSlice';
import facebook from '../assets/facebook.png';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks
import { selectUser } from './Redux/userSlice';

const LoginPage = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const user = useSelector(selectUser); // Select user from Redux store

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const handleGoogleLogin = () => {
    // Implement your Google login logic here
    console.log('Login with Google clicked');
  };

  const handleFacebookLogin = () => {
    // Implement your Facebook login logic here
    console.log('Login with Facebook clicked');
  };

  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the error messages
    setEmailError(isEmailValid ? '' : 'Invalid email address');
    setPasswordError(isPasswordValid ? '' : 'Password should be at least 6 characters');

    // Update the button disabled state
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from sessionStorage
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');

    // Validate login based on stored data
    if (email === storedEmail && password === storedPassword) {
      // Dispatch login action
      dispatch(login(email));

      // Navigate to Dashboard
      navigate('/Dashboard');
    } else {
      // Handle invalid login
      console.error('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="side-image"></div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <span className="error-message">{emailError}</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="error-message">{passwordError}</span>
          </div>
         
            <button className="sc1" type="submit" disabled={isButtonDisabled}>
              Login
            </button>
       
          <p className="sign-in-message">
            Dont have an account? <Link to="/signup">Sign in.</Link>
          </p>
          <div className="social-login">
            <p>Or Login With:</p>
            <br></br>
            <div className="social-icons">
              <button type="button" onClick={handleGoogleLogin}>
                <img src={google} alt="Google" />
              </button>
              <button type="button" onClick={handleFacebookLogin}>
                <img src={facebook} alt="Facebook" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
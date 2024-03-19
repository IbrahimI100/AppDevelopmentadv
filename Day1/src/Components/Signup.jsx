
import { useState } from 'react';
import aa from "../assets/aa.jpg";
import './Signup.css'; // Import your CSS file
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { login } from './Redux/userSlice';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
const dispatch=useDispatch();

const nav=useNavigate();
  const handleSignup = () => {
    if (validateForm()) {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
      dispatch(login(email));
      console.log('Signup clicked');
      nav('/login');
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate username
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirm Password is required');
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }
    
    return isValid;
  };

  return (
    <div className="signup-container12">
      <div style={{ backgroundImage:`url(${aa})` }} className="side-image12"></div>
      <div className="signup-form12">
        <h2>Signup</h2>
        <p className="sign-in-message12">Already a member?<Link to="/login">Log in.</Link></p>
        <form>
          <div className="form-group12">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error-message12">{emailError}</span>
          </div>
          <div className="form-group12">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="error-message12">{usernameError}</span>
          </div>
          <div className="form-group12">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="error-message12">{passwordError}</span>
          </div>
          <div className="form-group12">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="error-message12">{confirmPasswordError}</span>
          </div>
          <button className="sc1" type="button" onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
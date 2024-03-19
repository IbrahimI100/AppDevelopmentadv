import adminaca from '../assets/schbg1.png';
import { useState } from 'react';
import './Admintrainer.css';
import { Link } from 'react-router-dom';

const AdminTrainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [trainerData, setTrainerData] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    age: '',
    specialist: '', // Changed from input to select dropdown
  });
  const [formType, setFormType] = useState('add');

  const handleButtonClick = (type) => {
    setShowForm(true);
    setFormType(type);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setTrainerData({
      id: '',
      name: '',
      phoneNumber: '',
      age: '',
      specialist: '',
    });
    setFormType('add');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrainerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTrainerOperation = () => {
    // Perform operations based on formType
    if (formType === 'add') {
      console.log('Adding Trainer:', trainerData);
    }
    handleFormClose();
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
        <h1 className="academic-heading">Trainer Details</h1>
        <button className="upad12" onClick={() => handleButtonClick('add')}>Add</button>
        <Link to="/viewenroll"> <button className="upview">View Bookings</button></Link>
      </div>

      {showForm && (
        <div className="form-modal">
          <form>
            <label>
              Trainer ID:
              <input className="trainerdata" type="text" name="id" value={trainerData.id} onChange={handleInputChange} />
            </label>

            <label>
              Name:
              <input className="trainerdata" type="text" name="name" value={trainerData.name} onChange={handleInputChange} />
            </label>

            <label>
              Phone Number:
              <input className="trainerdata" type="text" name="phoneNumber" value={trainerData.phoneNumber} onChange={handleInputChange} />
            </label>

            <label>
              Age:
              <input className="trainerdata" type="text" name="age" value={trainerData.age} onChange={handleInputChange} />
            </label>

            <label>
              Specialist:
              <select className="trainerselect" name="specialist" value={trainerData.specialist} onChange={handleInputChange}>
                <option value="">Select Specialist</option>
                <option value="Flexibility">Flexibility</option>
                <option value="Stress and Releif">Stress and Relief</option>
                <option value="Strength">Strength</option>
                <option value="Balance">Balance</option>
                <option value="Minfulness">Mindfulness</option>
              </select>
            </label>

            <button className="formbu174" type="button" onClick={handleTrainerOperation}>
              {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
            </button>
            <button className="formbu174" type="button" onClick={handleFormClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminTrainer;

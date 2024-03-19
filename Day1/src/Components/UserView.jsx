import React from 'react';
import './UserView.css';

function UserView() {
  // Retrieve data from sessionStorage
  const email = sessionStorage.getItem('email');
  const username = sessionStorage.getItem('username');
  const password = sessionStorage.getItem('password');

  return (
    <div className="user-table">
      <h2>User Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Email:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Username:</th>
            <td>{username}</td>
          </tr>
          <tr>
            <th>Password:</th>
            <td>{password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserView;

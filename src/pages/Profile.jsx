import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navberdata from '../components/Navberdata';

const Profile = () => {
const navigate = useNavigate();
const logout = ()=> {
  localStorage.removeItem('loggedin');
  navigate('/login');
 };
const user = JSON.parse(localStorage.getItem('user'));
const fullname = user?.name;
const Phone = user?.phone;
const Email = user?.email;
  return <>
  <Navberdata/>
  <div className="full-container">
    <div className="profile-section">
    <div className="profile-icon text-light">
        <i className='fas fa-user'></i>
        <h1>User Profile</h1>
    </div>
    <hr />
    <div className="profile-info">
        <h3><b>Name  :</b>{fullname}</h3>
        <h3><b>Phone :</b>+91{Phone}</h3>
        <h3><b>Email :</b>{Email}</h3>
        <Button onClick={logout}><i className='fas fa-power-off'></i>  Logout</Button>
    </div>
    </div>
  </div>
  </>
}

export default Profile
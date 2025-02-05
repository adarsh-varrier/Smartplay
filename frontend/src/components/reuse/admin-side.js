import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaTachometerAlt, FaChild, FaFootballBall } from 'react-icons/fa';
import '../../styles/user-nav.css';
import LogoutButton from './Logout';

function Sidebar3() {
  return (
    <div className="sidebar">
      <ul>
        <li className='path'>
          <Link to="/settings">
            <FaTachometerAlt /> dashboard
          </Link>
        </li>
        <li className='path'>
          <Link to="/settings">
          <FaFootballBall /> User Management
          </Link>
        </li>
        <li className='path'>
          <Link to="/settings">
            <FaChild /> Playground Management
          </Link>
        </li>
        <li className='path'>
          <Link to="/feedback">
            <FaComments /> Feedback View
          </Link>
        </li>
        <li className='path'>
          <Link to="">
            <LogoutButton/> 
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar3;

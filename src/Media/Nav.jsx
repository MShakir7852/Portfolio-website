import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaBlog } from "react-icons/fa";
import { FaUserAlt,FaFirstAid, FaAddressBook } from "react-icons/fa";
export default function Nav() {
  return (
    <div>
      <div className="NavBar">
        <ul>
            <li><Link to="/"><FaHome className='icon'/></Link></li>
            <li><Link to="./about"><FaUserAlt  className='icon'/> </Link></li>
            <li><Link to="./portfolio"><FaFirstAid  className='icon'/></Link></li>
            <li><Link to="./Contact"><FaAddressBook  className='icon'/></Link></li>
            <li><Link to="./Blog"><FaBlog  className='icon'/></Link></li>
        </ul>
      </div>
    </div>
  );
}

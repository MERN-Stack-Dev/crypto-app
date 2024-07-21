import React from 'react';
import './Header.css';
import { IoMdSearch } from "react-icons/io";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h2>Dashboard</h2>
      <div className='search-cont search-bar'>
        <IoMdSearch/>
         <input type="text" placeholder="Search.." className="search-baar " />  
      </div>
      
      <div className="profile">
       <div className="profile-icon">👤</div>
        <div className="profile-name">cosmos</div>
      </div>
    </div>
  );
}

export default Header;

import React from 'react'
import "./Navbar.css";
import logo from "../assets/images.png"

function Navbar()
{
  return (
  
    <nav className="navbar">

      <div className='logo'>
       <img src={logo} alt='boAt Logo' className='logo-img'></img>
      </div>
        
        <ul className='nav-links'>
            <li>Watches</li>
            <li>Accessories</li>
            <li>Sale</li>
        </ul>


        <div className="search-bar">
    <input type='text' placeholder='Search watches...'/> 
        </div>


        <div className='nav-icons'>
        <button className='cart'>Cart</button>
        <button className='profile'>Profile</button>
        </div>

        </nav>
   
  )
}

export default Navbar
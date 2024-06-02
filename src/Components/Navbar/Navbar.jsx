import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
      

      <div className='navbar'>
        <img src='images/Bandage.png' alt='' className='logo'/>
          <ul className='navbar-menu'>
          <li> Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
          </ul>
          <div className='navbar-right'>
            <div className='navbar-icon'>
              
              <button><img id='person' src='/images/Vector (4).png'/>Login / Register</button> 
              <img  src='images/Vector (5).png'/>
             <img src='images/Vector (6).png'/>
             <img src='images/Vector (8).png'/>
           </div>
          </div>
     
      </div>
      
    )
  
}

export default Navbar;

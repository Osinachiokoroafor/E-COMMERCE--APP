import React from 'react'
import './Alert.css';

function Alert  () {
  return (
    
      <div className="header-alert">

        <div className="contact">
         <p> (225) 555-0118' </p>
         <p> michelle.rivera@example.com</p>
        </div>

        <h4>Follow Us and get a chance to win 80% off </h4>
        
        <div className="follow">
          Follow Us :
          <div className="social">
          <img src='images/ant-design_instagram-outlined.png'/>
           <img src= 'images/a.png'/>
            <img src= 'images/facebook.png'/>
            <img src='images/ant-design_twitter-outlined.png'/>
          </div>
        </div>

      </div>
     
  )
};

export default Alert;
import React from 'react'
import './Footers.css';

function footer() {
  return (
    
     <div className='footer-container'>

              <div className='top-footer'>
                 <img src='images/Bandage.png' alt='' className='logo'/>
                 <div className='social'>
                 
                  <a href=''><img src='images/facebook.png'/></a>
                 <a href=''><img src='images/ant-design_instagram-outlined.png'/></a>
                  <a href=''><img src='images/ant-design_twitter-outlined.png'/></a>
                 </div>
              </div>

            <div className='contact-info'>
                <div className='first-info'>
                <h4>CompanyInfo</h4>
                 <p>About us</p>
                 <p>Carrier</p>
                 <p>We are hiring</p>
                 <p>Blog</p>
                </div>

                <div className='second-info'>
                <h4>Legal</h4>
                <p>About us</p>
                <p>We are hiring</p>
                <p> Carrier</p>
                <p>Blog</p>
               </div>

               <div className='third-info'>
                <h4>Legal</h4>
                <p>Buisness Markertin</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p> Unlimited</p>
               </div>

               <div className='forth-info'>
                <h4>Legal</h4>
                <p> IOS & Andriod</p>
                <p> Watch Demo</p> 
                <p>Customers</p>
                <p>Api</p>
               </div>

               <div className='fifth-info'>
                <h4>Get In Touch</h4>
                <></>
                <p>Lorw imp sum dolor Amit</p>
               </div>

            </div>
            <div className='lastpara'><p>Made With Love By Osinachi All Right Reserved </p> </div>

    </div>
  )
}

export default footer;
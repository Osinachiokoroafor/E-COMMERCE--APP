import React from 'react'
import './FeaturedServices.css'

export default function ProductServices() {
  return (
    <div className="product-service">
      <div className="product-service-header">
        <h3>Featured Products</h3>
        <h2>THE BEST SERVICES</h2>
        <p className='para-productservice'>Problems trying to resolve the conflict between</p>
      </div>

      <div className="product-service-row">
        <div className="product-service-card">
         <img src='images/icon%20cool-icon-1153.svg'/>
          <h3>Easy Wins</h3>
          <p className='firstp'>Get your best looking smile now!</p>
        </div>

        <div className="product-service-card">
          <img src='images/icon%20cool-icon-153.svg'/>
          <h3>Concrete</h3>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>

        <div className="product-service-card">
         <img src='images/uil_arrow-growth.png'/>
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
      
      <div className="product-bottom">
           <p className='last-para'>Practice Advice</p>
           <h2>Featured Post</h2>
         </div>

         
    </div>
  );
}
   import React from 'react'
   import './About.css'

   
   function About() {
     return (
       <div className='about'>

         <div className='review'>
         <h4 className='aboutheading'>  What they say about us</h4> 
          
          <img src='images/user.png' className='image'/>
          <img src='images/stars.png' className='image'/>
        

          <div className='aboutpara'>
           <p>Slate helps you see how many more days you need to work to 
            reach your financial goal.</p>
           <h5>Regina Miles</h5> 
          <h6> Designer</h6>
         </div>

       </div>
  
         <div className='image-gallery'>
             <img src='images/gallery.png'/>
         </div>

       </div>
     )
   }
   
   export default About;

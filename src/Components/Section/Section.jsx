import React from 'react'
import './Section.css'

function Section() {
  return (
          <div className='products'> 

                <div className='row'>
                    <img src='images/unsplash_hHdHCfAifHU.png' className='main'/>
                    <img src='images/tag.png' className='new'/>
                    
                    <div className='text'>
                    <li>Google</li>
                    <li>Trending</li>
                    <li>New</li>
                    <h3>Loudest à la Madison #1(L'integral)</h3> 
                    <p className='cardetail'>We focus on ergonomics and meeting 
                       you where you work. It's only a keystroke away.
                    </p>
                    <div className='time'>
                    <div className='date'>22  April 2021</div>
                    <div className='comments'>10 comments</div>
                    </div>
                    <a href>Learn More</a>
                   </div>
                </div> 
    
                 <div className='row'>
                       <img src='images/unsplash_tVEqStC2uz8.png' className='main'/>
                        <img src='images/tag.png' className='new'/> 
                        
                        <div className='text'>
                        <li>Google</li>
                        <li>Trending</li>
                        <li>New</li>
                        <h3>Loudest à la Madison #1(L'integral)</h3> 
                        <p className='cardetail'>We focus on ergonomics and meeting 
                        you where you work. It's only a keystroke away.
                        </p>
                        <div className='time'>
                            <div className='date'>22 April 2021</div>
                            <div className='comments'>10 comments</div>
                        </div>
                        <a href>Learn More</a>
                        </div>
                    
                    </div>

                   <div className='row'>
                        <img src='images/unsplash_dEGu-oCuB1Y.png' className='main'/>
                        <img src='images/tag.png' className='new'/> 
                        <div className='text'>
                         <li>Google</li>
                         <li>Trending</li>
                         <li>New</li>
                         <h3>Loudest à la Madison #1(L'integral)</h3> 
                         <p className='cardetail'>We focus on ergonomics and meeting 
                         you where you work. It's only a  keystroke away.
                         </p>
                         <div className='time'>
                            <div className='date'>22 April 2021</div>
                            <div className='comments'>10 comments</div>
                         </div>

                         <a href>Learn More</a>
                       </div>
                    </div> 
             </div>
  )
}

export default Section;
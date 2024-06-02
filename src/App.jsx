import React from 'react'
import Alert from './Components/Alert/Alert'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import Featured from './Components/Featured/Featured'
import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct'
import FeaturedServices from './Components/FeaturedServices/FeaturedServices'
import Section from './Components/Section/Section'
import About from './Components/About/About'
import Design from './Components/Design/design'
import Footers from './Components/Footers/Footers'


const App = () => {
  return (
    <div className='app'>
      <Alert/>
      <Navbar/>
      <HeroSection/>
      <Featured/>
      <FeaturedProduct/>
      <FeaturedServices/>
      <Section/>
      <About/>
      <Design/>
      <Footers/>
    
     
      

    </div>
  )
}

export  default  App;

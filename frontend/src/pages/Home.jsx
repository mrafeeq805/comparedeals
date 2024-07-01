import React from 'react'
import Features from '../components/Features'
import AboutSection from '../components/AboutSection'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import HowItWorks from '../components/HowItWorks'

export const Home = () => {
  return (
    <div className='bg-black h-max'>
        <Intro/>
        <AboutSection/>
        <HowItWorks/>
        <Features/>
        <Footer/>
    </div>
  )
}

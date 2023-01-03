import React from 'react'
import Hero from '../../components/Section1/Hero'
import Brands from '../../components/Section2/Brands'
import Portfolio from '../../components/Section3/Portfolio'
import Services from '../../components/Section4/Services'
import About from '../../components/Section5/About'
import Testimonial from '../../components/Testimonials/Testimonial'

function Home() {
  return (
    <div>
      <Hero/>
      <Brands />
      <Services />
      <Portfolio />
      <Testimonial/>
    
    </div>
  )
}

export default Home
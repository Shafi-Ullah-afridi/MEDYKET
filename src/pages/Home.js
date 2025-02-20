import React from 'react'
import Hero from '../components/hero/Hero'
import Services from '../components/services/Services'
import Qualification from '../components/qualification/Qualification'
import Review from '../components/review/Review'
import Doctors from '../components/doctors/Doctors'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Qualification />
      <Doctors />
      <Review />
    </div>
  )
}

export default Home
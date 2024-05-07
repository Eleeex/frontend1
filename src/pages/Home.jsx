import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import PopularProduct from '../components/PopularProduct'
import NewArrivals from '../components/NewArrivals'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <PopularProduct/>
    <Offer />
    <NewArrivals />
    </>
  )
}

export default Home
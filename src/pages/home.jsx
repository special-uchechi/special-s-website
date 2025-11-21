import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import BestSelling from '../Components/BestSelling'
import ExploreProducts from '../Components/ExploreProducts'
import Advertisment from '../Components/Advertisment'

function Home() {
  return (
    <>
     <Hero/>
     <BestSelling/>
     <ExploreProducts />
     <Advertisment/>
    </>
  )
}

export default Home
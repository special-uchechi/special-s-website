import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Components/footer'

function MainLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
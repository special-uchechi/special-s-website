import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import MenuBar from './MenuBar';


function Hero() {
  return (
    
    <section className='lg:flex gap-28 bg-linear-to-b  from-gray-100 to-white  container mx-auto'>

       
       <div className='lg:hidden pt-4 ml-8 mb-[]  w-[]  '>
            <img className=' border  w-full rounded-2xl' src="https://images.unsplash.com/photo-1665332195309-9d75071138f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" />
        </div>

       {/* // This is the Hero Section */}


        <div className='border ml-8 mt-4 rounded-2xl'>
          <MenuBar/>
        </div>

        <div className='hidden lg:block pt-4 mb-[]  w-[700px]  '>
            <img className=' border h-[300px] w-full rounded-2xl' src="https://images.unsplash.com/photo-1665332195309-9d75071138f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" alt="" />
        </div>
      

    </section>
    
  )
}

export default Hero





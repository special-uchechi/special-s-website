import React from 'react'
import { NavLink } from 'react-router'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";





function NavBar() {
  return (
    <>
    <nav className='flex justify-between px-16 py-8 bg-pink-300'>
   
      <div>
        <p className='text-red-900 text-2xl font-extrabold'>Special's Cuisine</p>
      </div>

        <div className='w-[400px] '>
            <ul className='flex justify-around'>
                <li className=''><NavLink to={'/'}>Home</NavLink></li>
               
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                
                <li><NavLink to={'/about'}>About</NavLink></li>
                
                <li><NavLink to={'/signUp'}>Sign Up</NavLink></li>
            </ul>
        </div>

      
      <div className='flex'>
        <IoSearchOutline size={30} color="black" className='mr-4'/>
        <CiHeart size={30} color="red"/>
        <CiShoppingCart size={30} color="black"/>
      </div>

    </nav>
    </>
  )
}

export default NavBar
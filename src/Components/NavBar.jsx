import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";



function NavBar() {

  const [visible, setVisible] = useState(false)

  return (
    < >

   <div className='relative'>
    <nav className='flex justify-between py-2 px-8 lg:px-16 lg:py-8 bg-pink-300  static items-center '>
   
      <div>
       <Link to={'/'}> <p className='prata-regular text-red-900 text-2xl font-extrabold leading-5'>Special's Cuisine</p></Link>
      </div>

        <div className='w-[400px] '>
            <ul className='hidden lg:flex justify-around'>
                <li  className=''><NavLink to={'/'}>Home</NavLink><hr className='hidden'/></li>
               
                <li><NavLink to={'/contact'}>Contact</NavLink><hr className='hidden'/></li>
                
                <li><NavLink to={'/about'}>About</NavLink><hr className='hidden'/></li>
                
                <li><NavLink to={'/signUp'}>Sign Up</NavLink><hr className='hidden'/></li>
                
                <li><NavLink to={'/admin'}>Admin</NavLink><hr className='hidden'/></li>
            </ul>
        </div>

      
      <div className='flex '>
        <IoSearchOutline size={30} color="black" className='mr-4'/>
        <Link to={'/cart'} className='relative'><CiShoppingCart size={30} color="black" />
        <p className='absolute right-[5px] bottom-0 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
        </Link>
        <div className='group relative'><IoMdContact size={30} color="black" className=''/>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black '>My Profile</p>
            <p className='cursor-pointer hover:text-black '>Orders</p>
            <p className='cursor-pointer hover:text-black '>log out</p>
          </div>
        </div>
        </div>
        <FaBars onClick={()=>setVisible(true)} size={30} color="black" className='lg:hidden cursor-pointer'/>
      
      </div>

       {/* side barmenu for small screen  */}
       <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all h-screen ${visible ? 'w-full'  : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            
            <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <IoIosArrowForward className='h-4 rotate-180'/>
              <p>Back</p>
            </div>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 bg-red-900 border' to={'/'}>Home</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/about'}>About</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/contact'}>Contact</NavLink>
            <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to={'/signUp'}>Sign Up</NavLink>

          </div>
       </div>
       
    </nav>
   </div>
    
    </>
  )
}

export default NavBar
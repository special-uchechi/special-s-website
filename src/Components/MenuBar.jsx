import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, Links } from 'react-router';

const menuBarArray = [
    {
        p:"Foods",
        icon: <IoIosArrowForward />,
        url:`/category/food`
    },
    {
        p:"Pastries",
        icon: <IoIosArrowForward />,
        url:"/category/pastries"
    },
    {
        p:"Drinks",
        icon: <IoIosArrowForward />,
        url:"/category/drinks"
    },
    {
        p:"Ice Creams",
        icon: <IoIosArrowForward />,
        url:"/category/iceCreams"
    },
    {
        p:"Special Request",
        icon: <IoIosArrowForward />,
        url:"/category/specialRequest"
    }
] 

function MenuBar() {
  return (
    <>
     
       {menuBarArray.map((items, index)=>(
        <Link to={items.url} key={index} className='flex justify-between items-center border-b mx-8 w-[300px] pt-8 hover:bg-gray-200 cursor-pointer'>
            <p className='prata-regular'>{items.p}</p>
            <span>{items.icon}</span>
        </Link>
       ))}
     
    </>
  )
}

export default MenuBar
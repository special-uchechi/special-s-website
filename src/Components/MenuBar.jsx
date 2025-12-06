import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, Links } from 'react-router';

const menuBarArray = [
    {
        p:"Foods",
        icon: <IoIosArrowForward />,
        url:"/food"
    },
    {
        p:"Pastries",
        icon: <IoIosArrowForward />,
        url:"/pastries"
    },
    {
        p:"Drinks",
        icon: <IoIosArrowForward />,
        url:"/drinks"
    },
    {
        p:"Ice Creams",
        icon: <IoIosArrowForward />,
        url:"/iceCream"
    },
    {
        p:"Special Request",
        icon: <IoIosArrowForward />,
        url:"/specialRequest"
    }
] 

function MenuBar() {
  return (
    <>
     
       {menuBarArray.map((items, index)=>(
        <Link to={items.url} key={index} className='flex justify-between items-center border-b mx-8 w-[300px] pt-8 hover:bg-gray-200 cursor-pointer'>
            <p>{items.p}</p>
            <span>{items.icon}</span>
        </Link>
       ))}
     
    </>
  )
}

export default MenuBar
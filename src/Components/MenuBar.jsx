import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const menuBarArray = [
    {
        p:"Foods",
        icon: <IoIosArrowForward />
    },
    {
        p:"Pastries",
        icon: <IoIosArrowForward />
    },
    {
        p:"Drinks",
        icon: <IoIosArrowForward />
    },
    {
        p:"Ice Creams",
        icon: <IoIosArrowForward />
    },
    {
        p:"Special Request",
        icon: <IoIosArrowForward />
    }
] 

function MenuBar() {
  return (
    <>
     
       {menuBarArray.map((items, index)=>(
        <div key={index} className='flex justify-between items-center border-b mx-8 w-[300px] pt-8 hover:bg-gray-200 cursor-pointer'>
            <p>{items.p}</p>
            <span>{items.icon}</span>
        </div>
       ))}
     
    </>
  )
}

export default MenuBar
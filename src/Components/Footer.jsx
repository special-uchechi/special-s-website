import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



const footerArray = [
  {
   h3:"Special's Cuisine",
   p1:"Suscribe",
   p2:"Get 10% off your first order",
   p3: <span>
    <input type="email" placeholder='Enter your email' className='p-2 border border-white my-4 rounded-[12px]'/>
   <button className='bg-red-400 text-white p-2 rounded-lg'>Subscribe</button>
   </span>
  },

  {
   h3:"Support",
   p1: <span>
     <p>No.30 dfri road, off Ozuboko, Abuloma road, <br/> Port Harcourt, Rivers State. Nigeria</p>
   </span>,
   p2:"specialu4sure@gmail.com",
   p3:"+234 903 330 6974",
   ps:<FaFacebook size={20} className='inline bg-red-400'/>,
   ps2:<FaSquareInstagram size={20} className='inline bg-red-400' />,
   ps3: <FaXTwitter size={20} className='inline bg-red-400' />,
   ps4: <FaLinkedin  size={20} className='inline bg-red-400' />
    

  },

  {
   h3:"Account",
   p1:"my account",
   p2:"Login / Register",
   p3:"Cart",
   p4:"Wishlist",
   p5:"Shop"
  },

  {
   h3:"Quick Link",
   p1:"Privacy Policy",
   p2:"Terms of Use",
   p3:"FAQ",
   p4:"Contact"
  }
]

function Footer() {
  return (
    <>
     
     <section className='container mx-auto bg-whit'>
        
        
        <div className='bg-black lg:flex justify-between border-white'>

       { footerArray.map((item, index) => (
          <div key={index} className='text-white p-4 lg:p-8'>
            <h3 className='font-bold text-lg lg:mb-4 text-red-400'>{item.h3}</h3>
            <p className='mb-2'>{item.p1}</p>
            <p className='mb-2'>{item.p2}</p>
            <p className='mb-2'>{item.p3}</p>
           <div className='flex gap-4'>
            <p>{item.ps}</p>
            <p>{item.ps2}</p>
            <p>{item.ps3}</p>
            <p>{item.ps4}</p>
           </div>
            <p className='mb-2'>{item.p4}</p>
            <p className='mb-2'>{item.p5}</p>
          </div>
       )) }

        </div>


     </section>
    </>
  )
}

export default Footer
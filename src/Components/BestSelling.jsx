import React from 'react'
import { Link } from 'react-router'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


const bestSellindArray = [
    {img: 'https://media.istockphoto.com/id/828619698/photo/two-glasses-of-refreshing-horchata-de-chufa-drink-shot-on-rustic-wooden-table.jpg?s=1024x1024&w=is&k=20&c=-73S0Gp9pd3f7o4AVV6bM9LR7EnEdzMPkjike2iRazQ=',
        productName: 'Tiger Nut Drink',
        price: '1500 NGN',
        rating: <FaStar />
    },
    {img: 'null',
        productName: 'Buttercream Cake',
        price: '30000 NGN',
        rating: <FaStar />},
    {img: 'null',
        productName: 'Wheat Bread',
        price: '5000 NGN',
        rating: <FaStar />},
    {img: 'null',
        productName: 'Small Chops',
        price: '2500 NGN',
        rating: <FaStar />}
]


function BestSelling() {
  return (
    <>
     <section className='px-6 pt-10 container mx-auto bg-gray-100'>
        <div className='flex justify-between lg:px-16 lg:py-8'>
            <h1 className='prata-regular text-3xl font-bold text-red-900 leading-8'>Best Selling Products</h1>
            <Link className='lg:block border p-3  w-[100px] lg:w-[150px] text-center bg-red-400 rounded-2xl shadow-2xl shadow-black text-white'>View All</Link>
        </div>

        <div className='lg:flex justify-around'>
            {bestSellindArray.map((item, index) => (
                <div key={index} className='relative lg:mx-2 mx-8 px-6 my-4'>
                    <img className='w-[200px] h-[200px] rounded-tl-2xl rounded-br-2xl' src={item.img}  />
                    <h2>{item.productName}</h2>
                    <p>{item.price}</p>
                    <div className='flex text-amber-300'>
                        {item.rating}
                        {item.rating}
                        {item.rating}
                        {item.rating}
                        {item.rating}
                    </div>
                    <div className='absolute top-4 left-38 lg:absolute lg:top-4 lg:right-4'>
                        <CiHeart size={30} color="red"/>
                    </div>
                </div>
            ))}
        </div>
     </section>
    </>
  )
}

export default BestSelling
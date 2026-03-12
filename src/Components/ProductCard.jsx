import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react'
import { Link } from 'react-router';

function ProductCard({product}) {

   

    return (
        <>
            <div key={product.id}>
                <div className='relative w-[200px] '>
                    <img className='w-[200px] h-[200px] rounded-tl-2xl rounded-br-2xl' src={product.image} />
                    <h2 className='font-bold'>{product.name}</h2>
                    <p className=''>{product.category}</p>
                    <p className=''>N{product.price}</p>
                    <Link to={`/${product._id}`} className='px-4 text-white bg-red-400 cursor-pointer' >View</Link>
                    <div className='flex text-amber-300 gap-2 px-2 py-2'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    
                    
                    <div className='absolute top-4 right-4'>
                        <CiHeart size={30} color="red" />
                        <CiShoppingCart size={30} color="black"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
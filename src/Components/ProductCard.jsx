import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react'

function ProductCard({product}) {

   

    return (
        <>
            <div key={product.id}>
                <div className='relative border w-[200px]'>
                    <img className='w-[200px] h-[200px]' src={product.image} />
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <div className='flex text-amber-300 gap-2'>
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
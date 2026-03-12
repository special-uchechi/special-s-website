import React, { use } from 'react'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'



function ExploreProducts({showAll = false}) {
    const [products, setProducts] =useState([])
        useEffect(() => {
      const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:7000/products',{
                method: 'GET',
                headers:{"content-type":"application/json"}
            })
            if(!response.ok){
                throw new Error ('Failed to fetch products')
            }
            const data = await response.json();
            console.log(data)
            console.log(data.name)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
      }
        console.log("hello")
        
        console.log(products.name)
        console.log(products.id)
        fetchProducts()

        }, [])

  return (
    <>
    <section className='px-6 pt-10 container mx-auto bg-gray-100'>
        <div className='flex justify-between lg:px-16 lg:py-8'>
                    <h1 className='prata-regular text-3xl font-bold text-red-900'>Explore Our Products</h1>
                   {showAll &&  <Link to={'/products'}  className='block p-3 w-[100px] text-center bg-red-400 rounded-2xl shadow-2xl shadow-black text-white'>View All</Link>}
                </div>

         <div className='grid grid-cols-1  lg:grid-cols-4 gap-3 container mx-auto px-16 py-8'>
              
            
            {showAll ? products.slice(0,4).map((product)=>(
                <ProductCard product={product} key={product.id}/>
              )) 
              : products.map((product)=>(
                <ProductCard product={product} key={product.id}/>
              ))}
              

                 
            </div>

    </section>
    </>
  )
}

export default ExploreProducts
import React, { useState } from 'react'
import { useEffect } from 'react'
import {  useParams } from 'react-router'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'


function Productdetailed() {

   const { id } = useParams()
   const navigate = useNavigate()
    const [product, setProduct] = useState({
        
        id: "",
       image: "",
       name: "",
      category: "",
      price: "",
      in_stock: "",
      ingredients: "",
      description:""
     
    })


   useEffect(()=>{
           
          const fetchProducts = async ()=>{
             try {
              const response = await fetch(`http://localhost:7000/products/${id}`,{
                method: "GET",
                headers:{'Content-Type':'Application/json'},
                // credentials:"include"
              })
              // if (response.status === 401){
              //   navigate("/signin")
              // }
              // if (!response.ok) {
              //   throw new Error("an error fetching data products")
              // }
              const data = await response.json()
              // console.log(data)
              setProduct(data)
              console.log(product)
             } catch (error) {
              console.log(error)
             }
            }
            console.log("hello world")
            console.log(product)
    
            fetchProducts()
        }, [id])

        

  return (
    <>
     <div className='grid grid-cols-1 lg:grid-cols-4 p-4 gap-5'>
                    <div className='grid col-span-3 rounded-xl p-4'>
                        <img src={product.image} alt="" />
                        <h2 className='text-5xl'>{product.name}</h2>
                        <p className='text-red-600'>{product.category}</p>
                        <p>{product.price}</p>
                    </div>
                    <div className='grid col-span-3 row-span-2 rounded-xl p-4'>
                        <h3>Product Description</h3>
                        <p>{product.description}</p>

                    </div>
                    {/* <div className='rounded-xl'>
                        <div>
                            <h5>Manage Job</h5>
                            <Link to={`/cart`} className='py-2 bg-red-600 px-5' >Add to cart</Link>
                            <button   className='py-2 bg-red-600 px-5' ></button>
                        </div>
                    </div> */}

            </div>
    </>
  )
}

export default Productdetailed
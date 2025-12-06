import React from 'react'
import { useState } from 'react'

function AdminForm() {
  const [image, setImage]= useState("")
const [name, setName]= useState("")
const [category, setCategory]= useState("")
const [ingredients, setIngredients]= useState("")
const [price, setPrice]= useState("")


console.log(image, name, category,ingredients, price) 

const handleSubmit = async (e)=>{
  e.preventDefault()
  const newProduct = {
    image,
    name,
    category,
    ingredients,
    price
  }

  console.log(newProduct) 
    try {
      const response = await fetch('http://localhost:7000/products',{
        method: "POST",
        headers:{'Content-Type':'Application/json'},
        body: JSON.stringify(newProduct)
      })
       if (!response.ok) {
        throw new Error("coukd not post new job")
      }
      const data = await response.json()
      console.log(data)
      } catch (error) {
      
    }
  }
  return (
    <>
     <section className=' flex justify-center bg-[#f7f7f7] '>
      <div className='w-[600px] bg-gray-400 p-5 my-6'>
      <h2 className='text-center text-2xl text-red-900 font-medium'>Admin form</h2>
      <form onSubmit={handleSubmit }  action="" method="post"  className='flex flex-col'>

          <label className=' font-semibold' htmlFor="type">Image</label>
          <input onChange={(e)=>setImage(e.target.value)} type="text" accept="image/*" />


          <label className='pt-4 font-semibold py-3' htmlFor="name">Name</label>
          <input onChange={(e)=>setName(e.target.value)} className='border outline-none py-3 px-2 rounded ' name='name'  type="text"  placeholder=' Name'  />

          <label className='pt-4 font-semibold' htmlFor="title">Category</label>
          <select onChange={(e)=>setCategory(e.target.value)} className='border outline-none py-3 px-2 rounded' name="category" id="category">
            <option value="Food">Food</option>
            <option value="Pastries">Pastries</option>
            <option value="Drinks">Drinks</option>
            <option value="Ice Creams">Ice Creams</option>
            <option value="Special Request">Special Request</option>
          </select>
               {console.log(category)}

          <label className='pt-4 font-semibold' htmlFor="Ingredients">Ingredients</label>
          <input onChange={(e)=>setIngredients(e.target.value)}  className='border rounded outline-none my-3 p-3' type='text' name="ingredients"  placeholder='butter, flour, sugar, etc' id="ingredients"/>
          

          <label className='pt-4 font-semibold' htmlFor="price">price</label>
          <input onChange={(e)=>setPrice(e.target.value)}  className='border outline-none py-3 px-2 rounded my-2' id='price' type="text" name='price'  placeholder='item price' /> 

          <button  className='bg-red-900 w-full py-2 rounded-2xl mt-4 text-white font-medium cursor-pointer' type='submit'> Add Product</button>
      </form>
      </div>
    </section>
    </>
  )
}

export default AdminForm
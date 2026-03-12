import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
function Category() {
const [products, setProducts] = useState([])
const [filtered, setFiltered] = useState([])
const [loading, setLoading] = useState(false)

  const {category} = useParams()
  useEffect (()=>{
      const handleFetch = async () =>{
         try {
            const response = await fetch(`http://localhost:7000/products`,{
                method: 'GET',
                headers:{"content-type":"application/json"}
            })
            if(!response.ok){
                throw new Error ('Failed to fetch products')
            }
            const data = await response.json();
            console.log(data)
            setProducts(data)
            console.log(products)
        } catch (error) {
            console.log(error)
        }
      }
      handleFetch()
  },[])
  useEffect (()=> {
    setFiltered(products.filter((item) => item.category.toLowerCase() === category.toLowerCase()))
  },[products, category])
  return (
    <> 
     <div>
      {
      filtered.map((product, index)=>(
        <div>
          <ProductCard key={index} product={product}/>
        </div>
      ))
      }
     </div>
    </>
  )
}

export default Category
import React from 'react'

function Pastries() {

 
  const [category, setCategory] = useState("pastries");
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
    

    </>
  )
}

export default Pastries
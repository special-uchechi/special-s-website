import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

function LogInPage() {
     const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
const [error, setError] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: ""
  })

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    contact: "",
    password: ""
  })


const handleSubmit = async(e) => {
    e.preventDefault()
 
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:9001/signin', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
        credentials:'include'
      })

      const data = await response.json()
      setIsLoading(false)
      console.log(data)

      if (!response.ok) {
      return  setError(data.err)
      }

      setUserData(data.user)
      if(userData){
      return  navigate('/')
      }

    } catch(error) {
      console.log(error)
      setError("Failed to connect to server")
    }

  }
  
  const handleInputChange = (e) =>{
    setUserData({...userData, [e.target.name]:e.target.value})
  }
  return (
    <>
     <section className=''>
        <div className='lg:flex justify-around hover:border-red-900 p-8'>
           
            <div className='hidden lg:block'>
                <img className='w-[650px] h-[550px] border' src="https://i.pinimg.com/736x/e2/6f/92/e26f921977e1636c4f3cda56b276c789.jpg" alt="" />
            </div>
            
            <div className='  w-[371px] flex flex-col  gap-4 py-4'>

               <div>
                <h1 className='text-4xl font-bold text-red-900'>Create an account</h1>
               <p className='text-[16px] mt-2'>Enter your details below</p>
               </div>


                <form action="" method="" onSubmit={handleSubmit} className='bo flex flex-col gap-4 mt-3'>
                    
                    <label className='pt-4 font-semibold py-3' htmlFor="email"></label>
                    <input onChange={handleInputChange} type="text" className='border-b py-2' placeholder='Enter your email' />
                    
                    <label className='pt-4 font-semibold py-3' htmlFor="password"></label>
                    <input onChange={handleInputChange} type="password" className='border-b py-2' placeholder='password' />

                     <div className='flex flex-col justify-between gap-6 items-center'>
                    <button className='bg-red-900 text-white p-4 rounded-xl shadow-2xl shadow-black w-[200px] ml-18 mt-2'>{isLoading ? <ClipLoader /> : "Log In"}</button>
                    <Link className='text-red-900 text-[20px] ml-10'>Forgot Password?</Link>
                     </div>
                     
                </form>
                
            </div>
           
            <div className='lg:hidden pt-4'>
                <img className='border  w-full rounded-2xl' src="https://i.pinimg.com/736x/e2/6f/92/e26f921977e1636c4f3cda56b276c789.jpg" alt="" />
            </div>
            

        
        </div>
    </section>
    </>
  )
}

export default LogInPage
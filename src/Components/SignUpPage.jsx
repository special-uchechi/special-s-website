import React from 'react'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'

function SignUpPage() {
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

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
    setError({...error, [e.target.name]:""})
    console.log(e.target.name, e.target.value)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
 
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:9001/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      })

      const data = await response.json()
      setIsLoading(false)
      console.log(data)

      if (!response.ok) {
      return  setError(data.err)
      }

      setUserData(data.success)
      if(userData){
      return  navigate('/signin')
      }

    } catch(error) {
      console.log(error)
      setError("Failed to connect to server")
    }

  }
  return (
    <>
     <section className=''>
        <div className='lg:flex justify-around hover:border-red-900 p-8'>
           
            <div className='hidden lg:block'>
                <img className='w-[650px] h-[550px] border' src="https://i.pinimg.com/736x/87/6d/66/876d66aabd7c751e433642e126b2e1e3.jpg" alt="" />
            </div>

            <div className='  w-[371px] flex flex-col  gap-4 py-4'>

               <div>
                <h1 className='text-4xl font-bold text-red-900'>Create an account</h1>
               <p className='text-[16px] mt-2'>Enter your details below</p>
               </div>


                <form action="" method="" onSubmit={handleSubmit} className='bo flex flex-col gap-2 mt-3'>
                    
                    <label className='font-semibold' htmlFor="fullname">Full Name</label>
                    <input onChange={handleInputChange} type="text" className='border-b ' placeholder='Name' />
                    
                    <label className='font-semibold ' htmlFor="email">Email</label>
                    <input onChange={handleInputChange} type="text" className='border-b ' placeholder='Enter your email' />

                    <label className='font-semibold' htmlFor="contact">Contact</label>
                    <input onChange={handleInputChange} type="text" className='border-b ' placeholder='Enter your Contact' />

                    <label className='font-semibold' htmlFor="password">Password</label>
                    <input onChange={handleInputChange} type="password" className='border-b ' placeholder='Enter your password' />

                    <button className='bg-red-400 text-white p-2 w-[200px] ml-18 rounded-xl shadow-2xl shadow-black mt-2 mb-2'>Create Account</button> 
                     <div className=''>
                     <p className='text-center'>Already have an account?</p>
                    <Link to={'/login'} className='bg-red-900 block text-white text-center p-2 rounded-xl shadow-2xl shadow-black w-[200px] ml-18 mt-2'>{isLoading ? <ClipLoader /> : "Log In"}</Link>
                    </div>
                </form>
                
            </div>

             <div className='lg:hidden pt-4'>
                <img className=' border  w-full rounded-2xl' src="https://i.pinimg.com/736x/87/6d/66/876d66aabd7c751e433642e126b2e1e3.jpg" alt="" />
            </div>
            
        
        </div>
    </section>
    </>
  )
}

export default SignUpPage
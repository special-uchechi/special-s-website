import React from 'react'
import { Link } from 'react-router'

function SignUpPage() {
  return (
    <>
     <section className=''>
        <div className='flex justify-around hover:border-red-900 p-8'>
            <div>
                <img className='w-[650px] h-[550px] border' src="" alt="" />
            </div>
            
            
            <div className='  w-[371px] flex flex-col  gap-4 py-4'>

               <div>
                <h1 className='text-4xl font-bold text-red-900'>Create an account</h1>
               <p className='text-[16px] mt-2'>Enter your details below</p>
               </div>


                <form action="" method="" className='bo flex flex-col gap-4 mt-3'>
                    
                    <input type="text" className='border-b py-2' placeholder='Name' />
                    <input type="text" className='border-b py-2' placeholder='Enter your email' />
                    <input type="text" className='border-b py-2' placeholder='Phone Number' />
                    <input type="password" className='border-b py-2' placeholder='password' />

                    <button className='bg-red-400 text-white p-4 w-[200px] ml-18 rounded-xl shadow-2xl shadow-black mt-2 mb-2'>Create Account</button> 
                     
                </form>
                <div className=''>
                    <p className='text-center'>Already have an account?</p>
                    <Link to={'/login'} className='bg-red-900 block text-white text-center p-4 rounded-xl shadow-2xl shadow-black w-[200px] ml-18 mt-2'>Log In</Link>
                </div>
            </div>

        
        </div>
    </section>
    </>
  )
}

export default SignUpPage
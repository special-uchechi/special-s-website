import React from 'react'
import { NavLink } from 'react-router'
import AdminForm from './AdminForm'

function AdminDashboard() {
  return (
    <section className='px-6 pt-10 container mx-auto bg-gray-100'>
        
        <div className='bg-gray-800'>
          <h1 className='text-4xl font-bold py-6 px-4 text-white'>Dashboard</h1>
        </div>
        
        <div className='flex gap-20'>

         {/* Admin NavBar  */}
         <div className='border mt-6 mb-7 bg-gray-400'>
            <nav className=' px-16 py-8  static items-center'>
               
                  <div>
                    <p className='text-red-900 text-2xl font-extrabold'>Special's Cuisine</p>
                  </div>
            
                    <div className=''>
                        <ul className='flex flex-col justify-around'>
                            <li className='text-[20px] font-bold'><NavLink>Dashboard</NavLink></li>
                            
                            <li className=''><NavLink>Products</NavLink></li>
                           
                            <li className=''><NavLink>Categories</NavLink></li>
                            
                            <li className=''><NavLink>Analytics</NavLink></li>
                        </ul>
                    </div>
                </nav>
         </div>
         {/* End of Admin NavBar  */}



        {/* Admin Dashboard  */}
         <div>
            <AdminForm/>
         </div>
        {/* End of Admindashboard */}

        </div>
    </section>
  )
}

export default AdminDashboard
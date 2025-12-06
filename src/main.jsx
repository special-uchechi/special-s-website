import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/about.jsx'
import SignUp from './pages/signUp.jsx'
import LogInPage from './Components/LogInPage.jsx'
import Products from './pages/products.jsx'
import Food from './pages/food.jsx'
import Drinks from './pages/drinks.jsx'
import Pastries from './pages/pastries.jsx'
import IceCream from './pages/iceCream.jsx'
import SpecialRequest from './pages/specialRequest.jsx'
import Admin from './pages/admin.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<MainLayout/>}>
       <Route path='/products' element={<Products/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/admin' element={<Admin/>}/>
       <Route path='/signup' element={<SignUp />}/>
       <Route path='/login' element={<LogInPage/>} /> 
       <Route path='/food' element={<Food/>}/>   
       <Route path='/drinks' element={<Drinks/>}/>   
       <Route path='/pastries' element={<Pastries/>}/>   
       <Route path='/iceCream' element={<IceCream/>}/>   
       <Route path='/specialRequest' element={<SpecialRequest/>}/>   
    </Route>
  </Routes>
  </BrowserRouter>
)

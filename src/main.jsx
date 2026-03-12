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
import Admin from './pages/admin.jsx'
import Category from './pages/category.jsx'
import Cart from './pages/cart.jsx'
import Productdetailed from './pages/productdetailed.jsx'


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
       <Route path='/cart' element={<Cart/>} /> 
       <Route path='/:id' element={<Productdetailed/>} /> 
       <Route path='/category/:category' element={<Category/>}/>      
    </Route>
  </Routes>
  </BrowserRouter>
)

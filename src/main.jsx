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


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route element={<MainLayout/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/signup' element={<SignUp />}/>    
    </Route>
  </Routes>
  </BrowserRouter>
)

import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Services from './Services';
import "./Navbar.css";
// import PageNotFound from './PageNotFound';

const Navbar = () => {
  return (
    <div>
        <div className='route'>
        <NavLink className="li" to='/about'>About</NavLink>
        <NavLink className="li" to='/contact'>Contact</NavLink>
        <NavLink className="li" to='/services'>Services</NavLink>
       </div>
        
        <br/>
        <br/>

      
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
    </div>
  )
}

export default Navbar
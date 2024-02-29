import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <p>CodeEZY</p>
        </div>
        <div className='nav_right'>
        <Link to="/About" className='link'>About</Link>
        <Link to="/About" className='link'>Pricing</Link>
        <Link to="/About" className='link'>Our Team</Link>
        </div>
    </div>
   
    </>
  )
}

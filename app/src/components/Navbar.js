import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>EcoChic</h1>
      <div className='navbar-options'>
        <ul>
          <li><Link to='/home'>HOME</Link></li>
          <li>STORES</li>
          <li>WHO WE ARE</li>     
        </ul>
        <button className='login-button'>
          <Link to='/auth'>LOG IN</Link>
        </button>
      </div>      
    </div>
  )
}

export default Navbar
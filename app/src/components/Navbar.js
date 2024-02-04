import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>
        <span className='green'>Eco</span>
        <span className='purple'>Chic</span>
        </h1>
      <div className='navbar-options'>
        <ul>
          <li>
            <Link to='/home'> HOME </Link>
          </li>
          <li>
            <Link to='/stores'>STORES</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>     
        </ul>
        <Link to='/auth'>
          <button className='login-button'>LOG IN</button>
        </Link>
      </div>      
    </div>
  )
}

export default Navbar
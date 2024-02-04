import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({userId}) => {
  return (
    <div className='navbar'>
      <h1>
        <span className='green'>Eco</span>
        <span className='purple'>Chic</span>
        </h1>
      <div className='navbar-options'>
        <ul>
          <li>
            <Link to={'/home/' + userId} > HOME </Link>
          </li>
          <li>
            <Link to={'/stores/' + userId}>STORES</Link>
          </li>
          <li>
            <Link to={'/about/' + userId}>ABOUT</Link>
          </li>     
        </ul>
        <Link to='/auth'>
          <button className='login-button'>LOG OUT</button>
        </Link>
      </div>      
    </div>
  )
}

export default Navbar
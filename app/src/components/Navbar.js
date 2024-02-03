import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>EcoChic</h1>
      <div className='navbar-options'>
        <ul>
          <li>HOME</li>
          <li>STORES</li>
          <li>WHO WE ARE</li>     
        </ul>
        <button className='login-button'>LOG IN</button>
      </div>      
    </div>
  )
}

export default Navbar
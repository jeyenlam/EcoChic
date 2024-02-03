import React from 'react'
import LogInForm from '../components/LogInForm.js'
import Navbar from '../components/Navbar.js'

const Auth = () => {
  return (
    <div className='auth'>
      <Navbar/>
      <LogInForm/>
    </div>
  )
}

export default Auth
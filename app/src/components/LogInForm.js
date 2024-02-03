import React from 'react'

const LogInForm = () => {
  return (
    <div className='logInForm'>
      <h1>Log In</h1>
      <form id='logInForm'>
        <div className='label-div'>
          <label htmlFor='username'>Username</label>
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-div'>
          <input type='text' id='username' name='username'/>
          <input type='password' id='password' name='password'/>
        </div>        
      </form>
      <button type='submit' id='logInButton'>Log In</button>
    </div>
  )
}

export default LogInForm
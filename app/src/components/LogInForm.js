import React from 'react'
import { Link } from 'react-router-dom'

function LogInForm () {

  const logIn = (e) => {
    e.preventDefault();

    const rawFormData = new FormData(e.target)
    const formData = Object.fromEntries(rawFormData)

    // TODO : once JSON server is working, add something here that queries 
    // for the user from the JSON db and checks to see if their password matches 

    console.log(formData);
  }


  return (
    <div className='logInForm'>
      <div>
        <h1>Log In</h1>
        <p> Don't have an account?  <Link to={`/signUp`}> Sign Up Here </Link></p>
      <div>
      <form id='logInForm' onSubmit={logIn}>
        <div className='label-div'>
          <label htmlFor='username'>Username</label>
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-div'>
          <input type='text' id='username' name='username'placeholder='Username' />
          <input type='password' id='password' name='password' placeholder='Password'/>
        </div> 
        <button type='submit' id='logInButton'>Log In</button>       
      </form>
      </div>
      </div>
    </div>
  )
}

export default LogInForm
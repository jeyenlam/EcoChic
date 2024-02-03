import React from 'react'

function LogInForm () {

  const logIn = (e) => {
    e.preventDefault();

    const rawFormData = new FormData(e.target)
    const formData = Object.fromEntries(rawFormData)

    console.log(formData);
  }


  return (
    <div className='logInForm'>
      <h1>Log In</h1>
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
  )
}

export default LogInForm
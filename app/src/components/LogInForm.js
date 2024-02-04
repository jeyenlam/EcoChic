import React, { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'

function LogInForm () {
  const [loginSuccessful, setLoginSuccessful] = useState(false)
  const navigate = useNavigate();

  const logIn =  async (e) => {
    e.preventDefault();

    const rawFormData = new FormData(e.target)
    const formData = Object.fromEntries(rawFormData)
    const response = await fetch('http://localhost:3030/Users');
    const users = await response.json();
    var userExists = false;

    users.forEach( (user) => {
      // console.log(user);
      // console.log("user.username == formData.username" , user.username == formData.username);
      // console.log("user.password == formData.password", user.password == formData.password);
      if((user.username == formData.username) && (user.password == formData.password)) {
        userExists = true
      }
    })

    if (userExists == true) {
      setLoginSuccessful(true)
      navigate('/home')
    }

    // TODO : once JSON server is working, add something here that queries 
    // for the user from the JSON db and checks to see if their password matches 

    // console.log(formData);
  }


  return (

    // <div className='logInForm'>
    //   <div>
    //     <h1>Log In</h1>
    //     <p> Don't have an account?  <Link to={/signUp}> Sign Up Here </Link></p>
    //   <div>
    //   <form id='logInForm' onSubmit={logIn}>
    //     <div className='label-div'>
    //     </div>
    //     <div className='input-div'>
    //       <label htmlFor='username'>Username</label>
    //       <input type='text' id='username' name='username'placeholder='Username' />

    //       <label htmlFor='password'>Password</label>
    //       <input type='password' id='password' name='password' placeholder='Password'/>
    //     </div> 
    //     <button type='submit' id='logInButton'>Log In</button>
    //   </form>
    //   </div>
    //   </div>
    // </div>

    <div className="logInForm">
      <div className="form-header">
        <h1 className="purple">Log In</h1>
      </div>

      <form id="logInForm" onSubmit={logIn}>
          <div className="form-category">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="form-category">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div> 
          <div className="logInButtonDiv">
            <button type="submit" id="logInButton">Log In</button>
          </div>
      </form>
      <div className="form-footer">
        <p> Don't have an account? </p>
        <p><Link to={'/auth/signup'}> Sign Up Here </Link></p>
      </div>
    </div>
  )
}

export default LogInForm